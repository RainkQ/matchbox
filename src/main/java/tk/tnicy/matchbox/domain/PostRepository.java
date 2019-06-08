package tk.tnicy.matchbox.domain;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    //    拿到某个人的post
    List<Post> findAllByAuthor(Feature author);


    //    拿到一个authors list 的所有post（拿到自己follow的人的post）
    List<Post> findAllByAuthorIn(Collection<Feature> authors);


    Page<Post> findAllByAuthor(Feature author, Pageable pageable);


    Page<Post> findAllByAuthorIn(Collection<Feature> authors, Pageable pageable);


    Page<Post> findAll(Pageable pageable);

    Page<Post> findAllByAuthorInAndTypeGreaterThanEqual(Collection<Feature> authors, Integer type, Pageable pageable);

    Page<Post> findAllByAuthorAndTypeGreaterThan(Feature authors, Integer type, Pageable pageable);

    Page<Post> findAllByType(Integer type, Pageable pageable);

    Post save(Post post);

    Post saveAndFlush(Post post);

}
