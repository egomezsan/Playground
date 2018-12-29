package guru.springframework.spring5webapp.repository;

import guru.springframework.spring5webapp.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Book Repository for CRUD operations on entity
 * @author eduardo.gomez
 */
public interface BookRepository extends JpaRepository<Book,Long> {
}
