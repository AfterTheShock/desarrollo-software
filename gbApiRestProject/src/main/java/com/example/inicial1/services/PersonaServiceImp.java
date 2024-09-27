package com.example.inicial1.services;

import com.example.inicial1.entities.Persona;
import com.example.inicial1.repositories.BaseRepository;
import com.example.inicial1.repositories.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaServiceImp extends BaseServiceImp<Persona, Long> implements PersonaService{

    @Autowired
    private PersonaRepository personaRepository;

    public PersonaServiceImp(BaseRepository<Persona, Long> baseRepository){
        super(baseRepository);
    }

    @Override
    public List<Persona> search(String filter) throws Exception {
        try{
            //List<Persona> personas = personaRepository.findByNombreContainingOrApellidoContaining(filter, filter);
            /*List<Persona> personas = personaRepository.search(filter);*/
            List<Persona> personas = personaRepository.nativeSearch(filter);

            return personas;
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Page<Persona> search(String filter, Pageable pageable) throws Exception {
        try{
            //Page<Persona> personas = personaRepository.findByNombreContainingOrApellidoContaining(filter, filter, pageable);
            /*Page<Persona> personas = personaRepository.search(filter, pageable);*/
            Page<Persona> personas = personaRepository.nativeSearch(filter, pageable);

            return personas;
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
}