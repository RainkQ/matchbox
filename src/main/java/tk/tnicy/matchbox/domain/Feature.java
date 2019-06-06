package tk.tnicy.matchbox.domain;

import lombok.Data;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
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

    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "feature")
    private User user;


    private String avatarUUID;


    private Boolean gender; //性别 true = 男 false = 女


    private String signature; //个性签名

    @LazyCollection(LazyCollectionOption.FALSE)
    @ManyToMany(targetEntity = Tag.class, cascade = {CascadeType.ALL, CascadeType.MERGE})
    private Set<Tag> tags; //tags


    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "avatar_id")
    private Avatar avatar;


//    里程碑

    //    message
    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "sender")
    private List<Message> sentMessages;

    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "receiver")
    private List<Message> receivedMessages;

    //      关注的人
    @LazyCollection(LazyCollectionOption.FALSE)
    @ManyToMany(targetEntity = Feature.class, cascade = CascadeType.ALL)
    private List<Feature> follows;

    //    发的动态
    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "author")
    private List<Post> posts;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Feature)) return false;
        Feature feature = (Feature) o;
        return Objects.equals(getId(), feature.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}
