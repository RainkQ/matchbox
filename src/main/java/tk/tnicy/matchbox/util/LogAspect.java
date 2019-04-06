package tk.tnicy.matchbox.util;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import javax.servlet.http.HttpSession;

@Aspect
@Component
public class LogAspect {

    @Pointcut(value = "@annotation(requireAuth) && args(session, model)", argNames = "requireAuth,session,model")
    public void logInRequired(RequireAuth requireAuth, HttpSession session, Model model) {

    }

    @Around(value = "logInRequired(requireAuth,session,model)", argNames = "joinPoint,requireAuth,session,model")
    public Object doAfterAdvice(ProceedingJoinPoint joinPoint, RequireAuth requireAuth, HttpSession session, Model model) throws Throwable {
        System.out.println("-------需要登陆------");

        if (session.getAttribute("user") == null) {
            session.setAttribute("logFailure", "请先登录");

            session.setAttribute("lastUrl", joinPoint.getSignature().getName());
            System.out.println(joinPoint.getSignature().getName());
            return "redirect:/logIn";
        }

        return joinPoint.proceed();
    }


}
