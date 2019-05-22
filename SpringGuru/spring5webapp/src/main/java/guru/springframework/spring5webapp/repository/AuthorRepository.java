package guru.springframework.spring5webapp.repository;

import guru.springframework.spring5webapp.entity.Author;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Author Repository for CRUD operations on entity
 * @author eduardo.gomez
 */
public interface AuthorRepository extends JpaRepository<Author,Long> {
}
