package com.bluecrew.api.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "categorias")
@Data
@NoArgsConstructor
@Schema(description = "Modelo de Categorías", name = "Categorías")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Categoria {

    @Schema(description = "ID único de la categoría", example = "1")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_categoria")
    private Integer idCategoria;

    @Schema(description = "Usuario creador de la categoría")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_creador", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Usuario creador;

    @Schema(description = "Nombre de la categoría", example = "Limpieza de Playas")
    @Column(name = "nombre_categoria", nullable = false, length = 100)
    private String nombreCategoria;

    @Schema(description = "Descripción detallada de la categoría", example = "Recogida de residuos en la costa")
    @Column(name = "descripcion", nullable = false, length = 500)
    private String descripcion;

    @Schema(description = "Estado de aprobación de la categoría", example = "true")
    @Column(name = "aprobado")
    private Boolean aprobado = false;

    @Schema(description = "Fecha en la que se creó la categoría")
    @Column(name = "fecha_creacion", nullable = false, updatable = false)
    @CreationTimestamp
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime fechaCreacion;

    @Schema(description = "Fecha en la que un administrador aprobó la categoría")
    @Column(name = "fecha_aprobacion")
    private LocalDateTime fechaAprobacion;

    @Schema(description = "Lista de eventos asociados a esta categoría")
    @OneToMany(mappedBy = "categoria")
    @JsonIgnore
    private List<Evento> eventos;
}