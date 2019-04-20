package tk.tnicy.matchbox.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

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


    private Boolean gender; //性别 true = 男 false = 女

    private String signature; //个性签名

    @OneToMany(targetEntity = Tag.class, fetch = FetchType.EAGER)
    private List<Tag> tags; //tags


}
