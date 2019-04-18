package tk.tnicy.matchbox.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.util.Util;

@Controller
public class ExploreController {
    @RequiresPermissions("normal")
    @GetMapping("/explore")
    public String getChat(Model model) {
        Util.injectUser(model);

        return "explore";
    }
}
