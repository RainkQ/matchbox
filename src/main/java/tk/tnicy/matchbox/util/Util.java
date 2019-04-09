package tk.tnicy.matchbox.util;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.DisabledAccountException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.ui.Model;

public class Util {
    public static boolean injectUser(Model model) {
        Subject subject = SecurityUtils.getSubject();
        String username = (String) SecurityUtils.getSubject().getPrincipal();

//        System.out.println(user.toString());
        if (subject.isAuthenticated()) {
            model.addAttribute("username", username);
            return true;
        } else {
            model.addAttribute("username", "未登录");
            return false;
        }
    }


    public static boolean login(String username, String password, Model model) {
        Subject user = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username, password);
        try {
            user.login(token);
            model.addAttribute("msg", "");
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
}
