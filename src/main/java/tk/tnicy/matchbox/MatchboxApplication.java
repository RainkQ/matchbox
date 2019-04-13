package tk.tnicy.matchbox;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaAuditing
@EnableJpaRepositories
@EnableCaching
public class MatchboxApplication {

    public static void main(String[] args) {
        SpringApplication.run(MatchboxApplication.class, args);
    }


}
