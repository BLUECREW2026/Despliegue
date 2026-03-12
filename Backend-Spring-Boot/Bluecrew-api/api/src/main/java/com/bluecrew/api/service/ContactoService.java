package com.bluecrew.api.service;

import com.bluecrew.api.model.Contacto;
import com.bluecrew.api.repository.ContactoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactoService {

    @Autowired
    private ContactoRepository contactoRepository;

    public List<Contacto> obtenerTodosLosContactos() {
        return contactoRepository.findAllContactosNative();
    }

    public Contacto guardarContacto(Contacto contacto) {
        return contactoRepository.save(contacto);
    }

    public void eliminarContacto(Long id) {
        contactoRepository.deleteContactoByIdNative(id);
    }
}