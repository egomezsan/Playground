package guru.springframework.spring5webapp.service;

import guru.springframework.spring5webapp.entity.Book;
import java.util.List;

public interface BookService {

    List<Book> getBooks();
}
