package tk.tnicy.matchbox.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.tnicy.matchbox.domain.SysRoleRepository;

import java.util.HashSet;
import java.util.Set;

@Service
public class SysRoleService {
    @Autowired
    SysRoleRepository repository;


    public Set<String> getRolesByUserId(Long uid) {
        Set<String> rolesByUid = new HashSet<>();
        return rolesByUid;

//        Session session = HibernateUtil.currentSession();
//
//        // 打开事务
//        Transaction tx = session.beginTransaction();
//        List list = session.createQuery("FROM Perm").list();
//        System.out.println(list);
//        tx.commit();
//
//
//        HibernateUtil.closeSession();
//        HibernateUtil.sessionFactory.close();
    }
}
