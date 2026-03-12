package com.bluecrew.api.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bluecrew.api.model.Evento;
import com.bluecrew.api.service.EventoService;

@Tag(name = "Eventos", description = "API para gestión de eventos")
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class EventoController {

    @Autowired
    private EventoService eventoService;

    // ***************************************************************************
    // CONSULTAS
    // ***************************************************************************

    // http://localhost:8080/bluecrew/api/eventos
    // ***************************************************************************
    @Operation(summary = "Obtener todos los eventos", description = "Retorna una lista con todos los eventos disponibles")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Eventos obtenidos con éxito")
    })
    @GetMapping("/eventos")
    public ResponseEntity<List<Evento>> showEventos() {
        return ResponseEntity.ok(eventoService.findAll());
    }

    // http://localhost:8080/bluecrew/api/eventos/2
    @Operation(summary = "Obtener un evento", description = "Retorna una evento con todos sus datos")
    @GetMapping("/eventos/{id}")
    public ResponseEntity<Evento> showById(@PathVariable int id) {
        Evento evento = eventoService.findById(id);
        if (evento == null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(null);
        } else {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(evento);
        }
    }

    // http://localhost:8080/bluecrew/api/eventos/count
    @Operation(summary = "Cuenta la cantidad de eventos que hay", description = "Retorna la cantidad de eventos que hay")
    @GetMapping("/eventos/count")
    public ResponseEntity<Map<String, Object>> count() {
        ResponseEntity<Map<String, Object>> response = null;
        Map<String, Object> map = new HashMap<>();
        map.put("count", eventoService.count());
        response = ResponseEntity
                .status(HttpStatus.OK)
                .body(map);
        return response;
    }

    @Operation(summary = "Obtiene eventos sin finalizar", description = "Retorna una lista deloseventos que no han terminado para mostrarlos en la página web")
    @GetMapping("/eventos/activos")
    public ResponseEntity<List<Object[]>> eventoSinFinalizar() {
        return ResponseEntity.status(HttpStatus.OK).body(eventoService.findEventoSinFinalizar());
    }

    @Operation(summary = "Obtiene eventos pendientes de calificar", description = "Retorna una lista de eventos pendientes de calificar")
    @GetMapping("/eventos/pendientes/{id}")
    public ResponseEntity<List<Evento>> findPendientesCalificarByUsuario(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(eventoService.findPendientesCalificarByUsuario(id));
    }

    @Operation(summary = "Obtiene eventos sin finalizar y no inscritos", description = "Retorna una lista de eventos sin finalizar y no inscritos")
    @GetMapping("/eventos/activos/{id}")
    public ResponseEntity<List<Object[]>> findEventoSinFinalizarYNoInscrito(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(eventoService.findEventoSinFinalizarYNoInscrito(id));
    }

    @Operation(summary = "Obtiene los eventos a los que se ha inscrito un usuario", description = "Retorna una lista de eventos a los que se ha inscrito un usuario")
    @GetMapping("/mis-eventos/inscritos/{id}")
    public ResponseEntity<List<Object[]>> findEventosByInscripcionUsuario(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(eventoService.findEventosByInscripcionUsuario(id));
    }

    @Operation(summary = "Obtiene los eventos que ha publicado un usuario", description = "Retorna una lista de eventos que ha publicado un usuario")
    @GetMapping("/mis-eventos/publicados/{id}")
    public ResponseEntity<List<Object[]>> findEventosByInscripcionOrganizacion(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(eventoService.findEventosPublicadosByUsuario(id));
    }

    @Operation(summary = "Obtiene los eventos pendientes de aprobación de un usuario", description = "Retorna una lista de eventos pendientes de aprobación de un usuario")
    @GetMapping("/mis-eventos/pendientes/{id}")
    public ResponseEntity<List<Object[]>> findEventosPendientesAprobacionByUsuario(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(eventoService.findEventosPendientesAprobacionByUsuario(id));
    }


    // ***************************************************************************
    // ACTUALIZACIONES
    // ***************************************************************************

    // ****************************************************************************
    // INSERT (POST)
    // http://localhost:8080/bluecrew/api/eventos
    @Operation(summary = "Crea un evento", description = "Inserta un evento en la base de datos")
    @PostMapping("/eventos")
    public ResponseEntity<Map<String, Object>> create(
            @Valid @RequestBody Evento evento) {
        ResponseEntity<Map<String, Object>> response;
        if (evento == null) {
            Map<String, Object> map = new HashMap<>();
            map.put("error", "El cuerpo de la solicitud no puede estar vacío");

            response = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(map);
        } else {
            if (evento.getTitulo() == null || evento.getTitulo().isEmpty()) {
                Map<String, Object> map = new HashMap<>();
                map.put("error", "El título del evento es obligatorio");

                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map);

            } else if (evento.getUsuario() == null && evento.getOrganizacion() == null) {
                Map<String, Object> map = new HashMap<>();
                map.put("error", "El evento debe estar asociado a un usuario o a una organización");

                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map);

            } else {
                System.out.println(evento);
                Evento objPost = eventoService.save(evento);
                Map<String, Object> map = new HashMap<>();
                map.put("mensaje", "Evento creado con éxito");
                map.put("insertRealizado", objPost);
                response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(map);
            }
        }
        return response;
    }

    // ***************************************************************************
    // ACTUALIZAR (PUT)
    // ***************************************************************************
    @Operation(summary = "Actualizar un evento", description = "Actualiza los datos de un evento existente usando su ID")
    @PutMapping("/eventos/{id}")
    public ResponseEntity<Map<String, Object>> update(@PathVariable int id, @RequestBody Evento eventoActualizado) {

        if (eventoActualizado == null) {
            Map<String, Object> map = new HashMap<>();
            map.put("error", "El cuerpo de la solicitud no puede estar vacío");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map);
        }

        Evento existingEvento = eventoService.findById(id);

        if (existingEvento == null) {
            Map<String, Object> map = new HashMap<>();
            map.put("error", "Evento no encontrado");
            map.put("id", id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(map);
        }

        // Actualizamos solo los campos que vengan en el JSON (que no sean nulos)
        if (eventoActualizado.getTitulo() != null)
            existingEvento.setTitulo(eventoActualizado.getTitulo());
        if (eventoActualizado.getDescripcion() != null)
            existingEvento.setDescripcion(eventoActualizado.getDescripcion());
        if (eventoActualizado.getImagen() != null)
            existingEvento.setImagen(eventoActualizado.getImagen());
        if (eventoActualizado.getFechaInicio() != null)
            existingEvento.setFechaInicio(eventoActualizado.getFechaInicio());
        if (eventoActualizado.getFechaFin() != null)
            existingEvento.setFechaFin(eventoActualizado.getFechaFin());
        if (eventoActualizado.getUbicacion() != null)
            existingEvento.setUbicacion(eventoActualizado.getUbicacion());
        if (eventoActualizado.getEstadoEvento() != null)
            existingEvento.setEstadoEvento(eventoActualizado.getEstadoEvento());
        if (eventoActualizado.getParticipantes() != null)
            existingEvento.setParticipantes(eventoActualizado.getParticipantes());
        if (eventoActualizado.getFinalizado() != null)
            existingEvento.setFinalizado(eventoActualizado.getFinalizado());
        if (eventoActualizado.getMaterialNecesario() != null)
            existingEvento.setMaterialNecesario(eventoActualizado.getMaterialNecesario());
        if (eventoActualizado.getUsuario() != null)
            existingEvento.setUsuario(eventoActualizado.getUsuario());
        if (eventoActualizado.getOrganizacion() != null)
            existingEvento.setOrganizacion(eventoActualizado.getOrganizacion());

        Evento objPut = eventoService.save(existingEvento);

        Map<String, Object> map = new HashMap<>();
        map.put("mensaje", "Evento actualizado con éxito");
        map.put("eventoActualizado", objPut);

        return ResponseEntity.status(HttpStatus.OK).body(map);
    }

    // ***************************************************************************
    // ELIMINAR (DELETE)
    // ***************************************************************************
    @Operation(summary = "Eliminar un evento", description = "Borra un evento de la base de datos a partir de su ID")
    @DeleteMapping("/eventos/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable int id) {
        Evento existingObj = eventoService.findById(id);

        if (existingObj == null) {
            Map<String, Object> map = new HashMap<>();
            map.put("error", "Evento no encontrado");
            map.put("id", id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(map);
        } else {
            eventoService.deleteById(id);
            Map<String, Object> map = new HashMap<>();
            map.put("mensaje", "Evento eliminado con éxito");
            map.put("deletedRealizado", existingObj);
            return ResponseEntity.status(HttpStatus.OK).body(map);
        }
    }

}
