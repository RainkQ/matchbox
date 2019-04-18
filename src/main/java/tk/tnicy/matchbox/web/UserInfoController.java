package tk.tnicy.matchbox.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.util.Util;

@Controller
public class UserInfoController {
    @GetMapping("/userInfo")
    public String getUserInfo(Model model) {

        Util.injectUser(model);

        return "userInfo";


    }
}
