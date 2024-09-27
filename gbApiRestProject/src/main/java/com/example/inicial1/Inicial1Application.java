package com.example.inicial1;

import com.example.inicial1.entities.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.example.inicial1.repositories.PersonaRepository;
import org.springframework.context.annotation.Bean;

import java.util.HashSet;

@SpringBootApplication
public class Inicial1Application {

	/*@Autowired
	PersonaRepository personaRepository;*/

	public static void main(String[] args) {
		SpringApplication.run(Inicial1Application.class, args);

		System.out.println("funcionando");
	}

	/*@Bean
	@Transactional
	CommandLineRunner init(PersonaRepository personaRepository) {
		return args -> {
			Localidad loc1 = Localidad.builder().
					denominacion("Palmira").
					build();

			Localidad loc2 = Localidad.builder().
					denominacion("Guaymallén").
					build();

			Domicilio dom1 = Domicilio.builder().
					calle("Le Parc").
					numero(122).
					localidad(loc1).
					build();

			Domicilio dom2 = Domicilio.builder().
					calle("José María Gutiérrez").
					numero(4272).
					localidad(loc2).
					build();

			Persona per1 = Persona.builder().
					nombre("Gabriel").
					apellido("Badui").
					domicilio(dom1).
					build();

			Persona per2 = Persona.builder().
					nombre("Gabriel").
					apellido("Iglesias").
					domicilio(dom2).
					build();

			Autor aut1 = Autor.builder().
					nombre("Mark").
					apellido("Manson").
					biografia("Un montón de lore").
					build();

			Libro lib1 = Libro.builder().
					titulo("El Sutil Arte de que (casi todo) te Importe una Mierda").
					fecha("10/10/2016").
					genero("Autoayuda").
					paginas(233).
					build();

			per1.getLibros().add(lib1);
			per2.getLibros().add(lib1);
			lib1.getAutores().add(aut1);

			*//*personaRepository.save(per1);
			personaRepository.save(per2);*//*
		};
	};*/
}