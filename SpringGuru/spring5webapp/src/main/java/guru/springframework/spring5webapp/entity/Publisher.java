package guru.springframework.spring5webapp.entity;

import lombok.*;
import javax.persistence.*;

/**
 * Entity class for Publishers
 * @author eduardo.gomez
 */
@Entity
@NoArgsConstructor
@RequiredArgsConstructor
@EqualsAndHashCode(exclude = {"name","address"},doNotUseGetters = true)
@Data
public class Publisher {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NonNull
    private String name;

    @NonNull
    private String address;

}
