package guru.springframework.spring5webapp.bootstrap;

import guru.springframework.spring5webapp.entity.Author;
import guru.springframework.spring5webapp.entity.Book;
import guru.springframework.spring5webapp.entity.Publisher;
import guru.springframework.spring5webapp.repository.AuthorRepository;
import guru.springframework.spring5webapp.repository.BookRepository;
import guru.springframework.spring5webapp.repository.PublisherRepository;
import lombok.AllArgsConstructor;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

/**
 * Bootstrap data initializer class for h2 in memory DB
 * @author eduardo.gomez
 */
@Component
@AllArgsConstructor
public class DevBootstrap implements ApplicationListener<ContextRefreshedEvent> {

    private AuthorRepository authorRepository;
    private BookRepository bookRepository;
    private PublisherRepository publisherRepository;

    private void initData()
    {
        // Eric
        Publisher collins = new Publisher("Harper Collins","Harpers address");
        publisherRepository.save(collins);

        Author eric = new Author("Eric","Evans");
        Book ddd = new Book("Domain Driven Design","1234",collins);
        eric.addBook(ddd);

        authorRepository.save(eric);
        bookRepository.save(ddd);

        // Rod
        Publisher worx = new Publisher("Worx","Worx address");
        publisherRepository.save(worx);

        Author rod = new Author("Rod","Johnson");
        Book noEJB = new Book("J2EE Development without EJB","23444",worx);
        rod.addBook(noEJB);

        authorRepository.save(rod);
        bookRepository.save(noEJB);
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        initData();
    }
}
