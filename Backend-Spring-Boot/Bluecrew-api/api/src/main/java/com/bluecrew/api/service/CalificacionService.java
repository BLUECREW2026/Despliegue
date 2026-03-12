package com.bluecrew.api.service;

import com.bluecrew.api.model.Calificacion;
import com.bluecrew.api.model.CalificacionId;
import com.bluecrew.api.repository.CalificacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CalificacionService {

    @Autowired
    public CalificacionRepository calificacionRepository;

    // ************************
    // CONSULTAS
    // ************************
    @Transactional(readOnly = true)
    public List<Calificacion> findAll() {
        return calificacionRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Calificacion findById(CalificacionId id) {
        return calificacionRepository.findSqlById(id);
    }

    @Transactional(readOnly = true)
    public Long count() {
        return calificacionRepository.count();
    }

    @Transactional(readOnly = true)
    public List<Calificacion> findByEventoId(Long eventoId) {
        return calificacionRepository.findSqlByEventoId(eventoId);
    }

    // ************************
    // ACTUALIZACIONES
    // ************************
    @Transactional
    public Calificacion save(Calificacion cal) {
        return calificacionRepository.save(cal);
    }

    @Transactional
    public Calificacion update(CalificacionId id, Calificacion calDetails) {
        Calificacion cal = calificacionRepository.findSqlById(id);
        if (cal == null) {
            throw new RuntimeException("Calificacion no encontrada");
        }

        if (calDetails.getCalificacion() != null) {
            cal.setCalificacion(calDetails.getCalificacion());
        }
        if (calDetails.getComentario() != null) {
            cal.setComentario(calDetails.getComentario());
        }
        if (calDetails.getFechaCalificacion() != null) {
            cal.setFechaCalificacion(calDetails.getFechaCalificacion());
        }

        return calificacionRepository.save(cal);
    }

    @Transactional
    public void deleteById(CalificacionId id) {
        if (!calificacionRepository.existsById(id)) {
            throw new RuntimeException("Calificacion no encontrada");
        }
        calificacionRepository.deleteById(id);
    }
}
