package tk.tnicy.matchbox.web;

import com.google.gson.reflect.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.domain.JsonUser;
import tk.tnicy.matchbox.domain.Message;
import tk.tnicy.matchbox.service.*;

import java.lang.reflect.Type;
import java.sql.Timestamp;
import java.util.List;
import java.util.Random;

@Controller
public class TestController {


    @Autowired
    UserService userService;
    @Autowired
    FeatureService featureService;

    @Autowired
    PostService postService;
    @Autowired
    MessageService messageService;

    @Autowired
    Util util;

    private static final Type TYPE = new TypeToken<List<JsonUser>>() {
    }.getType();



    @GetMapping(value = "/test")
    public String test() {
//        Gson g = new Gson();
//        String filename = "fakedUsers.json";
//        try {
//            JsonReader reader = new JsonReader(new FileReader(filename));
//            List<JsonUser> users = g.fromJson(reader, TYPE);
////            System.out.println(users.get(0));
//            int time = 0;
//            Random random = new Random();
//            for (JsonUser u :
//                    users) {
//                convertAndWriteOther(u,random);
//                time++;
//                if (time % 200 == 0) {
//                    System.out.println("time: " + time);
//                }
//            }
//
//
//        } catch (FileNotFoundException e) {
//            e.printStackTrace();
//        }

        return "redirect:/";
    }


    public void convertAndWriteOther(JsonUser jsonUser, Random random) {

        for (JsonUser.Message m : jsonUser.getMessages()
        ) {
            Message message = new Message();
            message.setContent(m.getContent());
            message.setTime(Timestamp.valueOf(m.getTime()));

            long a = random.nextLong();
            a = (a % 40000) + 4000;

            message.setSender(userService.findUserByUsername(jsonUser.getName()).getFeature());
            message.setReceiver(featureService.findFeatureById(a));
            messageService.save(message);
        }


    }


}
