package pracownia.introduction;

import org.apache.log4j.Logger;

public class HelloWorld {

    public static void main(String [ ] args) {
        Logger logger = Logger.getLogger(HelloWorld.class);
        logger.info("message");
        System.out.println("Hello World");
    }
}