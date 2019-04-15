package tk.tnicy.matchbox.web;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.util.Util;

@Controller
public class HomeController {

    @Autowired
    UserService userService;

    @GetMapping(value = {"/", "/index"})
    public String getIndex(Model model) {

        Util.injectUser(userService, model);

        Subject subject = SecurityUtils.getSubject();
        User user = (User) subject.getSession().getAttribute("user");
        System.out.println(user);
        return "index";
    }

    @RequiresPermissions("normal")
    @RequestMapping("/userInfo")
    public String getUserInfo(Model model) {

        Util.injectUser(userService, model);
        return "login";

    }



}
