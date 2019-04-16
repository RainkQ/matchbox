package tk.tnicy.matchbox.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.util.Util;

@Controller
public class HomeController {

    @Autowired
    UserService userService;

    @GetMapping(value = {"/", "/index"})
    public String getIndex(Model model) {

        Util.injectUser(model);

        Util.getCurrentUser();
        return "index";
    }





}
