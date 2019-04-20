package tk.tnicy.matchbox.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "tag")
@Data
public class Tag {
    @Id
    @GeneratedValue(generator = "tag_generator")
    @SequenceGenerator(
            name = "tag_generator",
            sequenceName = "tag_sequence",
            initialValue = 1000
    )
    private Long id;

    private String label;

}
