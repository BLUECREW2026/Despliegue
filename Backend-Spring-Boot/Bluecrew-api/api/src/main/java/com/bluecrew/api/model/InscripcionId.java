package com.bluecrew.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InscripcionId implements Serializable {
    private Integer evento;
    private Integer usuario;
}
