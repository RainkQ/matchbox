package tk.tnicy.matchbox.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "tag")
@Data
public class Tag implements Serializable {
    @Id
    @GeneratedValue(generator = "tag_generator")
    @SequenceGenerator(
            name = "tag_generator",
            sequenceName = "tag_sequence",
            initialValue = 1000
    )
    private Long id;


    @Column(name = "label", unique = true)
    private String label;


}
