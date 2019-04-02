package tk.tnicy.matchbox.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import tk.tnicy.matchbox.domain.auth.UserInfo;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
}
