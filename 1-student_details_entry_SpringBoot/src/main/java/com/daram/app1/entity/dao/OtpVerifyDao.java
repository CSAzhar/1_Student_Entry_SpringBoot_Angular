package com.daram.app1.entity.dao;

import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@NoArgsConstructor
public class OtpVerifyDao {
	
	private String email;
	private String message;
	private String status;
	
}
