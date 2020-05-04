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

        int id = 0;
        Model model;

        model = new Model();
        model.setId(++id);
        model.setAge(28);
        model.setName("Misha");
        models.add(model);

        model = new Model();
        model.setId(++id);
        model.setAge(25);
        model.setName("Marichka");
        models.add(model);

        model = new Model();
        model.setId(++id);
        model.setAge(44);
        model.setName("Kolya");
        models.add(model);

        return models;
    }

}
