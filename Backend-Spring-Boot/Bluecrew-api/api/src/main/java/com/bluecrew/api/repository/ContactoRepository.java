package com.bluecrew.api.repository;

import com.bluecrew.api.model.Contacto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ContactoRepository extends JpaRepository<Contacto, Long> {

    @Query(value = "SELECT * FROM contactos ORDER BY fecha_creacion DESC", nativeQuery = true)
    List<Contacto> findAllContactosNative();

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM contactos WHERE id = :id", nativeQuery = true)
    void deleteContactoByIdNative(@Param("id") Long id);
}