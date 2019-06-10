package tk.tnicy.matchbox.domain;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;

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
    private Timestamp time; // 日期类型，格式：yyyy-MM-dd HH:mm:ss


    @ManyToOne(targetEntity = Feature.class)
    @JoinColumn(name = "sender_id")
    private Feature sender;

    @ManyToOne(targetEntity = Feature.class)
    @JoinColumn(name = "receiver_id")
    private Feature receiver;


}
