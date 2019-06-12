package tk.tnicy.matchbox.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tk.tnicy.matchbox.domain.*;
import tk.tnicy.matchbox.service.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Objects;
import java.util.UUID;


@Controller
public class UserInfoController {
    @Autowired
    UserService userService;
    @Autowired
    MessageService messageService;
    @Autowired
    PostService postService;

    @Autowired
    Util util;

    @Autowired
    QiniuUploadFileService qiniuUploadFileService;


    @Transactional
    @RequiresPermissions("normal")
    @GetMapping({"/userInfo", "/userInfo/{page}"})
    public String getUserInfo(Model model,
                              @PathVariable(name = "page", required = false) Integer page) {

        util.injectUser(model);

        if (page == null) {
            page = 0;
        }

        User me = util.getCurrentUser();


        List<Message> rec = messageService.findMessagesByReceiver(util.getCurrentFeature(),
                page, 20, Sort.by("time").descending());
        model.addAttribute("letters", rec);

        model.addAttribute("page", page);

        model.addAttribute("detailUser", me);


        List<Post> posts = postService.getPosts(me.getFeature());
        model.addAttribute("detailUserPosts", posts);


        return "userInfo";


    }


    @RequiresPermissions("normal")
    @GetMapping({"/detail/{userId}", "/detail/{userId}/{page}"})
    public String someoneDetail(@PathVariable("userId") Long id, Model model,
                                @PathVariable(name = "page", required = false) Integer page) {

        util.injectUser(model);

        if (page == null) {
            page = 0;
        }


        User me = util.getCurrentUser();
        User you = userService.findUserById(id);
        if (you == null) {
            return "redirect:/";
        }

        List<Message> rec = messageService.findMessagesByReceiver(util.getCurrentFeature(),
                0, 20, Sort.by("time").descending());
        model.addAttribute("letters", rec);

        model.addAttribute("page", 0);

        model.addAttribute("detailUser", you);

        if (me.getFeature().getFollows().contains(you.getFeature())) {
            model.addAttribute("followed", true);
        } else {
            model.addAttribute("followed", false);
        }

        List<Post> posts = null;
        if (me.getFeature().getFollows().contains(you.getFeature())) {
            posts = postService.getPostsByAuthorFollowed(you.getFeature(), page, 20, Sort.by("time").descending());
            model.addAttribute("detailUserPosts", posts);
        } else {
            posts = postService.getAuthorsPublicPosts(you.getFeature(), page, 20, Sort.by("time").descending());
            model.addAttribute("detailUserPosts", posts);

        }

        return "SomeoneDetail";
    }

    //    @Transactional
    @RequiresPermissions("normal")
    @PostMapping("/addTag")
    @ResponseBody
    public ResponseEntity addTag(@RequestBody Tag tag) {

        User user = util.getCurrentUser();

        Tag existedTag = userService.findTagByLabel(tag.getLabel());

        user.getFeature().getTags().add(Objects.requireNonNullElse(existedTag, tag));  //如果有 existedTag, 没有就是tag

        System.out.println(user.getFeature().getTags());

        userService.saveAndFlush(user);


        return ResponseEntity.ok(tag);
    }

    @Transactional
    @RequiresPermissions("normal")
    @PostMapping("/deleteTag")
    @ResponseBody
    public ResponseEntity deleteTag(@RequestBody Tag tag) {

        User user = util.getCurrentUser();


        System.out.println("删除前tags:" + user.getFeature().getTags());
        user.getFeature().getTags().remove(tag);
        System.out.println("删除后tags:" + user.getFeature().getTags());


        userService.saveAndFlush(user);


        return ResponseEntity.ok(tag);
    }


    //    修改个签
    @RequiresPermissions("normal")
    @PostMapping("/addSignature")
    public ResponseEntity addSignature(@RequestBody Feature feature) {
        User user = util.getCurrentUser();
//        System.out.println(feature);
        System.out.println(feature.getSignature());
        user.getFeature().setSignature(feature.getSignature());
        userService.saveAndFlush(user);

        return ResponseEntity.ok(feature.getSignature());
    }

    //  修改性别
    @RequiresPermissions("normal")
    @PostMapping("/editGender")
    public ResponseEntity editGender(@RequestBody Feature feature) {

        User user = util.getCurrentUser();

        System.out.println(feature.getGender());
        user.getFeature().setGender(feature.getGender());
        userService.saveAndFlush(user);
        return ResponseEntity.ok(feature.getGender());
    }

    @ResponseBody
    @RequiresPermissions("normal")
    @PostMapping("/changeAvatar")
    public String changeAvatar(@RequestParam(value = "files", required = false) MultipartFile multipartFile) throws IOException {

        if (multipartFile != null) {
            long size = multipartFile.getSize();
            if (size > 5242880) {//文件设置大小，我这里设置5M。
                return "文件过大";
            }


            User user = util.getCurrentUser();

            InputStream image = multipartFile.getInputStream();

            String oldUuid = user.getFeature().getAvatarUUID();

            qiniuUploadFileService.deleteImg(oldUuid);//删除老的uuid对应的图片

            String uuid = UUID.randomUUID().toString();//新uuid

            user.getFeature().setAvatarUUID(uuid);

            userService.saveAndFlush(user);

            String url = qiniuUploadFileService.uploadImg((FileInputStream) image, uuid);

            System.out.println(url);
            return url;
        }

        System.out.println("empty");
        return "empty";
    }


}
