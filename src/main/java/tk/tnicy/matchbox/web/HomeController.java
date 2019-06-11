package tk.tnicy.matchbox.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import tk.tnicy.matchbox.domain.Message;
import tk.tnicy.matchbox.domain.Post;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.service.MessageService;
import tk.tnicy.matchbox.service.PostService;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.service.Util;

import java.util.List;

@Controller
public class HomeController {

    @Autowired
    UserService userService;

    @Autowired
    PostService postService;

    @Autowired
    MessageService messageService;

    @Autowired
    Util util;

    @GetMapping(value = {"/", "/index/{page}"})
    public String getIndex(Model model, @PathVariable(value = "page", required = false) Integer page) {

        util.injectUser(model);

        List<Post> posts;

        if (page == null) {
            page = 0;
        }

        if (util.logined()) {
            posts = postService.getMyFollowPosts(util.getCurrentFeature(), page, 20, Sort.by("time").descending());
            model.addAttribute("logined", true);

            List<Message> rec = messageService.findMessagesByReceiver(util.getCurrentFeature(),
                    0, 20, Sort.by("time").descending());
            model.addAttribute("letters", rec);


        } else {
            posts = postService.getAllPostsBytype(1, page, 20, Sort.by("time").descending());
            model.addAttribute("logined", false);
        }

        model.addAttribute("posts", posts);
        model.addAttribute("page", page);


        return "index";
    }


    @RequiresPermissions("normal")
    @PostMapping("/publishPost")
    public String publishPost(@RequestParam("content") String content,
                              @RequestParam(name = "type", required = false) Integer type) {
        User user = util.getCurrentUser();
        Post newPost = new Post();
        if (type == null) {
            type = 1;
        }
        newPost.setType(type);
        newPost.setContent(content);
        newPost.setAuthor(user.getFeature());
        newPost.setTime(Util.now());

        user.getFeature().getPosts().add(newPost);
        userService.saveAndFlush(user);

        return "redirect:/";
    }


}
