package tk.tnicy.matchbox.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.domain.Avatar;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.util.Util;

@Controller
public class TestController {


    @Autowired
    UserService userService;

    @GetMapping(value = "/test")
    public String test() {
        User currentUser = Util.getCurrentUser(userService);
        currentUser.getFeature().setAvatar(new Avatar());
        currentUser.getFeature().getAvatar().setData(new int[]{1, 2, 3});
        userService.saveAndFlush(currentUser);

        return "redirect:/";
    }

}
