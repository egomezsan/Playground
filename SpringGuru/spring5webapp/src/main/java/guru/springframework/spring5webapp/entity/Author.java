package guru.springframework.spring5webapp.entity;

import lombok.*;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Model Author class
 * @author eduardo.gomez
 */
@Entity
@NoArgsConstructor
@RequiredArgsConstructor
@EqualsAndHashCode(exclude = {"firstName","lastName","books"},doNotUseGetters = true)
@ToString(exclude = "books")
@Data
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NonNull
    private String firstName;

    @NonNull
    private String lastName;

    @ManyToMany(mappedBy = "authors")
    private Set<Book> books = new HashSet<>();

    public void addBook(Book book){
        this.books.add(book);
        book.getAuthors().add(this);
    }
}
