package tk.tnicy.matchbox.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "feature")
@Data
public class Feature implements Serializable {
    @Id
    @GeneratedValue(generator = "feature_generator")
    @SequenceGenerator(
            name = "feature_generator",
            sequenceName = "feature_sequence",
            initialValue = 1000
    )
    private Long id;



}
