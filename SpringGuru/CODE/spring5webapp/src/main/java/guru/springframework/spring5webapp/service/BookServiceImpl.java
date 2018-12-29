package guru.springframework.spring5webapp.service;

import guru.springframework.spring5webapp.entity.Book;
import guru.springframework.spring5webapp.repository.BookRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BookServiceImpl implements BookService {

    private BookRepository bookRepository;

    @Override
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }
}
