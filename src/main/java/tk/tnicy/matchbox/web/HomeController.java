package tk.tnicy.matchbox.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.domain.Post;
import tk.tnicy.matchbox.service.PostService;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.util.Util;

import java.util.List;

@Controller
public class HomeController {

    @Autowired
    UserService userService;

    @Autowired
    PostService postService;

    @GetMapping(value = {"/", "/index"})
    public String getIndex(Model model) {

        Util.injectUser(userService, model);

        List<Post> posts;

        if (Util.logined(userService)) {
            posts = postService.getMyFollowPosts(Util.getCurrentUser(userService).getFeature(), 1, 20, Sort.unsorted());
        } else {
            posts = postService.getAllPosts(0, 20, Sort.unsorted());
        }

        model.addAttribute("posts", posts);


        return "index";
    }





}
