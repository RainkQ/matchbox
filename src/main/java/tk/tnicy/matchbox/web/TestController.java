package tk.tnicy.matchbox.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.domain.Post;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.service.PostService;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.util.Util;

import java.sql.Date;
import java.util.Calendar;

@Controller
public class TestController {


    @Autowired
    UserService userService;

    @Autowired
    PostService postService;

    @GetMapping(value = "/test")
    public String test() {
        User user = Util.getCurrentUser(userService);

        Post post = new Post();
        post.setId(null);
        post.setAuthor(user.getFeature());
        post.setContent("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisciLorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisciLorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisciLorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisciLorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisciLorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisciLorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisciLorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisciLorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisciLorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisciLorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisciLorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisciLorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci");
        long timeInMillis = Calendar.getInstance().getTimeInMillis();
        post.setTime(new Date(timeInMillis));
        post.setType(1);

        user.getFeature().getPosts().add(post);
        userService.save(user);


        return "redirect:/";
    }

}
