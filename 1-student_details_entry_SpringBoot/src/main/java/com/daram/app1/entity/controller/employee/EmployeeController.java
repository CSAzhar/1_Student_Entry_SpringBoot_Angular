package com.daram.app1.entity.controller.employee;

import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daram.app1.entity.Employee;
import com.daram.app1.entity.dao.EmployeeDao;
import com.daram.app1.entity.dao.LoginDao;
import com.daram.app1.entity.dao.OtpVerifyDao;
import com.daram.app1.entity.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("employee")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("saveEmployee")
	public ResponseEntity<EmployeeDao> saveEmployee(@RequestBody Employee employee){
		
		System.out.println("inside controller");
		System.out.println("this is object received"+employee);
		if (employee.getProfilePhoto() == null) {
	        employee.setProfilePhoto(new byte[0]); // Default empty photo
	    }
	    if (employee.getActiveStatus() == null) {
	        employee.setActiveStatus(0); // Default inactive
	    }
		return ResponseEntity.ok(employeeService.saveEmployee(employee));
		
	}
	
	@PostMapping("/verifyOtp")
	public ResponseEntity<OtpVerifyDao> verifyOtp(@RequestBody Map<String, String> request){
		String email = request.get("email");
		String otp = request.get("otp");
		System.out.println("aaya bhai"+ email+" "+otp);
		return ResponseEntity.ok(employeeService.verifyOtp(email, otp));
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<LoginDao> login(@RequestBody Map<String, String> request){
		String email = request.get("email");
		String password = request.get("password");
		return ResponseEntity.ok(employeeService.login(email, password));
		
	}

}
