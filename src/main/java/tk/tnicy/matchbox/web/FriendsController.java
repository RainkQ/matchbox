package tk.tnicy.matchbox.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import tk.tnicy.matchbox.domain.Feature;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.service.FeatureService;
import tk.tnicy.matchbox.service.UserService;
import tk.tnicy.matchbox.service.Util;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Controller
public class FriendsController {

    @Autowired
    UserService userService;


    @Autowired
    FeatureService featureService;

    @Autowired
    Util util;

    @RequiresPermissions("normal")
    @GetMapping("/newFriends")
    public String getNewFriends(Model model) {
        util.injectUser(model);

        List<BigInteger> userBySimilarity = userService.findUserBySimilarity(util.getCurrentFeature().getId());

        List<Long> result = new ArrayList<>();
        for (BigInteger a : userBySimilarity
        ) {
            Long b = a.longValue();
            result.add(b);
        }

        List<Feature> features = featureService.findAllByIdIn(result, 0, 20, Sort.unsorted());

        List<Feature> follows = util.getCurrentFeature().getFollows();

        for (Feature followed :
                follows) {
            features.remove(followed);
        }

        model.addAttribute("features", features);
        return "newFriends";
    }

    @Transactional
    @RequiresPermissions("normal")
    @PostMapping("/followUser")
    @ResponseBody
    public String followUser(@RequestBody User user) {
        User me = util.getCurrentUser();
        User target = userService.findUserById(user.getId());
        me.getFeature().getFollows().add(target.getFeature());

        userService.saveAndFlush(me);
        return "ok";
    }

    @Transactional
    @RequiresPermissions("normal")
    @PostMapping("/unfollowUser")
    @ResponseBody
    public String unfollowUser(@RequestBody User user) {
        User me = util.getCurrentUser();
        User target = userService.findUserById(user.getId());
        Feature feature = target.getFeature();

        List<Feature> follows = me.getFeature().getFollows();


        follows.remove(feature);

        userService.saveAndFlush(me);
        return "ok";
    }
}
