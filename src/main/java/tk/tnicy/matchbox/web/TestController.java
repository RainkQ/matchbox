package tk.tnicy.matchbox.web;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.domain.*;
import tk.tnicy.matchbox.service.PostService;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.service.Util;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.lang.reflect.Type;
import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;

@Controller
public class TestController {


    @Autowired
    UserService userService;

    @Autowired
    PostService postService;

    @Autowired
    Util util;

    private static final Type TYPE = new TypeToken<List<JsonUser>>() {
    }.getType();



    @GetMapping(value = "/test")
    public String test() {
        Gson g = new Gson();
        String filename = "fakedUsers.json";
        try {
            JsonReader reader = new JsonReader(new FileReader(filename));
            List<JsonUser> users = g.fromJson(reader, TYPE);
//            System.out.println(users.get(0));
            int time = 0;
            for (JsonUser u :
                    users) {
                convertAndWriteOther(u);
                time++;
                if (time % 200 == 0) {
                    System.out.println("time: " + time);
                }
            }


        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        return "redirect:/";
    }


    public void convertAndWriteOther(JsonUser jsonUser) {
        userService.registerUser(jsonUser.getName(), jsonUser.getPassword());
        User newUser = userService.findUserByUsername(jsonUser.getName());
        Feature newUserFeature = newUser.getFeature();
        for (JsonUser.Post post :
                jsonUser.getPosts()) {
            Post p = new Post();
            p.setTime(Timestamp.valueOf(post.getTime()));
            p.setContent(post.getContent());
            p.setAuthor(newUserFeature);
            p.setType(post.getType());

            newUserFeature.getPosts().add(p);
        }

        newUserFeature.setSignature(jsonUser.getSignature());

        for (String tag :
                jsonUser.getTags()) {
            Tag t = new Tag();
            t.setLabel(tag);

            Tag existedTag = userService.findTagByLabel(tag);
            newUserFeature.getTags().add(Objects.requireNonNullElse(existedTag, t));


        }

        userService.save(newUser);
    }

}
