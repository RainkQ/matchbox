package tk.tnicy.matchbox.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    Message save(Message message);

    Message saveAndFlush(Message message);

    List<Message> findMessagesBySender(Long sender);

    List<Message> findMessagesByReceiver(Long receiver);

    List<Message> findMessagesBySenderAndReceiver(Long sender_id, Long receiver_id);
}
