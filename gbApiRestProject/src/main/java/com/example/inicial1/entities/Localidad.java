package com.example.inicial1.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.envers.Audited;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Audited
@Builder
@Table(name = "localidad")
public class Localidad extends Base {

    private String denominacion;
}