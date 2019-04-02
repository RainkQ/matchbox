package tk.tnicy.matchbox.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import tk.tnicy.matchbox.domain.auth.SysRole;


public interface SysRoleRepository extends JpaRepository<SysRole, Long> {

}
