package tk.tnicy.matchbox.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "normal_user",
        indexes = {
                @Index(name = "username_index", columnList = "username", unique = true),
                @Index(name = "feature_index", columnList = "feature_id", unique = true)

        })
@Data
@NoArgsConstructor
public class User implements Serializable {

    @Id
    @GeneratedValue(generator = "user_generator")
    @SequenceGenerator(
            name = "user_generator",
            sequenceName = "user_sequence",
            initialValue = 1000
    )
    private Long id;

    @Column(unique = true)
    private String username;
    private String password;
    private String salt;

    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "feature_id")
    private Feature feature;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", salt='" + salt + '\'' +
                '}';
    }

}
