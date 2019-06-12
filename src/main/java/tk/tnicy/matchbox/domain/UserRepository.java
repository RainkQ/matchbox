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


    @Query(value = "WITH tags AS (\n" +
            "  SELECT tags_id\n" +
            "\tFROM feature_tags\n" +
            "\tWHERE feature_id = 1006\n" +
            "),\n" +
            "      friends AS (\n" +
            "  SELECT feature_id \n" +
            "  FROM feature_tags\n" +
            "  WHERE tags_id in (SELECT * FROM tags) AND feature_id <> 1006\n" +
            "),\n" +
            "\t    friends_similarity AS (\n" +
            "\tSELECT DISTINCT feature_id, getsimilarity(1006,feature_id) AS similarity\n" +
            "\tFROM friends\n" +
            ")\n" +
            "\n" +
            "SELECT feature_id FROM friends_similarity ORDER BY similarity DESC;",
            nativeQuery = true)
    List<Feature> findUserBySimilarity(@Param("id") Long id);
}
