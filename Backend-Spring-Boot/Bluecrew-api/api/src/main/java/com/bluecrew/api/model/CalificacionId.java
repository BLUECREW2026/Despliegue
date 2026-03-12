package com.bluecrew.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;

import jakarta.persistence.Embeddable;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CalificacionId implements Serializable {
    private Integer usuarioId; 
    private Integer eventoId;
}
