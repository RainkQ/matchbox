package tk.tnicy.matchbox;

import org.databene.contiperf.PerfTest;
import org.databene.contiperf.junit.ContiPerfRule;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import tk.tnicy.matchbox.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MatchboxApplicationTests {
    @Rule
    public ContiPerfRule i = new ContiPerfRule();
    @Autowired
    UserService userService;

    /**
     * 性能测试
     * 10万次查询，100个线程同时操作findAll方法
     */
    @Test
    @PerfTest(invocations = 1000, threads = 100)
    public void contextLoads() {

        userService.findAll();
        userService.findUserByUsername("AAA");
    }
}
