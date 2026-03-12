package com.bluecrew.api.model;

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
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

// LOMBOK
@AllArgsConstructor // => Constructor con todos los argumentos
@NoArgsConstructor // => Constructor sin argumentos
@Data // => @Getter + @Setter + @ToString + @EqualsAndHashCode +
      // @RequiredArgsConstructor

// SWAGGER
@Schema(description = "Modelo de Eventos", name = "Eventos")

// JPA
@ToString(exclude = { "usuario", "categoria", "organizacion"}) // Excluir del toString para evitar recursividad
@EqualsAndHashCode(exclude = { "usuario", "categoria", "organizacion" }) // Excluir de equals y hashCode para evitar recursividad
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Entity
@Table(name = "eventos")
public class Evento implements Serializable {

    private static final long serialVersionUID = 1L;

    @Schema(description = "ID único del evento", example = "1")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_evento", nullable = false, unique = true)
    private Integer idEvento;

    @Schema(description = "Títutlo del evento", example = "Títutlo de la noticia")
    @NotBlank(message = "El títutlo es obligatorio")
    @Size(min = 1, max = 100, message = "El títutlo no puede tener más de 100 caracteres")
    @Column(name = "titulo", nullable = false, unique = false)
    private String titulo;

    @Schema(description = "Descripción de la noticia", example = "Descripción de la noticia")
    @Size(min = 1, max = 500, message = "La descripción no puede tener más de 500 caracteres")
    @Column(name = "descripcion", nullable = true, unique = false)
    private String descripcion;

    @Schema(description = "Imagen de la noticia", example = "https://img.com/noticias.jpg")
    @Size(min = 1, max = 100, message = "La imagen no puede tener más de 100 caracteres")
    @Column(name = "imagen", nullable = true, unique = false)
    private String imagen;

    @Schema(description = "Fecha de inicio del evento", example = "2023-01-01")
    @Column(name = "fecha_inicio")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime fechaInicio;

    @Schema(description = "Fecha de fin del evento", example = "2023-01-01")
    @Column(name = "fecha_fin")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime fechaFin;

    @Schema(description = "Fecha de publicación del evento", example = "2023-01-01")
    @Column(name = "fecha_publicacion")
    @CreationTimestamp
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime fechaPublicacion;

    @Schema(description = "Lugar del evento", example = "Parque Central")
    @NotBlank(message = "La ubicación es obligatoria")
    @Size(min = 1, max = 100, message = "La ubicación no puede tener más de 100 caracteres")
    @Column(name = "ubicacion", nullable = false, unique = false)
    private String ubicacion;

    @Schema(description = "Estado de aprobación del evento", example = "PENDIENTE")
    @Enumerated(EnumType.STRING)
    @Column(name = "estado", nullable = false)
    private EstadoEvento estadoEvento = EstadoEvento.PENDIENTE;

    @Schema(description = "Participantes del evento", example = "5")
    @Column(name = "participantes")
    @Min(value = 5, message = "El evento debe tener al menos 5 participantes")
    private Integer participantes;

    @Column(name = "finalizado")
    private Boolean finalizado = false;

    @Schema(description = "Material necesario del evento", example = "Escobas, bolsas, etc.")
    @Size(min = 1, max = 500, message = "El material necesario no puede tener más de 500 caracteres")
    @Column(name = "material_necesario", nullable = true, unique = false)
    private String materialNecesario;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_user", nullable = true) // MODIFICADO: Ahora nullable es true porque puede ser creado por una ONG
    private Usuario usuario;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_organizacion", nullable = true)
    private Organizacion organizacion;

    // RELACIÓN CON CATEGORIA
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_categoria", nullable = false)
    private Categoria categoria;

}
