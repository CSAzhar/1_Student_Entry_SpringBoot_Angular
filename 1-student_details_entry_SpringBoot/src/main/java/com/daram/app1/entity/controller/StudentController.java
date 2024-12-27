package com.daram.app1.entity.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("student")
@CrossOrigin
public class StudentController {
	
	@GetMapping("/notify")
	public ResponseEntity<String> notifyMe(){
		System.out.println("Inside controller");
		return ResponseEntity.ok("ok called");
	}

}
