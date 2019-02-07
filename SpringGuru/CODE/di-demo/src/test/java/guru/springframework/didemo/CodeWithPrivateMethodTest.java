package guru.springframework.didemo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.powermock.api.mockito.PowerMockito.doNothing;
import static org.powermock.api.mockito.PowerMockito.when;
import static org.powermock.api.support.membermodification.MemberMatcher.method;

@RunWith(PowerMockRunner.class)
@PrepareForTest(CodeWithPrivateMethod.class)
public class CodeWithPrivateMethodTest {
    @Test(expected = RuntimeException.class)
    public void when_gambling_is_true_then_always_explode() throws Exception {

        CodeWithPrivateMethod test = new CodeWithPrivateMethod();

        CodeWithPrivateMethod spy = PowerMockito.spy(test);


        when(spy, method(CodeWithPrivateMethod.class, "doTheGamble", String.class, Integer.class))
                .withArguments(anyString(), anyInt())
                .thenReturn(true);

        //doNothing().when(spy,"doTheGamble",anyString(), anyInt());

        spy.meaningfulPublicApi();
    }
}
