package tk.tnicy.matchbox.domain;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
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

    @CacheEvict(value = "users", key = "#user.getUsername()")
    void delete(User user);

    @CachePut(value = "users", key = "#user.getUsername()", unless = "#result == null")
    User saveAndFlush(User user);


    User findUserById(Long id);


    @Query(value = "WITH seq_a AS ( SELECT id_a, similarity FROM similarityinfo WHERE id_b = :id ),\n" +
            "seq_b AS ( SELECT id_b, similarity FROM similarityinfo WHERE id_a = :id ),\n" +
            "seq ( ID, similarity ) AS ( SELECT * FROM ( SELECT * FROM seq_a UNION SELECT * FROM seq_b ) AS tem ),\n" +
            "userwithsimilarity AS ( SELECT * FROM ( seq NATURAL JOIN feature ) ) SELECT ID\n" +
            ",\n" +
            "gender,\n" +
            "signature,\n" +
            "avataruuid,\n" +
            "avatar_id \n" +
            "FROM\n" +
            "\tuserwithsimilarity \n" +
            "ORDER BY\n" +
            "\tsimilarity DESC;",
            nativeQuery = true)
    List<Feature> findUserBySimilarity(@Param("id") Long id);
}
