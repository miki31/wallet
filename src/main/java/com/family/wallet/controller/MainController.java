package com.family.wallet.controller;

import com.family.wallet.model.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MainController {
//    test

    @GetMapping("/models")
    public List<Model> hello() {
        List<Model> models = new ArrayList<>();

        Model model = new Model();
        int id = 0;

        model.setId(++id);
        model.setAge(23);
        model.setName("Hello Misha");
        models.add(model);

        model = new Model();
        model.setId(++id);
        model.setAge(25);
        model.setName("Hello Misha");
        models.add(model);

        model = new Model();
        model.setId(++id);
        model.setAge(26);
        model.setName("Hello Misha");
        models.add(model);

        return models;
    }

}
