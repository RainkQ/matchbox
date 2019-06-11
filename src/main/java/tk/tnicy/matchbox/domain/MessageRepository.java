package tk.tnicy.matchbox.domain;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    Message save(Message message);

    Message saveAndFlush(Message message);

    List<Message> findMessagesBySender(Feature sender);

    List<Message> findMessagesByReceiver(Feature receiver);

    Page<Message> findMessagesByReceiver(Feature receiver, Pageable pageable);

    List<Message> findMessagesBySenderAndReceiver(Feature sender, Feature receiver);
}
