package tk.tnicy.matchbox.domain;

import lombok.Data;

import java.util.List;

@Data
public class JsonUser {
    String name;
    String password;
    Boolean gender;
    String signature;
    List<String> tags;
    List<Post> posts;
    List<Message> messages;

    @Data
    public static class Post {
        String content;
        Integer type;
        String time;
    }

    @Data
    public static class Message {
        String content;
        String time;
    }


}
