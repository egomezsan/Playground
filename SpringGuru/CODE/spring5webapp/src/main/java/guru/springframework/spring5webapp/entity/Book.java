package guru.springframework.spring5webapp.entity;

import lombok.*;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Book model class
 * @author eduardo.gomez
 */
@Entity
@NoArgsConstructor
@RequiredArgsConstructor
@EqualsAndHashCode(exclude = {"title","isbn","publisher","authors"}, doNotUseGetters = true)
@Data
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NonNull
    private String title;

    @NonNull
    private String isbn;

    @NonNull
    @OneToOne
    private Publisher publisher;

    @ManyToMany
    @JoinTable(name = "author_book",joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "author_id"))
    private Set<Author> authors = new HashSet<>();

    public void addAuthor(Author author){
        this.authors.add(author);
        author.getBooks().add(this);
    }

}
