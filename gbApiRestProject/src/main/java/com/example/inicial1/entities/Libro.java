package com.example.inicial1.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.envers.Audited;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "libro")
@Audited
public class Libro extends Base {

    private Date fecha;
    private String genero;
    private int paginas;
    private String titulo;

    @ManyToMany(cascade = CascadeType.REFRESH)
    private Set<Autor> autores = new HashSet<Autor>();
}
