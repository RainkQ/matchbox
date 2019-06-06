package tk.tnicy.matchbox.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import tk.tnicy.matchbox.domain.Feature;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.util.Util;

import java.util.List;

@Controller
public class FriendsController {

    @Autowired
    UserService userService;

    @RequiresPermissions("normal")
    @GetMapping("/newFriends")
    public String getNewFriends(Model model) {
        Util.injectUser(userService, model);

        return "newFriends";
    }

    @Transactional
    @RequiresPermissions("normal")
    @PostMapping("/followUser")
    @ResponseBody
    public String followUser(@RequestBody User user) {
        User me = Util.getCurrentUser(userService);
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
        User me = Util.getCurrentUser(userService);
        User target = userService.findUserById(user.getId());
        List<Feature> follows = me.getFeature().getFollows();
        System.out.println(follows.toString());
        follows.remove(target.getFeature());
        me.getFeature().setFollows(follows);

        userService.saveAndFlush(me);
        return "ok";
    }
}
