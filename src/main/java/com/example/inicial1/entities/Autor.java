package com.example.inicial1.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.envers.Audited;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "autor")
@Builder
@Audited
public class Autor extends Base{

    private String nombre;
    private String apellido;

    @Column(name = "biografia", length = 1500)
    private String biografia;
}
