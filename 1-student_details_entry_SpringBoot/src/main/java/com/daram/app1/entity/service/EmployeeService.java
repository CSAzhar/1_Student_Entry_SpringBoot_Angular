package com.daram.app1.entity.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.daram.app1.entity.Employee;
import com.daram.app1.entity.dao.EmployeeDao;
import com.daram.app1.entity.dao.LoginDao;
import com.daram.app1.entity.dao.OtpVerifyDao;
import com.daram.app1.entity.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private CommonServices commonServices;
	
	public EmployeeDao saveEmployee(Employee employee) {
		
		String verificationCode = commonServices.generateVerificationCode();
		employee.setVerificationCode(verificationCode);
		
		commonServices.sendVerifivationCodeEmail(employee.getEmail(), verificationCode);
		
		Employee savedEmployee = employeeRepository.save(employee);
		EmployeeDao returnedEmployeeData = new EmployeeDao();
		returnedEmployeeData.setName(savedEmployee.getName());
		returnedEmployeeData.setEmail(savedEmployee.getEmail());
		returnedEmployeeData.setMessage("Employee- "+savedEmployee.getName()+" is saved Verify Password to Activate");
		
		return returnedEmployeeData;
	}
	
	public OtpVerifyDao verifyOtp(String email, String otp) {
		
		Employee dbEmployee = employeeRepository.findByEmail(email);
		OtpVerifyDao otpDao = new OtpVerifyDao();
		otpDao.setEmail(email);
		
		if(dbEmployee.getVerificationCode().equals(otp)) {
			dbEmployee.setActiveStatus(1);
			employeeRepository.save(dbEmployee);
			otpDao.setMessage("OtpVerification Successfull for email"+ email);
			otpDao.setStatus("success");
		}else {
			otpDao.setMessage("Wrong otp entered");
			otpDao.setStatus("failed");
		}
		return otpDao;
		
	}
	
	public LoginDao login(String email, String password) {
		Employee dbEmployee = employeeRepository.findByEmail(email);
		LoginDao sendLoginDao = new LoginDao();
		if(dbEmployee == null) {
			sendLoginDao.setMessage("User Does Not Exists, Kindly Register to Login");
			sendLoginDao.setLoginStatus("failed");
			return sendLoginDao;
		}else {
			if(dbEmployee.getPassword().equals(password)) {
				sendLoginDao.setMessage("Login SuccessFul");
				sendLoginDao.setLoginStatus("success");
				sendLoginDao.setName(dbEmployee.getName());
				sendLoginDao.setEmail(dbEmployee.getEmail());
				sendLoginDao.setAge(dbEmployee.getAge());
				sendLoginDao.setEmpId(dbEmployee.getEmpId());
				sendLoginDao.setGender(dbEmployee.getGender());
				sendLoginDao.setMobile(dbEmployee.getMobile());
				sendLoginDao.setState(dbEmployee.getState());
				sendLoginDao.setProfilePhoto(dbEmployee.getProfilePhoto());
				return sendLoginDao;
			}else {
				sendLoginDao.setMessage("User Login Failed, Kindly Enter Correct Password");
				sendLoginDao.setLoginStatus("failed");
				return sendLoginDao;
			}
			
		}
		
	}
	
	

}






