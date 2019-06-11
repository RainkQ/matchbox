package tk.tnicy.matchbox.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import tk.tnicy.matchbox.domain.Feature;
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


    public List<Message> findMessagesBySender(Feature sender) {
        return messageRepository.findMessagesBySender(sender);
    }

    public List<Message> findMessagesByReceiver(Feature receiver, Integer page, Integer size, Sort sort) {
        PageRequest pr = new PageRequest(page, size, sort);
        return messageRepository.findMessagesByReceiver(receiver, pr).getContent();
    }

    public List<Message> findMessagesBySenderAndReceiver(Feature sender_id, Feature receiver_id) {
        return messageRepository.findMessagesBySenderAndReceiver(sender_id, receiver_id);
    }
}
