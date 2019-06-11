package tk.tnicy.matchbox.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import tk.tnicy.matchbox.domain.Feature;
import tk.tnicy.matchbox.domain.Message;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.service.MessageService;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.service.Util;

import java.util.List;

@Controller
public class FollowsController {
    @Autowired
    UserService userService;
    @Autowired
    MessageService messageService;
    @Autowired
    Util util;

    @RequiresPermissions("normal")
    @GetMapping("/follows")
    public String getFollows(Model model) {
        util.injectUser(model);

        User user = util.getCurrentUser();
        List<Feature> follows = user.getFeature().getFollows();

        List<Message> rec = messageService.findMessagesByReceiver(util.getCurrentFeature(),
                0, 20, Sort.by("time").descending());
        model.addAttribute("letters", rec);
        model.addAttribute("features", follows);

        return "follows";
    }


    @Transactional
    @RequiresPermissions("normal")
    @PostMapping("/followUser")
    @ResponseBody
    public String followUser(@RequestBody User user) {
        User me = util.getCurrentUser();
        User target = userService.findUserById(user.getId());
        me.getFeature().getFollows().add(target.getFeature());

        userService.saveAndFlush(me);
        return "ok";
    }

    @Transactional
    @RequiresPermissions("normal")
    @PostMapping("/unfollowUser")
    @ResponseBody
    public String unfollowUser(@RequestBody User user) {
        User me = util.getCurrentUser();
        User target = userService.findUserById(user.getId());
        Feature feature = target.getFeature();

        List<Feature> follows = me.getFeature().getFollows();


        follows.remove(feature);

        userService.saveAndFlush(me);
        return "ok";
    }

}
