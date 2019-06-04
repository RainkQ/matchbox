package tk.tnicy.matchbox.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping(value = {"/", "/index/{page}"})
    public String getIndex(Model model, @PathVariable(value = "page", required = false) Integer page) {

        Util.injectUser(userService, model);

        List<Post> posts;

        if (page == null) {
            page = 0;
        }

        if (Util.logined(userService)) {
            posts = postService.getMyFollowPosts(Util.getCurrentUser(userService).getFeature(), 1, 20, Sort.unsorted());
        } else {
            posts = postService.getAllPostsBytype(1, page, 20, Sort.unsorted());
        }

        model.addAttribute("posts", posts);
        model.addAttribute("page", page);


        return "index";
    }





}
