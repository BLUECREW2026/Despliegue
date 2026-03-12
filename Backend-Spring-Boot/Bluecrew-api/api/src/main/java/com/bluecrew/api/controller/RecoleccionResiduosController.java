package com.bluecrew.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.bluecrew.api.model.RecoleccionResiduos;
import com.bluecrew.api.service.RecoleccionResiduosService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
@Tag(name = "Recolección de Residuos", description = "Gestión de las cantidades de residuos recolectadas en los eventos")
public class RecoleccionResiduosController {
    @Autowired
    private RecoleccionResiduosService recoleccionResiudosService;

    @Operation(summary = "Listar todas las recolecciones", description = "Retorna un historial de todas las recolecciones registradas")
    @GetMapping("/recoleccion_residuos")
    public ResponseEntity<List<RecoleccionResiduos>> showAll() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(recoleccionResiudosService.findAll());
    }

    @Operation(summary = "Obtener cantidad en un evento", description = "Busca la cantidad recolectada en un evento específico mediante su ID")
    @GetMapping("/recoleccion_residuos/{id}")
    public ResponseEntity<Double> findbyIdEvento(@PathVariable int id) {
        Double recoleccion = recoleccionResiudosService.findByIdEvento(id);
        if (recoleccion == null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(null);
        }
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(recoleccion);
    }

    @Operation(summary = "Total recolectado", description = "Suma global de todos los residuos recolectados en todos los eventos")
    @GetMapping("/recoleccion_residuos/total")
    public ResponseEntity<Long> showSum() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(recoleccionResiudosService.findSum());
    }

    @Operation(summary = "Registrar recolección", description = "Crea un nuevo registro de residuos para un evento")
    @PostMapping("/recoleccion_residuos")
    public ResponseEntity<Map<String, Object>> create(
            @Valid @RequestBody RecoleccionResiduos rec) {
        ResponseEntity<Map<String, Object>> response;

        if (rec == null) {
            Map<String, Object> map = new HashMap<>();
            map.put("error", "El cuerpo de la solicitud no puede estar vacío");

            response = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(map);
        } else {
            if (rec.getEvento() == null || rec.getCantidad_recolectada() >= 0
                    || rec.getCantidad_recolectada() == null) {
                Map<String, Object> map = new HashMap<>();
                String error = "";
                if (rec.getEvento() == null) {
                    if (!error.equals(""))
                        error += " - ";
                    error += "El campo 'id_evento' es obligatorio";
                }
                if (rec.getCantidad_recolectada() >= 0) {
                    if (!error.equals(""))
                        error += " - ";
                    error += "El campo 'cantidad_recolectada' tiene que ser positiva";
                }
                map.put("error", error);

                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(map);
            } else {
                System.out.println(rec);
                RecoleccionResiduos objPost = recoleccionResiudosService.save(rec);
                Map<String, Object> map = new HashMap<>();
                map.put("mensaje", "RecoleccionResiduos creado con éxito");
                map.put("insertRealizado", objPost);

                response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(map);
            }
        }

        return response;
    }
}
