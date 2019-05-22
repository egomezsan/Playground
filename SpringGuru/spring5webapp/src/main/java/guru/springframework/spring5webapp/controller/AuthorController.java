package guru.springframework.spring5webapp.controller;

import guru.springframework.spring5webapp.service.AuthorService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@AllArgsConstructor
public class AuthorController {

    private AuthorService service;

    @RequestMapping("/authors")
    public String getAuthors(Model model){
        model.addAttribute("authors",service.getAuthors());
        return "authors";
    }
}
