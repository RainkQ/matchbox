package tk.tnicy.matchbox.domain;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {

    @Cacheable(value = "tags", key = "#label", unless = "#result == null")
    Tag findByLabel(String label);

    @Cacheable(value = "tags", key = "'findAll'", unless = "#result == null")
    List<Tag> findAll();


}
