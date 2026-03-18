package com.bluecrew.api.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "organizaciones")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Modelo de Organizaciones", name = "Organizaciones")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Organizacion {

    @Schema(description = "ID único de la organización", example = "1")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_organizacion")
    private Integer idOrganizacion;

    // Relación Muchos a Uno con Usuario (El admin que aprueba la organización)
    // Puede ser null hasta que un admin la apruebe
    @Schema(description = "Administrador que aprobó a la organización")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_aprobado_por")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Usuario aprobadoPor;

    @Schema(description = "Nombre oficial de la organización", example = "EcoMundo")
    @Column(name = "nombre_organizacion", nullable = false, length = 100)
    private String nombreOrganizacion;

    @Schema(description = "Descripción de la organización", example = "ONG dedicada a la protección del medio ambiente")
    @Column(name = "descripcion", nullable = false, length = 500)
    private String descripcion;

    @Schema(description = "Sitio web oficial", example = "www.ecomundo.org")
    @Column(name = "sitio_web", length = 100)
    private String sitioWeb;

    @Schema(description = "Nombre del archivo o ruta del logo", example = "logo.png")
    @Column(name = "logo", length = 100, nullable = true)
    private String logo;

    @Schema(description = "Localidad de la organización", example = "Barcelona")
    @Column(name = "localidad", length = 100, nullable = true)
    private String localidad;

    @Schema(description = "Contraseña encriptada de la organización")
    @Column(name = "password_hash", nullable = false, length = 255)
    private String passwordHash;

    @Schema(description = "Teléfono de contacto de la organización", example = "923123456")
    @Column(name = "telefono", nullable = false, length = 100)
    private String telefono;

    @Schema(description = "Correo electrónico de contacto de la organización", example = "contacto@ecomundo.org")
    @Column(name = "email", nullable = false, unique = true, length = 100)
    private String email;

    @Schema(description = "Estado actual de aprobación en el sistema", example = "APROBADO")
    @Enumerated(EnumType.STRING)
    @Column(name = "estado_aprobacion")
    private EstadoAprobacionOrganizacion estadoAprobacion = EstadoAprobacionOrganizacion.PENDIENTE;

    @Schema(description = "Fecha en la que se aprobó la organización")
    @Column(name = "fecha_aprobacion")
    private LocalDateTime fechaAprobacion;
}
