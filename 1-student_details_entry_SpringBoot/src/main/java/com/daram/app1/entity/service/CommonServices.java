package com.daram.app1.entity.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import jakarta.mail.internet.MimeMessage;
import jakarta.persistence.Entity;

@Component
public class CommonServices {

	public String generateVerificationCode() {
		String words = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		StringBuffer sb = new StringBuffer();
		Random random = new Random();
		for (int i = 0; i <= 10; i++) {
			sb.append(words.charAt((int) (random.nextDouble() * words.length())));
		}
		return sb.toString();
	}
	
	@Autowired
	private JavaMailSender javaMailSender;

	public String sendVerifivationCodeEmail(String email, String verificationCode) {

		System.out.println("message invoked mail class");

		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, "utf-8");

		StringBuffer htmlMsg = new StringBuffer();
		htmlMsg.append("<h1 style='color:red' align='center'>This is your verification code kindly keep dont share</h1>");
		htmlMsg.append("<h2 style='color:orange' align='center'>Verification code is -" +verificationCode+"</h2>");
		
		String ans ="Success mail sent";
		try {
			messageHelper.setText(htmlMsg.toString(), true);
			messageHelper.setTo(email);
			messageHelper.setSubject("Emaployee activation code");
			// messageHelper.setFrom("");

			javaMailSender.send(mimeMessage);
			System.out.println("Mail Sent mail class");
			
		}catch(Exception e) {
			System.out.println("Exception occured while sending mail");
			ans="Exception Occured while sending mail";
		}
		return ans;
	}

}
