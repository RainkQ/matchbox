package tk.tnicy.matchbox.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import tk.tnicy.matchbox.domain.auth.SysPermission;

public interface SysPermissionRepository extends JpaRepository<SysPermission, Long> {

}
