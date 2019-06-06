package tk.tnicy.matchbox.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.util.Util;

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
}
