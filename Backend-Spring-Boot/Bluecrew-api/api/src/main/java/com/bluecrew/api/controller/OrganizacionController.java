package com.bluecrew.api.controller;

import com.bluecrew.api.model.Organizacion;
import com.bluecrew.api.service.OrganizacionService;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpServletRequest;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
@Tag(name = "Organizaciones", description = "API para gestión de organizaciones")
public class OrganizacionController {

    @Autowired
    private OrganizacionService organizacionService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // ***************************************************************************
    // CONSULTAS
    // ***************************************************************************

    // http://localhost:8080/api/organizaciones
    @Operation(summary = "Obtener todas las organizaciones", description = "Retorna una lista con todas las organizaciones")
    @GetMapping("/organizaciones")
    public ResponseEntity<List<Organizacion>> showAll() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(organizacionService.findAll());
    }

    // http://localhost:8080/api/organizaciones/2
    @Operation(summary = "Obtiene una organizacion por su ID", description = "Retorna una organización con todos sus datos")
    @GetMapping("/organizaciones/{id}")
    public ResponseEntity<Organizacion> showById(@PathVariable int id) {
        Organizacion org = organizacionService.findById(id);

        if (org == null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(null); // 404 Not Found
        } else {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(org);
        }
    }

    // http://localhost:8080/api/organizaciones/count
    @Operation(summary = "Cuenta la cantidad de organizaciones", description = "Retorna una la cantidad de organizaciones")
    @GetMapping("/organizaciones/count")
    public ResponseEntity<Map<String, Object>> count() {

        ResponseEntity<Map<String, Object>> response = null;

        Map<String, Object> map = new HashMap<>();
        map.put("count", organizacionService.count());

        response = ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body(map);

        return response;
    }


    @GetMapping("/{id}")
