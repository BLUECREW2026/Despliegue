package com.bluecrew.api.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import java.time.LocalDateTime;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonUnwrapped;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// LOMBOK
@AllArgsConstructor
@NoArgsConstructor
@Data

// SWAGGER
@Schema(description = "Modelo de Calificaciones", name = "Calificaciones")

// JPA
@Entity
@Table(name = "calificaciones")
public class Calificacion implements Serializable {

        private static final long serialVersionUID = 1L;

        @EmbeddedId
        @JsonUnwrapped
        private CalificacionId id;

        @Schema(description = "Calificación", example = "5")
        @Column(name = "calificacion", nullable = false)
        @Min(value = 1, message = "La calificación mínima es 1")
        @Max(value = 5, message = "La calificación máxima es 5")
        private Integer calificacion;

        @Schema(description = "Comentario de la calificación", example = "Muy bueno")
        @Size(min = 1, max = 500, message = "El comentario no puede tener más de 500 caracteres")
        @Column(name = "comentario", nullable = true)
        private String comentario;

        @Schema(description = "Fecha de la calificación", example = "2023-01-01")
        @Column(name = "fecha_calificacion", insertable = false, updatable = false)
        @JsonFormat(pattern = "yyyy-MM-dd")
        private LocalDateTime fechaCalificacion;

        @MapsId("usuarioId")
        @ManyToOne
        @JoinColumn(name = "id_usuario")
        @JsonIgnoreProperties({
                        "rol", "password_hash", "biografia", "foto",
                        "crearEvento", "activo", "eventosCompletados",
                        "hibernateLazyInitializer", "handler"
        })
        private Usuario usuario;

        @MapsId("eventoId")
        @ManyToOne
        @JoinColumn(name = "id_evento")
        @JsonIgnoreProperties({
                        "descripcion", "imagen", "fechaInicio",
                        "fechaFin", "fechaPublicacion", "ubicacion", "estadoEvento",
                        "participantes", "finalizado", "materialNecesario",
                        "hibernateLazyInitializer", "handler"
        })
        private Evento evento;
}
