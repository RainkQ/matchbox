package tk.tnicy.matchbox.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.util.Util;

@Controller
public class FriendsController {
    @RequiresPermissions("normal")
    @GetMapping("/friends")
    public String getChat(Model model) {
        Util.injectUser(model);

        return "friends";
    }
}
