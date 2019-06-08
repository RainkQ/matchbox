package tk.tnicy.matchbox.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.domain.Feature;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.service.Util;

import java.util.List;

@Controller
public class FollowsController {
    @Autowired
    UserService userService;
    @Autowired
    Util util;

    @RequiresPermissions("normal")
    @GetMapping("/follows")
    public String getFollows(Model model) {
        util.injectUser(model);

        User user = util.getCurrentUser();
        List<Feature> follows = user.getFeature().getFollows();

        model.addAttribute("features", follows);

        return "follows";
    }
}
