package tk.tnicy.matchbox.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import tk.tnicy.matchbox.domain.Feature;
import tk.tnicy.matchbox.domain.Message;
import tk.tnicy.matchbox.service.FeatureService;
import tk.tnicy.matchbox.service.MessageService;
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
    MessageService messageService;

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

        List<Feature> follows = util.getCurrentFeature().getFollows();

        ArrayList<Feature> features = new ArrayList<>();
        for (Long b :
                result) {
            Feature gotFeature = featureService.findFeatureById(b);
            if (!follows.contains(gotFeature)) {
                features.add(gotFeature);
            }
        }

        model.addAttribute("features", features);
        return "newFriends";
    }


    @RequiresPermissions("normal")
    @PostMapping("/letter/{targetId}")
    public ResponseEntity letter(@RequestBody Message message, @PathVariable("targetId") Long targetId) {
        Feature me = util.getCurrentFeature();
        Feature you = featureService.findFeatureById(targetId);


        Message m = new Message();
        m.setContent(message.getContent());
        m.setTime(Util.now());
        m.setReceiver(you);
        m.setSender(me);

        messageService.save(m);

        return ResponseEntity.ok("ok");
    }


}
