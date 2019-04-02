package tk.tnicy.matchbox.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.tnicy.matchbox.domain.UserInfoRepository;

@Service
public class UserInfoService {
    @Autowired
    UserInfoRepository repository;


}
