package tk.tnicy.matchbox.domain;

import lombok.Data;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "message")
@Data
public class Message {
    @Id
    @GeneratedValue(generator = "message_generator")
    @SequenceGenerator(
            name = "message_generator",
            sequenceName = "message_sequence",
            initialValue = 1000
    )
    private Long id;


    private String content;

    //    @Temporal(TemporalType.TIMESTAMP)
    private Date time; // 日期类型，格式：yyyy-MM-dd HH:mm:ss


    @LazyCollection(LazyCollectionOption.FALSE)
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "sender_id")
    private Feature sender;

    @LazyCollection(LazyCollectionOption.FALSE)
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "receiver_id")
    private Feature receiver;


}
