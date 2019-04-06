package tk.tnicy.matchbox.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.domain.UserRepository;

import javax.servlet.http.HttpSession;

@Controller
public class HomeController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public String getIndex(HttpSession session, Model model) {
        User user = new User();
        user.setUsername("未登录");
        model.addAttribute("user", user);

        return "index";
    }
}
