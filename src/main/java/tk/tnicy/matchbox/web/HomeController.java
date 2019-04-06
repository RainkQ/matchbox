package tk.tnicy.matchbox.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import tk.tnicy.matchbox.domain.UserRepository;

@Controller
public class HomeController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public String getIndex() {
        return "index";
    }
}
