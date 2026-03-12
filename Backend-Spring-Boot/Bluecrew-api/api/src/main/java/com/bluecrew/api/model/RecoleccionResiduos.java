package com.bluecrew.api.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Schema(description = "Modelo de Residuos", name = "Residuos")
@Table(name = "RECOLECCION_RESIDUOS")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class RecoleccionResiduos implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", nullable = false, unique = true)
    @Schema(description = "Identificador único de la recolección", example = "1")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "ID_EVENTO", nullable = false)
    @Schema(description = "Evento asociado a la recolección")
    private Evento evento;

    @Column(name = "CANTIDAD_RECOLECTADA", nullable = false)
    @Schema(description = "Peso total recolectado (kg/m3) en el evento", example = "150.5")
    @Min(value = 0, message = "La cantidad recolectada no puede ser negativa")
    private Double cantidad_recolectada;
}
