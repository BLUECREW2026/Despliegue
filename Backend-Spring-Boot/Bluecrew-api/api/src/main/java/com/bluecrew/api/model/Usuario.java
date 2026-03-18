package com.bluecrew.api.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.util.List;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor 
@NoArgsConstructor 
@Data 

@Schema(description = "Modelo de Usuario", name = "Usuario")
@Entity
@Table(name = "usuarios")
public class Usuario {
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      @Column(name = "id", nullable = false, unique = true)
      private Integer id;

      @Enumerated(EnumType.STRING)
      @Column(name = "rol", nullable = false)
      private Rol rol = Rol.USER;

      @Schema(description = "Password del usuario encriptada", example = "$2a$10$fzcGgF.8xODz7ptkmZC")
      @NotBlank(message = "El password es obligatorio")
      @Column(name = "password_hash", nullable = false, unique = false)
      private String password_hash;

      @Schema(description = "Nombre del usuario", example = "Juan")
      @NotBlank(message = "El nombre de usuario no puede estar en blanco")
      @Size(min = 1, max = 100, message = "El nombre de usuario ")
      @Column(name = "nombre", nullable = false, unique = false)
      private String nombre;

      @Schema(description = "Apellido del usuario", example = "Pérez")
      @NotBlank(message = "El apellido de usuario no puede estar en blanco")
      @Size(min = 1, max = 100, message = "El apellido de usuario debe tener entre 1 y 100 caracteres")
      @Column(name = "apellido", nullable = false, unique = false)
      private String apellido;

      @Schema(description = "Email del usuario", example = "juan@balmis.com")
      @NotBlank(message = "El email es obligatorio")
      @Size(min = 1, max = 150, message = "El email no puede tener más de 150 caracteres")
      @Column(name = "email", nullable = false, unique = true)
      private String email;

      @Schema(description = "Biografía del usuario", example = "Amante del medio ambiente y voluntario en eventos de limpieza")
      @Size(max = 500, message = "La biografía no puede tener más de 500 caracteres")
      @Column(name = "biografia", unique = false)
      private String biografia;

      @Schema(description = "URL de la foto del usuario", example = "https://example.com/foto.jpg")
      @Size(max = 255, message = "La URL de la foto no puede tener más de 255 caracteres")
      @Column(name = "foto", nullable = true, unique = false)
      private String foto;

      @Schema(description = "Localidad del usuario", example = "Madrid")
      @Size(max = 100, message = "La localidad no puede tener más de 100 caracteres")
      @Column(name = "localidad", nullable = true, unique = false)
      private String localidad;

      @Column(name = "CREAR_EVENTO")
      private Boolean crearEvento = false;

      private Boolean activo = true;

      @Schema(description = "Cantidad de eventos completados por el usuario", example = "5")
      @Column(name = "eventos_completados", nullable = true, unique = false)
      private Integer eventosCompletados = 0;

      @OneToMany(mappedBy = "usuario")
      @com.fasterxml.jackson.annotation.JsonIgnore
      private List<Inscripciones> inscripciones;

}
