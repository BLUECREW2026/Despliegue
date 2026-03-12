package com.bluecrew.api.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "INSCRIPCIONES")
@Schema(description = "Modelo de Inscripciones", name = "Inscripciones")
@IdClass(InscripcionId.class)
public class Inscripciones implements Serializable {

    @Id
    @ManyToOne
    @JoinColumn(name = "ID_EVENTO", nullable = false)
    @Schema(description = "Evento de la inscripción")
    @JsonIgnoreProperties({ "usuario", "categoria", "hibernateLazyInitializer", "handler" })
    private Evento evento;

    @Id
    @ManyToOne
    @JoinColumn(name = "ID_USUARIO", nullable = false)
    @Schema(description = "Usuario que se inscribío al evento")
    @JsonIgnoreProperties({ "inscripciones", "password_hash", "hibernateLazyInitializer", "handler" })
    private Usuario usuario;

    @Column(name = "FECHA_INSCRIPCION", insertable = false, updatable = false)
    @Schema(description = "Fecha en la que se realizó la inscripción")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private java.time.LocalDateTime fechaInscripcion;

    @Column(name = "ASISTIO")
    @Schema(description = "Indica si el usuario asistió al evento")
    private Boolean asistio = false;
}
