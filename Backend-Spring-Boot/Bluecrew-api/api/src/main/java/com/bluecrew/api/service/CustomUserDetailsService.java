package com.bluecrew.api.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.bluecrew.api.model.Usuario;
import com.bluecrew.api.repository.UsuarioRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UsuarioRepository userRepository;

    @Autowired
    public CustomUserDetailsService(UsuarioRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
      
        Usuario usuario = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado con email: " + email));

        
        if (usuario.getActivo() == null || !usuario.getActivo()) {
            throw new UsernameNotFoundException("El usuario está desactivado.");   
        }
        
        
        String roleName = usuario.getRol().name(); 

       
        UserDetails userSpring = User
                .withUsername(usuario.getEmail()) 
                .password(usuario.getPassword_hash()) 
                .roles(roleName) 
                .build();
        
        return userSpring;
    }
}