package com.bluecrew.api.controller;

import com.bluecrew.api.model.Noticia;
import com.bluecrew.api.service.NoticiaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
@Tag(name = "Noticias", description = "Operaciones relacionadas con las noticias")
public class NoticiaController {
    @Autowired
    private NoticiaService noticiaService;
    // ***************************************************************************
    // CONSULTAS
    // ***************************************************************************
    // http://localhost:8080/api/noticias
    @Operation(summary = "Obtener todas las noticias", description = "Retorna una lista completa de todas las noticias registradas")
    @GetMapping("/noticias")
    public ResponseEntity<List<Noticia>> showAll() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(noticiaService.findAll());
    }
    // http://localhost:8080/bluecrew/api/noticias/2
   @Operation(summary = "Obtener una noticia", description = "Retorna una noticia por su id")
    @GetMapping("/noticias/{id}")
    public ResponseEntity<Noticia> showById(@PathVariable int id) {
        Noticia not = noticiaService.findById(id);
        if (not == null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(null); 
        } else {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(not);
        }
    }
    // http://localhost:8080/bluecrew/api/noticias/count
    @Operation(summary = "Obtener el total de noticias", description = "Retorna el total de noticias registradas")
    @GetMapping("/noticias/count")
    public ResponseEntity<Map<String, Object>> count() {
        ResponseEntity<Map<String, Object>> response = null;
        Map<String, Object> map = new HashMap<>();
        map.put("count", noticiaService.count());
        response = ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body(map);
        return response;
    }
        
    
    // ***************************************************************************
    // ACTUALIZACIONES
    // ***************************************************************************
    
    // ****************************************************************************
    // INSERT (POST)    
    // http://localhost:8080/bluecrew/api/noticias
    @Operation(summary = "Crear una noticia", description = "Crea una nueva noticia")
    @PostMapping("/noticias")
    public ResponseEntity<Map<String, Object>> create(
            @Valid @RequestBody Noticia not) {
        ResponseEntity<Map<String, Object>> response;
        
        if (not == null) {
            Map<String, Object> map = new HashMap<>();
            map.put("error", "El cuerpo de la solicitud no puede estar vacío");
            
            response = ResponseEntity
                            .status(HttpStatus.BAD_REQUEST)
                            .body(map);                
        } else {
            if (not.getTitulo() == null || not.getTitulo().trim().isEmpty() ||
                not.getImagen() == null || not.getImagen().trim().isEmpty() ||
                not.getDescripcion() == null || not.getDescripcion().trim().isEmpty() ||
                not.getEstadoAprobacionNoticia() == null ||
                not.getEstadoVisibilidad() == null
                ) {
                Map<String, Object> map = new HashMap<>();
                String error="";
                if (not.getTitulo() == null || not.getTitulo().trim().isEmpty()) {
                    if (!error.equals("")) error += " - ";
                    error += "El campo 'titulo' es obligatorio";
                } 
                if (not.getImagen() == null || not.getImagen().trim().isEmpty()) {
                    if (!error.equals("")) error += " - ";
                    error += "El campo 'imagen' es obligatorio";
                } 
                if (not.getDescripcion() == null || not.getDescripcion().trim().isEmpty()) {
                    if (!error.equals("")) error += " - ";
                    error += "El campo 'descripcion' es obligatorio";
                } 
                if (not.getEstadoAprobacionNoticia() == null) {
                    if (!error.equals("")) error += " - ";
                    error += "El campo 'estado_aprobacion_noticia' es obligatorio";
                } 
                if (not.getEstadoVisibilidad() == null) {
                    if (!error.equals("")) error += " - ";
                    error += "El campo 'estado_visibilidad' es obligatorio";
                }
                map.put("error", error);
                                
                response = ResponseEntity
                            .status(HttpStatus.BAD_REQUEST)
                            .body(map);                
            } else {
                System.out.println(not);
                Noticia objPost = noticiaService.save(not);
                Map<String, Object> map = new HashMap<>();
                map.put("mensaje", "Noticia creado con éxito");
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
    // http://localhost:8080/api/noticias
    @Operation(summary = "Actualizar una noticia", description = "Actualiza una noticia")
    @PutMapping("/noticias")
    public ResponseEntity<Map<String, Object>> update(
            @Valid @RequestBody Noticia not) {
        
        ResponseEntity<Map<String, Object>> response;
        
        if (not == null) {
                Map<String, Object> map = new HashMap<>();
                map.put("error", "El cuerpo de la solicitud no puede estar vacío");
                
                response=ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map);
        } else {
            int id = not.getIdNoticia();
            Noticia existingObj = noticiaService.findById(id);
            if (existingObj == null) {
                Map<String, Object> map = new HashMap<>();
                map.put("error", "Noticia no encontrada");
                map.put("id", id);
                response=ResponseEntity.status(HttpStatus.NOT_FOUND).body(map);
            } else {
                if (not.getTitulo() != null) {
                    existingObj.setTitulo(not.getTitulo());
                }
                if (not.getImagen() != null) {
                    existingObj.setImagen(not.getImagen());
                }
                if (not.getDescripcion() != null) {
                    existingObj.setDescripcion(not.getDescripcion());
                }
                if (not.getEstadoAprobacionNoticia() != null) {
                    existingObj.setEstadoAprobacionNoticia(not.getEstadoAprobacionNoticia());
                }
                if (not.getEstadoVisibilidad() != null) {
                    existingObj.setEstadoVisibilidad(not.getEstadoVisibilidad());
                }
                
                Noticia objPut = noticiaService.save(existingObj);                
                
                Map<String, Object> map = new HashMap<>();
                map.put("mensaje", "Noticia actualizada con éxito");
                map.put("updateRealizado", objPut);
                
                response=ResponseEntity.status(HttpStatus.OK).body(map);
            }
        }
        
        return response;
    }
    
    // ****************************************************************************
    // DELETE
    // http://localhost:8080/api/noticias/16
    @Operation(summary = "Eliminar una noticia", description = "Elimina una noticia")
    @DeleteMapping("/noticias/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable int id) {
        
        ResponseEntity<Map<String, Object>> response;
        
        Noticia existingObj = noticiaService.findById(id);
        if (existingObj == null) {
            Map<String, Object> map = new HashMap<>();
            map.put("error", "Noticia no encontrada");
            map.put("id", id);
            response=ResponseEntity.status(HttpStatus.NOT_FOUND).body(map);
        } else {
            
            noticiaService.deleteById(id);
            
            Map<String, Object> map = new HashMap<>();
            map.put("mensaje", "Noticia eliminada con éxito");
            map.put("deletedRealizado", existingObj);
            
            response=ResponseEntity.status(HttpStatus.OK).body(map);
        }
        return response;
    }
    
    
}