package com.bluecrew.api.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bluecrew.api.model.Rol;
import com.bluecrew.api.model.Usuario;
import com.bluecrew.api.repository.UsuarioRepository;
import com.bluecrew.api.service.UsuarioService;

@Tag(name = "Auth", description = "API para gestión de identificación")
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AuthController {

    // He quitado el final de aquí, si no va es por eso
    @Autowired
    private AuthenticationManager authManager;
    private UsuarioService usuarioService;
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public AuthController(AuthenticationManager authManager, UsuarioService usuarioService,
            PasswordEncoder passwordEncoder) {
        this.authManager = authManager;
        this.usuarioService = usuarioService;
        this.passwordEncoder = passwordEncoder;
    }

    // SWAGGER
    @Operation(summary = "Identificación de usuario", description = "Inicia una sesión indicando usuario y contraseña")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Sesión iniciada con éxito", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = """
                    {
                       "message" : "string",
                       "user" : "string",
                       "roles": "string"
                    }
                    """)))
    })
    // ***************************************************************************

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(
            @RequestBody Map<String, String> credentials,
            HttpServletRequest request) {

        try {
            String email = credentials.get("email");
            String password = credentials.get("password");

            Authentication authentication = authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password));

            SecurityContext context = SecurityContextHolder.createEmptyContext();
            context.setAuthentication(authentication);
            SecurityContextHolder.setContext(context);

            request.getSession(true).setAttribute(
                    HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY,
                    context);

            UserDetails userDetails = (UserDetails) authentication.getPrincipal();

            com.bluecrew.api.model.Usuario usuario = usuarioRepository.findByEmail(email)
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

            Map<String, Object> map = new HashMap<>();
            map.put("message", "Login realizado con éxito");
            map.put("user", userDetails.getUsername());
            map.put("roles", userDetails.getAuthorities().toString());
            map.put("id", usuario.getId());

            return ResponseEntity.status(HttpStatus.OK).body(map);

        } catch (org.springframework.security.core.AuthenticationException e) {
            Map<String, Object> errorMap = new HashMap<>();
            errorMap.put("message", "Credenciales incorrectas");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorMap);
        }
    }

    @Operation(summary = "Registro de usuario", description = "Registra un nuevo usuario en el sistema a partir de sus datos")
    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody Usuario usuario) {
        Map<String, Object> response = new HashMap<>();

        if (usuario.getNombre() == null || usuario.getNombre().trim().isEmpty() ||
                usuario.getApellido() == null || usuario.getApellido().trim().isEmpty() ||
                usuario.getEmail() == null || usuario.getEmail().trim().isEmpty() ||
                usuario.getPassword_hash() == null || usuario.getPassword_hash().trim().isEmpty()) {

            response.put("error", "Los campos nombre, apellido, email y password_hash son obligatorios");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        String hashPassword = passwordEncoder.encode(usuario.getPassword_hash());
        usuario.setPassword_hash(hashPassword);

        if (usuario.getEventosCompletados() == null) {
            usuario.setEventosCompletados(0);
        }
        if (usuario.getActivo() == null) {
            usuario.setActivo(true);
        }
        if (usuario.getRol() == null) {
            usuario.setRol(Rol.USER);
        }

        try {

            Usuario nuevoUsuario = usuarioService.save(usuario);

            response.put("mensaje", "Usuario registrado con éxito");
            response.put("usuario", nuevoUsuario.getEmail());
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            response.put("error", "Error interno al guardar en BD: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    // SWAGGER
    @Operation(summary = "Cerrar sesión de usuario", description = "Cierra la sesión existente")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Sesión cerrada con éxito", content = @Content())
    })
    // ***************************************************************************
    @PostMapping("/logout")
    public ResponseEntity<Map<String, String>> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        Map<String, String> map = Map.of("message", "Sesión cerrada");

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(map);
    }

    // SWAGGER
    @Operation(summary = "Información del usuario identificado", description = "Muestra el usuario identificado y sus roles")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Información obtenida con éxito", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = """
                    {
                      "username" : "string",
                      "roles" : "string"
                    }
                    """)))
    })
    // ***************************************************************************
    @GetMapping("/user")
    public ResponseEntity<Map<String, String>> user(HttpServletRequest request) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        Map<String, String> map;
        if (auth == null || !auth.isAuthenticated() || auth.getPrincipal().equals("anonymousUser")) {
            map = Map.of(
                    "message", "Usuario no identificado");
        } else {
            UserDetails userDetails = (UserDetails) auth.getPrincipal();

            map = Map.of(
                    "username", userDetails.getUsername(),
                    "roles", userDetails.getAuthorities().toString());
        }

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(map);
    }
}