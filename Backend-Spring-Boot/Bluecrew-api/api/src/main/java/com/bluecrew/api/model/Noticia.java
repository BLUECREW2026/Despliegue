package com.bluecrew.api.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Schema(description = "Modelo de Noticias", name = "Noticias")
@Entity
@Table(name = "noticias")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Noticia implements Serializable {

    private static final long serialVersionUID = 1L;

    @Schema(description = "ID único de la noticia", example = "1")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_noticia", nullable = false, unique = true)
    private Integer idNoticia;

    @Schema(description = "Títutlo de la noticia", example = "Títutlo de la noticia")
    @NotBlank(message = "El títutlo es obligatorio")
    @Size(min = 1, max = 100, message = "El títutlo no puede tener más de 100 caracteres")
    @Column(name = "titulo", nullable = false, unique = false)
    private String titulo;

    @Schema(description = "Imagen de la noticia", example = "https://img.com/noticias.jpg")
    @Size(max = 100, message = "La imagen no puede tener más de 100 caracteres")
    @Column(name = "imagen", nullable = true, unique = false)
    private String imagen;

    @Schema(description = "Descripción de la noticia", example = "Descripción de la noticia")
    @Size(max = 500, message = "La descripción no puede tener más de 500 caracteres")
    @Column(name = "descripcion", nullable = false, unique = false)
    private String descripcion;

    @Schema(description = "Estado de aprobación de la noticia", example = "PENDIENTE")
    @Enumerated(EnumType.STRING)
    @Column(name = "estado_aprobacion_noticia", nullable = false)
    private EstadoAprobacionNoticia estadoAprobacionNoticia = EstadoAprobacionNoticia.PENDIENTE;

    @Schema(description = "Fecha de publicación de la noticia")
    @Column(name = "fecha_publicacion", nullable = false, insertable = false, updatable = false)
     @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime fechaPublicacion = LocalDateTime.now();

    @Schema(description = "Estado de visibilidad de la noticia", example = "true")
    @Column(name = "estado_visibilidad")
    private Boolean estadoVisibilidad = true;

    @Schema(description = "Cita destacada de la noticia", example = "Cita destacada de la noticia")
    @Size(max = 100, message = "La cita destacada no puede tener más de 100 caracteres")
    @Column(name = "cita_destacada", nullable = true, unique = false)
    private String citaDestacada;

    @Schema(description = "Autor de la noticia")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_autor", referencedColumnName = "id", nullable = false)
    @JsonIncludeProperties({"id", "nombre", "apellido"}) 
    private Usuario autor;

    @Schema(description = "Categoría de la noticia")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_categoria", referencedColumnName = "id_categoria", nullable = false)
    @JsonIncludeProperties({"idCategoria", "nombreCategoria"}) 
    private Categoria categoria;
}
