package com.daram.app1.entity.dao;

import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.NoArgsConstructor;



@Component
@Data
@NoArgsConstructor
public class LoginDao {
	
	private Integer empId;
	private String loginStatus;
	private String message;
	private String name;
	private String email;
	private Integer age;
	private String gender;
	private Integer mobile;
	private  String state;
	private byte[] profilePhoto;

}
