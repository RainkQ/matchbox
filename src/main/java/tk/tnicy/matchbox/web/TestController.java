package tk.tnicy.matchbox.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.domain.Post;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.service.PostService;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.util.Util;

@Controller
public class TestController {


    @Autowired
    UserService userService;

    @Autowired
    PostService postService;


    @RequiresPermissions("normal")
    @GetMapping(value = "/test")
    public String test() {
        User user = Util.getCurrentUser(userService);

        Post post = new Post();
        post.setId(null);
        post.setAuthor(user.getFeature());
        post.setContent("淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦淦");
        post.setTime(Util.now());
        post.setType(1);

        user.getFeature().getPosts().add(post);
        userService.save(user);


        return "redirect:/";
    }

}
