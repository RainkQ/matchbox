package tk.tnicy.matchbox.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.domain.Feature;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.util.Util;

import java.util.List;

@Controller
public class FollowsController {
    @Autowired
    UserService userService;

    @RequiresPermissions("normal")
    @GetMapping("/follows")
    public String getFollows(Model model) {
        Util.injectUser(userService, model);

        User user = Util.getCurrentUser(userService);
        List<Feature> follows = user.getFeature().getFollows();

        model.addAttribute("features", follows);

        return "follows";
    }
}
