package guru.springframework.spring5webapp.controller;

import guru.springframework.spring5webapp.service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Book controller class
 * @author eduardo.gomez
 */
@AllArgsConstructor
@Controller
public class BookController {

    private BookService service;

    @RequestMapping("/books")
    public String getBooks(Model model)
    {
        model.addAttribute("books",service.getBooks());
        return "books";
    }
}
