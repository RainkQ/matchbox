package tk.tnicy.matchbox.service;

import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import tk.tnicy.matchbox.domain.Feature;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.domain.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;


    @Cacheable(value = "users", key = "#id", unless = "#result == null")
    public List<String> getPermissionsByUserId(Long id) {
        Optional<User> byId = userRepository.findById(id);
        ArrayList<String> permissions = new ArrayList<>();
        if (byId.isPresent()) {                               //如果有这个id人
            permissions.add("normal");
        }
        return permissions;
    }


    public boolean registerUser(String username, String password) {

        // 将用户名作为盐值
        ByteSource salt = ByteSource.Util.bytes(username);
        /*
         * MD5加密：
         * 使用SimpleHash类对原始密码进行加密。
         * 第一个参数代表使用MD5方式加密
         * 第二个参数为原始密码
         * 第三个参数为盐值，即用户名
         * 第四个参数为加密次数
         * 最后用toHex()方法将加密后的密码转成String
         * */
        String newPs = new SimpleHash("MD5", password, salt, 1).toHex();

        User user = new User();
        user.setUsername(username);
        user.setSalt(username);
        user.setPassword(newPs);
        user.setFeature(new Feature());

        // 看数据库中是否存在该账户
        User hadUser = userRepository.findUserByUsername(username);
        if (hadUser == null) {
            userRepository.save(user);
            return true;
        }
        System.out.println("已有用户：" + hadUser.toString());
        return false;
    }


    public List<User> findAll() {
        return userRepository.findAll();
    }


    public User findUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }

    public User save(User user) {
        return userRepository.save(user);
    }


}
