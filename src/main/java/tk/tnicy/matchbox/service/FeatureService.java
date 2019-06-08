package tk.tnicy.matchbox.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import tk.tnicy.matchbox.domain.Feature;
import tk.tnicy.matchbox.domain.FeatureRepository;

import java.util.Collection;
import java.util.List;

@Service
public class FeatureService {
    @Autowired
    FeatureRepository featureRepository;

    public List<Feature> findAllByIdIn(Collection<Long> id, Integer page, Integer size, Sort sort) {
        PageRequest pr = new PageRequest(page, size, sort);
        return featureRepository.findAllByIdIn(id, pr).getContent();
    }

}
