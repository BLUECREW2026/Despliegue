package com.bluecrew.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bluecrew.api.model.RecoleccionResiduos;
import com.bluecrew.api.repository.RecoleccionResiduosRepository;

import org.springframework.transaction.annotation.Transactional;

@Service
public class RecoleccionResiduosService {
    @Autowired
    RecoleccionResiduosRepository recoleccionRepository;

    @Transactional(readOnly = true)
    public List<RecoleccionResiduos> findAll() {
        return recoleccionRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Double findByIdEvento(int id) {
        return recoleccionRepository.findSqlByIdEvento(id);
    }

    @Transactional(readOnly = true)
    public Long findSum() {
        return recoleccionRepository.findSqlSum();
    }

    @Transactional
    public RecoleccionResiduos save(RecoleccionResiduos rec) {
        return recoleccionRepository.save(rec);
    }
}
