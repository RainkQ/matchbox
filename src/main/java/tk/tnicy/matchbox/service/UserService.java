package tk.tnicy.matchbox.service;

import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.tnicy.matchbox.domain.*;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    TagRepository tagRepository;


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

        User hadUser = userRepository.findUserByUsername(username);
        // 看数据库中是否存在该账户
        if (hadUser != null) {
            System.out.println("已有用户：" + hadUser.toString());
            return false;
        }


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
        user.getFeature().setTags(new HashSet<>());
        user.getFeature().setFollows(new ArrayList<>());
        user.getFeature().setAvatar(new Avatar());
        user.getFeature().setPosts(new ArrayList<>());

        userRepository.save(user);
        return true;
    }


    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Transactional
    public User findUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }

    @Transactional
    public User save(User user) {
        return userRepository.save(user);
    }

    @Transactional
    public void delete(User user) {
        userRepository.delete(user);
    }

    @Transactional
    public Tag findTagByLabel(String label) {
        return tagRepository.findByLabel(label);
    }

    @Transactional
    public List<Tag> findAllTags() {
        return tagRepository.findAll();
    }


    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    @Transactional
    public User saveAndFlush(User user) {
        return userRepository.saveAndFlush(user);
    }


    @Transactional
    public User findUserById(Long id) {
        return userRepository.findUserById(id);
    }


    public List<BigInteger> findUserBySimilarity(Long id) {
        return userRepository.findUserBySimilarity(id);
    }
}
