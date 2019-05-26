package tk.tnicy.matchbox.domain;

import com.vladmihalcea.hibernate.type.array.IntArrayType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "avatar")
@Data
@AllArgsConstructor
@NoArgsConstructor
@TypeDef(
        name = "int-array",
        typeClass = IntArrayType.class
)
public class Avatar implements Serializable {

    @Id
    @GeneratedValue(generator = "avatar_generator")
    @SequenceGenerator(
            name = "avatar_generator",
            sequenceName = "avatar_sequence",
            initialValue = 1000
    )
    private Long id;

    @Column(name = "data",
            columnDefinition = "integer[]")
    @Type(type = "int-array")
    private int[] data;
}
