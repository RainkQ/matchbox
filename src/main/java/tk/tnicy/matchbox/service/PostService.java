package tk.tnicy.matchbox.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import tk.tnicy.matchbox.domain.Feature;
import tk.tnicy.matchbox.domain.Post;
import tk.tnicy.matchbox.domain.PostRepository;

import java.util.List;

@Service
public class PostService {
    @Autowired
    PostRepository postRepository;


    //    @Cacheable(value = "posts", key = "#me", unless = "#result == null")
    public List<Post> getMyFollowPosts(Feature me) {
        return postRepository.findAllByAuthorIn(me.getFollows());
    }

    //    第page页 每页number个
//    @Cacheable(value = "posts", key = "#me+#page+#size+#sort", unless = "#result == null")
    public List<Post> getMyFollowPosts(Feature me, Integer page, Integer size, Sort sort) {
        PageRequest pr = new PageRequest(page, size, sort);
        return postRepository.findAllByAuthorInAndTypeGreaterThanEqual(me.getFollows(), 0, pr).getContent();
    }

    public List<Post> getAuthorsPublicPosts(Feature author, Integer page, Integer size, Sort sort) {
        PageRequest pr = new PageRequest(page, size, sort);
        return postRepository.findAllByAuthorAndTypeGreaterThan(author, 0, pr).getContent();
    }

    //    @Cacheable(value = "posts", key = "#author", unless = "#result == null")
    public List<Post> getPosts(Feature author) {
        return postRepository.findAllByAuthor(author);
    }


    //    @Cacheable(value = "posts", key = "#author+#page+#size+#sort", unless = "#result == null")
    public List<Post> getPostsByAuthorFollowed(Feature author, int page, int size, Sort sort) {
        PageRequest pr = new PageRequest(page, size, sort);
        return postRepository.findAllByAuthorAndTypeGreaterThan(author, -1, pr).getContent();
    }


    public List<Post> getAllPosts(int page, int size, Sort sort) {
        PageRequest pr = new PageRequest(page, size, sort);
        return postRepository.findAll(pr).getContent();
    }

    //    @Cacheable(value = "posts", key = "'publicPosts-' + #type.toString() +'-'+ #page.toString() +'-'+#size.toString()", unless = "#result == null")
    public List<Post> getAllPostsBytype(Integer type, Integer page, Integer size, Sort sort) {
        PageRequest pr = new PageRequest(page, size, sort);
        return postRepository.findAllByType(type, pr).getContent();
    }


    public Post save(Post post) {
        return postRepository.save(post);
    }

    public Post saveAndFlush(Post post) {
        return postRepository.saveAndFlush(post);
    }
}
