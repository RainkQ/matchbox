package tk.tnicy.matchbox.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;
import java.util.Set;

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

    @ManyToMany(targetEntity = Tag.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Tag> tags; //tags


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Feature)) return false;
        Feature feature = (Feature) o;
        return Objects.equals(getId(), feature.getId()) &&
                Objects.equals(getGender(), feature.getGender()) &&
                Objects.equals(getSignature(), feature.getSignature()) &&
                Objects.equals(getTags(), feature.getTags());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getGender(), getSignature(), getTags());
    }
}
