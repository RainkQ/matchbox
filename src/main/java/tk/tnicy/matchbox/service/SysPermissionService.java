package tk.tnicy.matchbox.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.tnicy.matchbox.domain.SysPermissionRepository;

import java.util.HashSet;
import java.util.Set;

@Service
public class SysPermissionService {
    @Autowired
    SysPermissionRepository repository;

    public Set<String> getPermsByUserId(Long uid) {
        Set<String> permsByUid = new HashSet<>();
        return permsByUid;
    }
}
