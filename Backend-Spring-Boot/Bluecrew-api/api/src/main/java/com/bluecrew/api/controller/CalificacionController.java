package com.bluecrew.api.controller;

import com.bluecrew.api.model.Calificacion;
import com.bluecrew.api.model.CalificacionId;
import com.bluecrew.api.model.Evento;
import com.bluecrew.api.model.Usuario;
import com.bluecrew.api.service.CalificacionService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
@Tag(name = "Calificaciones", description = "Operaciones relacionadas con calificaciones de usuarios a eventos")
public class CalificacionController {
    @Autowired
    private CalificacionService calificacionService;

    // ***************************************************************************
    // CONSULTAS
    // ***************************************************************************
    // http://localhost:8080/api/calificaciones
    @Operation(summary = "Obtener todas las calificaciones", description = "Retorna una lista completa de todas las calificaciones registradas")
    @GetMapping("/calificaciones")
    public ResponseEntity<List<Calificacion>> showAll() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(calificacionService.findAll());
    }

    // http://localhost:8080/api/calificaciones/usuario/2/evento/1
    @Operation(summary = "Obtener una calificacion", description = "Retorna una calificacion de un usuario a un evento")
    @GetMapping("/calificaciones/usuario/{uId}/evento/{eId}")
    public ResponseEntity<Calificacion> showById(@PathVariable Integer uId, @PathVariable Integer eId) {
        CalificacionId id = new CalificacionId(uId, eId);
        Calificacion cal = calificacionService.findById(id);
        if (cal == null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(null);
        } else {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(cal);
        }
    }

    // http://localhost:8080/bluecrew/api/calificaciones/count
    @Operation(summary = "Obtener el total de calificaciones", description = "Retorna el total de calificaciones registradas")
    @GetMapping("/calificaciones/count")
    public ResponseEntity<Map<String, Object>> count() {
        ResponseEntity<Map<String, Object>> response = null;
        Map<String, Object> map = new HashMap<>();
        map.put("count", calificacionService.count());
        response = ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body(map);
        return response;
    }

    // http://localhost:8080/api/eventos/1/calificaciones
    @Operation(summary = "Obtener todas las calificaciones de un evento", description = "Retorna una lista completa de todas las calificaciones de un evento")
    @GetMapping("/eventos/{eId}/calificaciones")
    public ResponseEntity<List<Calificacion>> showByEvento(@PathVariable Long eId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(calificacionService.findByEventoId(eId));
    }

    // ***************************************************************************
    // ACTUALIZACIONES
    // ***************************************************************************

    // ****************************************************************************
    // INSERT (POST)
    // http://localhost:8080/api/calificaciones
    @Operation(summary = "Crear una calificacion", description = "Crea una nueva calificacion")
    @PostMapping("/calificaciones")
    public ResponseEntity<Map<String, Object>> create(@RequestBody Calificacion cal) {
        ResponseEntity<Map<String, Object>> response;

        if (cal == null || cal.getId() == null) {
            Map<String, Object> map = new HashMap<>();
            map.put("error", "El cuerpo de la solicitud no puede estar vacío");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map);
        }

        if (cal.getCalificacion() == null || cal.getCalificacion() < 1 ||
                cal.getComentario() == null || cal.getComentario().trim().isEmpty()) {

            Map<String, Object> map = new HashMap<>();
            String error = "";
            if (cal.getCalificacion() == null || cal.getCalificacion() < 1) {
                error += "El campo 'calificacion' es obligatorio";
            }
            if (cal.getComentario() == null || cal.getComentario().trim().isEmpty()) {
                if (!error.equals(""))
                    error += " - ";
                error += "El campo 'comentario' es obligatorio";
            }
            map.put("error", error);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map);
        }

        try {
            Usuario u = new Usuario();
            u.setId(cal.getId().getUsuarioId());
            cal.setUsuario(u);

            Evento e = new Evento();
            e.setIdEvento(cal.getId().getEventoId());
            cal.setEvento(e);

            System.out.println(cal);
            Calificacion objPost = calificacionService.save(cal);

            Map<String, Object> map = new HashMap<>();
            map.put("mensaje", "Calificacion creado con éxito");
            map.put("insertRealizado", objPost);

            response = ResponseEntity.status(HttpStatus.CREATED).body(map);
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("error", "Error al guardar la calificación: " + e.getMessage());
            response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(map);
        }

        return response;
    }

    // ****************************************************************************
    // DELETE
    // http://localhost:8080/api/calificaciones/usuario/2/evento/1
    @Operation(summary = "Eliminar una calificacion", description = "Elimina una calificacion")
    @DeleteMapping("/calificaciones/usuario/{uId}/evento/{eId}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Integer uId, @PathVariable Integer eId) {
        ResponseEntity<Map<String, Object>> response;
        CalificacionId id = new CalificacionId(uId, eId);

        try {
            Calificacion existingObj = calificacionService.findById(id);
            calificacionService.deleteById(id);

            Map<String, Object> map = new HashMap<>();
            map.put("mensaje", "Calificacion eliminada con éxito");
            map.put("deletedRealizado", existingObj);
            response = ResponseEntity.status(HttpStatus.OK).body(map);

        } catch (RuntimeException e) {
            Map<String, Object> map = new HashMap<>();
            map.put("error", "Calificacion no encontrada");
            map.put("id", id);
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(map);
        }
        return response;
    }

}