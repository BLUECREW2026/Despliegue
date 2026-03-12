package com.bluecrew.api.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bluecrew.api.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    @Query(value = "SELECT * FROM USUARIOS", nativeQuery = true)
    List<Usuario> findSqlAll();

    @Query(value = "SELECT * FROM USUARIOS WHERE id = :id", nativeQuery = true)
    Usuario findSqlById(@Param("id") int id);

    @Query(value = "SELECT COUNT(*) as usuarios FROM USUARIOS", nativeQuery = true)
    Long countSql();

    @Query(value = "SELECT * FROM USUARIOS WHERE email = :email", nativeQuery = true)
    Optional<Usuario> findByEmail(@Param("email") String email);

    @Query(value = "SELECT COUNT(*) FROM USUARIOS WHERE activo = true", nativeQuery = true)
    Long countSqlActivos();
 
}
