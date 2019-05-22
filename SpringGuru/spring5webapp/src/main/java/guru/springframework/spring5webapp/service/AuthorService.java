package guru.springframework.spring5webapp.service;

import guru.springframework.spring5webapp.entity.Author;
import java.util.List;

public interface AuthorService {
    public List<Author> getAuthors();
}
