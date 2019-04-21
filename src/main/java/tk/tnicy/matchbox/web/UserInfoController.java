package tk.tnicy.matchbox.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import tk.tnicy.matchbox.domain.Tag;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.util.Util;

import java.util.Objects;

@Controller
public class UserInfoController {
    @Autowired
    UserService userService;

    @Transactional
    @RequiresPermissions("normal")
    @GetMapping("/userInfo")
    public String getUserInfo(Model model) {

        Util.injectUser(userService, model);


        return "userInfo";


    }


    //    @Transactional
    @RequiresPermissions("normal")
    @PostMapping("/addTag")
    @ResponseBody
    public String addTag(@RequestBody Tag tag) {

        User user = Util.getCurrentUser(userService);

        Tag existedTag = userService.findTagByLabel(tag.getLabel());

        user.getFeature().getTags().add(Objects.requireNonNullElse(existedTag, tag));  //如果有 existedTag, 没有就是tag

        System.out.println(user.getFeature().getTags());

        userService.saveAndFlush(user);


        return "ok";
    }

    @Transactional
    @RequiresPermissions("normal")
    @PostMapping("/deleteTag")
    @ResponseBody
    public String deleteTag(@RequestBody Tag tag) {

        User user = Util.getCurrentUser(userService);


        System.out.println("删除前tags:" + user.getFeature().getTags());
        user.getFeature().getTags().remove(tag);
        System.out.println("删除后tags:" + user.getFeature().getTags());


        userService.saveAndFlush(user);


        return "ok";
    }
}
