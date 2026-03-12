package com.bluecrew.api.service;

import com.bluecrew.api.model.Noticia;
import com.bluecrew.api.repository.NoticiaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class NoticiaService {
    
    @Autowired
    public NoticiaRepository noticiaRepository;
    
    // ************************
    // CONSULTAS
    // ************************  
    @Transactional(readOnly = true) 
    public List<Noticia> findAll() {
        return noticiaRepository.findSqlAll();
    }
    @Transactional(readOnly = true) 
    public Noticia findById(int notId) {
        return noticiaRepository.findSqlById(notId);
    }
    @Transactional(readOnly = true) 
    public Long count() {
        return noticiaRepository.count();
    }    
    
    // ************************
    // ACTUALIZACIONES
    // ************************  
    @Transactional
    public Noticia save(Noticia not) {
        return noticiaRepository.save(not);
    }
    
    @Transactional
    public Noticia update(int id, Noticia notDetails) {
        Noticia not = noticiaRepository.findSqlById(id);
        if (not==null) {
            throw new RuntimeException("Noticia no encontrada");
        }
        
        if (notDetails.getTitulo()!= null) {
            not.setTitulo(notDetails.getTitulo());
        }
        if (notDetails.getImagen()!= null) {
            not.setImagen(notDetails.getImagen());
        }
        if (notDetails.getDescripcion()!= null) {
            not.setDescripcion(notDetails.getDescripcion());
        }
        if (notDetails.getEstadoAprobacionNoticia()!= null) {
            not.setEstadoAprobacionNoticia(notDetails.getEstadoAprobacionNoticia());
        }
        if (notDetails.getEstadoVisibilidad()!= null) {
            not.setEstadoVisibilidad(notDetails.getEstadoVisibilidad());
        }
        if (notDetails.getCitaDestacada()!= null) {
            not.setCitaDestacada(notDetails.getCitaDestacada());
        }
        
        return noticiaRepository.save(not);
    }
    
    @Transactional
    public void deleteById(int id) {
        if (!noticiaRepository.existsById(id)) {
            throw new RuntimeException("Noticia no encontrada");
        }
        noticiaRepository.deleteById(id);
    }    
}
