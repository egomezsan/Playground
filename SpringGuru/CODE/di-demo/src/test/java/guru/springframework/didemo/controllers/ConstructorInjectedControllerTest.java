package guru.springframework.didemo.controllers;

import guru.springframework.didemo.services.GreetingServiceImpl;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ConstructorInjectedControllerTest {

    private ConstructorInjectedController contructorInjectedController;

    @Before
    public void setUp()
    {
        this.contructorInjectedController = new ConstructorInjectedController(new GreetingServiceImpl());
    }

    @Test
    public void sayHelloConstructorTest()
    {
        assertEquals(GreetingServiceImpl.HELLO_GURUS,this.contructorInjectedController.sayHello());
    }

}
