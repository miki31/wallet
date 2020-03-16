package com.family.wallet.controller;

import com.family.wallet.model.User;
import com.family.wallet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/all")
    public List<User> findAll() {
        return userService.findAll();
    }

    @PostMapping()
    public User save(@RequestBody User user){
        return userService.save(user);
    }

}
