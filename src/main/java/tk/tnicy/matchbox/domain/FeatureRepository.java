package tk.tnicy.matchbox.domain;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface FeatureRepository extends JpaRepository<Feature, Long> {

    Page<Feature> findAllByIdIn(Collection<Long> id, Pageable pageable);

}
