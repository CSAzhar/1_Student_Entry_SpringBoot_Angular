package com.daram.app1.entity;

import java.sql.Blob;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer empId;
	private String name;
	private String email;
	private Integer age;
	private String gender;
	private Integer mobile;
	private  String state;
	private String password;
	@Lob
	@Column(columnDefinition = "BLOB")
	private byte[] profilePhoto;
	private Integer activeStatus;    //0 inactive, 1 active
	private String verificationCode;
	
	
}
