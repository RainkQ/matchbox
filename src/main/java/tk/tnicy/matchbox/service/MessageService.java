package tk.tnicy.matchbox.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.tnicy.matchbox.domain.Message;
import tk.tnicy.matchbox.domain.MessageRepository;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    MessageRepository messageRepository;

    public Message save(Message message) {
        return messageRepository.save(message);
    }


    public List<Message> findMessagesBySender(Long sender) {
        return messageRepository.findMessagesBySender(sender);
    }

    public List<Message> findMessagesByReceiver(Long receiver) {
        return messageRepository.findMessagesByReceiver(receiver);
    }

    public List<Message> findMessagesBySenderAndReceiver(Long sender_id, Long receiver_id) {
        return messageRepository.findMessagesBySenderAndReceiver(sender_id, receiver_id);
    }
}
