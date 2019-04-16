package tk.tnicy.matchbox.shiro;

import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import tk.tnicy.matchbox.domain.User;
import tk.tnicy.matchbox.domain.UserRepository;
import tk.tnicy.matchbox.service.UserService;

import java.util.List;

public class UserRealm extends AuthorizingRealm {


    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;


    //    授权
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        User user = (User) principalCollection.getPrimaryPrincipal();
        List<String> permissions = userService.getPermissionsByUserId(user.getId());

        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
        info.addStringPermissions(permissions);
        System.out.println("doGetAuthorizationInfo: " + user.toString());
        return info;
    }

    //    认证
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;
        User user = userService.findUserByUsername(token.getUsername());
        if (user == null) {
            return null;
        }
        ByteSource salt = ByteSource.Util.bytes(user.getSalt());

        return new SimpleAuthenticationInfo(user, user.getPassword(), salt, this.getName());
    }
}
