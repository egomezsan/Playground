package guru.springframework.spring5webapp.service;

import guru.springframework.spring5webapp.entity.Author;
import guru.springframework.spring5webapp.repository.AuthorRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class AuthorServiceImpl implements AuthorService {

    private AuthorRepository authorRepository;

    @Override
    public List<Author> getAuthors() {
        return authorRepository.findAll();
    }
}