public ResponseEntity<Organizacion> getOrganizacion(@PathVariable int id) {
    Organizacion org = organizacionService.findById(id);
    if (org == null) {
        return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(org);
}

    // ***************************************************************************
    // ACTUALIZACIONES
    // ***************************************************************************

    // ****************************************************************************
    // INSERT (POST)
    // http://localhost:8080/api/organizaciones
    @Operation(summary = "Crea una organización", description = "Inserta una organización en la base de datos")
    @PostMapping("/organizaciones")
    public ResponseEntity<Map<String, Object>> create(
            @Valid @RequestBody Organizacion org) {

        ResponseEntity<Map<String, Object>> response;

        if (org == null) {
            Map<String, Object> map = new HashMap<>();
            map.put("error", "El cuerpo de la solicitud no puede estar vacío");

            response = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(map);
        } else {
            if (org.getNombreOrganizacion() == null || org.getNombreOrganizacion().trim().isEmpty() ||
                    org.getEmail() == null || org.getEmail().trim().isEmpty() ||
                    org.getPasswordHash() == null || org.getPasswordHash().trim().isEmpty() ||
                    org.getTelefono() == null || org.getTelefono().trim().isEmpty() ||
                    org.getDescripcion() == null || org.getDescripcion().trim().isEmpty()) {

                Map<String, Object> map = new HashMap<>();
                String error = "";

                if (org.getNombreOrganizacion() == null || org.getNombreOrganizacion().trim().isEmpty()) {
                    if (!error.equals(""))
                        error += " - ";
                    error += "El campo 'nombreOrganizacion' es obligatorio";
                }
                if (org.getEmail() == null || org.getEmail().trim().isEmpty()) {
                    if (!error.equals(""))
                        error += " - ";
                    error += "El campo 'email' es obligatorio";
                }
                if (org.getPasswordHash() == null || org.getPasswordHash().trim().isEmpty()) {
                    if (!error.equals(""))
                        error += " - ";
                    error += "El campo 'passwordHash' es obligatorio";
                }
                if (org.getTelefono() == null || org.getTelefono().trim().isEmpty()) {
                    if (!error.equals(""))
                        error += " - ";
                    error += "El campo 'telefono' es obligatorio";
                }
                if (org.getDescripcion() == null || org.getDescripcion().trim().isEmpty()) {
                    if (!error.equals(""))
                        error += " - ";
                    error += "El campo 'descripcion' es obligatorio";
                }

                map.put("error", error);

                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(map);
            } else {
                Organizacion objPost = organizacionService.save(org);

                Map<String, Object> map = new HashMap<>();
                map.put("mensaje", "Organización registrada con éxito");
                map.put("insertRealizado", objPost);

                response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(map);
            }
        }

        return response;
    }

    // ****************************************************************************
    // UPDATE (PUT)
    // http://localhost:8080/api/organizaciones
    @Operation(summary = "Actualiza los datos de una organización", description = "Recibe datos nuevos para actualizar una organización ya existente")
    @PutMapping("/organizaciones")
    public ResponseEntity<Map<String, Object>> update(
            @Valid @RequestBody Organizacion org) {

        ResponseEntity<Map<String, Object>> response;

        if (org == null) {
            Map<String, Object> map = new HashMap<>();
            map.put("error", "El cuerpo de la solicitud no puede estar vacío");

            response = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map);
        } else {
            int id = org.getIdOrganizacion(); 
            Organizacion existingObj = organizacionService.findById(id);

            if (existingObj == null) {
                Map<String, Object> map = new HashMap<>();
                map.put("error", "Organización no encontrada");
                map.put("id", id);

                response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(map);
            } else {

                
                if (org.getNombreOrganizacion() != null)
                    existingObj.setNombreOrganizacion(org.getNombreOrganizacion());
                if (org.getDescripcion() != null)
                    existingObj.setDescripcion(org.getDescripcion());
                if (org.getSitioWeb() != null)
                    existingObj.setSitioWeb(org.getSitioWeb());
                if (org.getLogo() != null)
                    existingObj.setLogo(org.getLogo());
                if (org.getLocalidad() != null)
                    existingObj.setLocalidad(org.getLocalidad());
                if (org.getPasswordHash() != null)
                    existingObj.setPasswordHash(org.getPasswordHash());
                if (org.getTelefono() != null)
                    existingObj.setTelefono(org.getTelefono());
                if (org.getEmail() != null)
                    existingObj.setEmail(org.getEmail());

                if (org.getEstadoAprobacion() != null) {
                    existingObj.setEstadoAprobacion(org.getEstadoAprobacion());
                    if (org.getEstadoAprobacion() == com.bluecrew.api.model.EstadoAprobacionOrganizacion.APROBADO
                            && existingObj.getFechaAprobacion() == null) {
                        existingObj.setFechaAprobacion(java.time.LocalDateTime.now());
                    }
                }
                if (org.getAprobadoPor() != null)
                    existingObj.setAprobadoPor(org.getAprobadoPor());

                Organizacion objPut = organizacionService.save(existingObj);

                Map<String, Object> map = new HashMap<>();
                map.put("mensaje", "Organización actualizada con éxito");
                map.put("updateRealizado", objPut);

                response = ResponseEntity.status(HttpStatus.OK).body(map);
            }
        }

        return response;
    }

    // ****************************************************************************
    // DELETE
    // http://localhost:8080/api/organizaciones/3
    @Operation(summary = "Obtener todas las organizaciones", description = "Retorna una lista con todas las organizaciones")
    @DeleteMapping("/organizaciones/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable int id) {

        ResponseEntity<Map<String, Object>> response;

        Organizacion existingObj = organizacionService.findById(id);
        if (existingObj == null) {
            Map<String, Object> map = new HashMap<>();
            map.put("error", "Organización no encontrada");
            map.put("id", id);

            response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(map);
        } else {

            organizacionService.deleteById(id);

            Map<String, Object> map = new HashMap<>();
            map.put("mensaje", "Organización eliminada con éxito");
            map.put("deletedRealizado", existingObj);

            response = ResponseEntity.status(HttpStatus.OK).body(map);
        }
        return response;
    }




    @Operation(summary = "Registro específico para ONG", description = "Registra una ONG encriptando su contraseña")
    @PostMapping("/organizaciones/register")
    public ResponseEntity<Map<String, Object>> registerOng(@Valid @RequestBody Organizacion org) {
        Map<String, Object> response = new HashMap<>();

        try {
           
            String hashPassword = passwordEncoder.encode(org.getPasswordHash());
            org.setPasswordHash(hashPassword);

           
            Organizacion nuevaOrg = organizacionService.save(org);

            response.put("mensaje", "Organización registrada con éxito");
            response.put("ong", nuevaOrg.getEmail());
            return ResponseEntity.status(HttpStatus.CREATED).body(response);

        } catch (Exception e) {
            response.put("error", "Error interno al guardar en BD: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }


    @Operation(summary = "Login para ONG", description = "Inicia sesión buscando en la tabla de organizaciones")
    @PostMapping("/organizaciones/login")
    public ResponseEntity<Map<String, Object>> loginOng(
            @RequestBody Map<String, String> credentials,
            HttpServletRequest request) {

        try {
            String email = credentials.get("email");
            String password = credentials.get("password");

           
            Optional<Organizacion> org = organizacionService.findByEmail(email);

            
            if (org.isPresent() && passwordEncoder.matches(password, org.get().getPasswordHash())) {

                
                Organizacion organizacionReal = org.get();

                
                List<GrantedAuthority> authorities = new ArrayList<>();
                authorities.add(new SimpleGrantedAuthority("ROLE_ONG"));

                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(email, null, authorities);

               
                SecurityContext context = SecurityContextHolder.createEmptyContext();
                context.setAuthentication(auth);
                SecurityContextHolder.setContext(context);

                request.getSession(true).setAttribute(
                        HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY,
                        context);

                
                Map<String, Object> map = new HashMap<>();
                map.put("message", "Login de ONG realizado con éxito");
                map.put("user", organizacionReal.getNombreOrganizacion()); 
                map.put("roles", authorities.toString());
                map.put("id", organizacionReal.getIdOrganizacion());       
                map.put("ong", organizacionReal);                          

                return ResponseEntity.status(HttpStatus.OK).body(map);
            } else {
                Map<String, Object> errorMap = new HashMap<>();
                errorMap.put("message", "Credenciales incorrectas (ONG)");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorMap);
            }

        } catch (Exception e) {
            Map<String, Object> errorMap = new HashMap<>();
            errorMap.put("message", "Error interno durante el login: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMap);
        }
    }
}
