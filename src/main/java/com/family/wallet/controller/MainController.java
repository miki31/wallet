package com.family.wallet.controller;

import com.family.wallet.model.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MainController {
//    test

    @GetMapping("/models")
    public List<Model> hello() {
        List<Model> models = new ArrayList<>();

        Model model = new Model();

        model.setAge(23);
        model.setName("Hello Misha");
        models.add(model);
        model.setAge(25);
        model.setName("Hello Misha");
        models.add(model);
        model.setAge(26);
        model.setName("Hello Misha");
        models.add(model);

        return models;
    }

}
