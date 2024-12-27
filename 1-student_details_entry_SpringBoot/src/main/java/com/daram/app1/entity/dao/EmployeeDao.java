package com.daram.app1.entity.dao;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class EmployeeDao {

	private String name;
	private String email;
	private String message;
}
