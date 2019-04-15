package tk.tnicy.matchbox.domain;

import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {


    @Cacheable(value = "users", key = "#username", unless = "#result == null")
    User findUserByUsername(String username);

    @CachePut(value = "users", key = "#user.getUsername()", unless = "#result == null")
    User save(User user);

    @Cacheable(value = "users", key = "'findAll'", unless = "#result == null")
    List<User> findAll();



}
