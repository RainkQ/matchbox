package tk.tnicy.matchbox.util;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.DisabledAccountException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.ui.Model;
import tk.tnicy.matchbox.domain.Feature;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.service.UserService;

public class Util {


    public static Session injectUser(Model model) {
        Subject subject = SecurityUtils.getSubject();
        User user = (User) subject.getPrincipal();

        if (user == null) {
            user = new User();
            user.setUsername("未登录");
            user.setPassword("");
            user.setFeature(new Feature());
            user.setId(-1L);
        }

        model.addAttribute("user", user);

        return subject.getSession();


    }


    public static boolean login(UserService userService, String username, String password, Model model) {
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username, password);
        try {
            subject.login(token);
            model.addAttribute("msg", "");
            User user = (User) subject.getPrincipal();
            subject.getSession().setAttribute("user", user);
            return true;
        } catch (UnknownAccountException e) {
            //账号不存在和下面密码错误一般都合并为一个账号或密码错误，这样可以增加暴力破解难度
            model.addAttribute("msg", "账号不存在！");
        } catch (DisabledAccountException e) {
            model.addAttribute("msg", "账号未启用！");
        } catch (IncorrectCredentialsException e) {
            model.addAttribute("msg", "密码错误！");
        } catch (Throwable e) {
            model.addAttribute("msg", "未知错误！");
        }
        return false;
    }


    public static User getCurrentUser() {
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        System.out.println("现在用户:" + user);
        return user;
    }
}
