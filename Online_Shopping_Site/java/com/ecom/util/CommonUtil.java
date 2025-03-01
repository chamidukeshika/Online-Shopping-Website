package com.ecom.util;

import java.io.UnsupportedEncodingException;
import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import com.ecom.model.ProductOrder;
import com.ecom.model.UserDtls;
import com.ecom.service.UserService;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpServletRequest;

@Component
public class CommonUtil {

	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	private UserService userService;

	public Boolean sendMail(String url, String recipientEmail, String recieverName)
			throws UnsupportedEncodingException, MessagingException {

		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		helper.setFrom("chamidukeshikaz@gmail.com", "Shopping App Support Team");
		helper.setTo(recipientEmail);

		String content = "<html>" + "<head>" + "<style>"
				+ "    body { font-family: Arial, sans-serif; color: #333333; }"
				+ "    .email-header { background-color: #4CAF50; color: white; padding: 10px 20px; text-align: center; }"
				+ "    .email-body { margin: 20px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; }"
				+ "    .email-footer { margin-top: 20px; font-size: 12px; color: #888888; text-align: center; }"
				+ "    a { color: #4CAF50; text-decoration: none; font-weight: bold; }" + "</style>" + "</head>"
				+ "<body>" + "    <div class=\"email-header\">" + "        <h1>Password Reset Request</h1>"
				+ "    </div>" + "    <div class=\"email-body\">" + "        <p>Dear " + recieverName + ",</p>"
				+ "        <p>We received a request to reset your password for your <strong>Shopping App</strong> account. If you made this request, you can reset your password by clicking the button below:</p>"
				+ "        <p style=\"text-align: center;\">" + "            <a href=\"" + url
				+ "\" style=\"background-color: #4CAF50; color: white; padding: 10px 20px; border-radius: 5px; display: inline-block;\">Reset Password</a>"
				+ "        </p>"
				+ "        <p>If you did not request to reset your password, please ignore this email. Your account is safe, and no changes have been made.</p>"
				+ "        <p>For any assistance, please contact our support team at <a href=\"mailto:support@shoppingapp.com\">support@shoppingapp.com</a>.</p>"
				+ "        <p>Thank you,<br>The Shopping App Team</p>" + "    </div>"
				+ "    <div class=\"email-footer\">"
				+ "        <p>This email was sent to you because a password reset request was initiated for your account. If you believe this was a mistake, please disregard this email.</p>"
				+ "        <p>&copy; 2025 Shopping App. All rights reserved.</p>" + "    </div>" + "</body>"
				+ "</html>";

		helper.setSubject("Reset Your Shopping App Password");
		helper.setText(content, true);
		mailSender.send(message);

		return true;
	}

	public static String generateUrl(HttpServletRequest request) {

		// http://localhost:8080/forgot-password
		String siteUrl = request.getRequestURL().toString();

		return siteUrl.replace(request.getServletPath(), "");

	}

	String msg = null;

	public Boolean sendMailForProductOrder(ProductOrder order, String status) throws Exception {

		msg = "<div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; background-color: #f4f4f9;\">"
				+ "<div style=\"max-width: 600px; margin: auto; background: #ffffff; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 10px; overflow: hidden;\">"
				+ "<div style=\"padding: 20px; background-color: #5b9bd5; color: white; text-align: center;\">"
				+ "    <h2 style=\"margin: 0; font-size: 24px;\">Order Status Update</h2>" + "</div>"
				+ "<div style=\"padding: 20px;\">"
				+ "    <p style=\"font-size: 18px;\">Dear <strong>[[name]]</strong>,</p>"
				+ "    <p>We are delighted to share the status of your recent order:</p><p>ID : [[orderId]]</p>"
				+ "    <div style=\"background: #e7f5e9; padding: 20px; border-radius: 8px; margin-top: 20px;\">"
				+ "        <div style=\"margin-bottom: 10px; color: #4caf50; font-size: 16px;\">"
				+ "            <strong>Status:</strong> [[orderStatus]]" + "        </div>"
				+ "        <div style=\"margin-bottom: 10px;\">"
				+ "            <strong>Product Name:</strong> [[productName]]" + "        </div>"
				+ "        <div style=\"margin-bottom: 10px; background-color: #f9f9f9; padding: 10px; border-radius: 6px;\">"
				+ "            <strong>Category:</strong> [[category]]" + "        </div>"
				+ "        <div style=\"margin-bottom: 10px;\">" + "            <strong>Quantity:</strong> [[quantity]]"
				+ "        </div>"
				+ "        <div style=\"margin-bottom: 10px; background-color: #f9f9f9; padding: 10px; border-radius: 6px;\">"
				+ "            <strong>Total Order Cost:</strong> [[price]]" + "        </div>"
				+ "        <div style=\"margin-bottom: 10px;\">"
				+ "            <strong>Payment Type:</strong> [[paymentType]]" + "        </div>" + "    </div>"
				+ "    <p style=\"margin-top: 20px;\">If you have any questions, feel free to contact our support team. We're here to help!</p>"
				+ "    <p>Thank you for choosing us. We appreciate your business!</p>"
				+ "    <div style=\"text-align: center; margin-top: 20px;\">"
				+ "        <a href=\"https://support.shoppingapp.com\" style=\"display: inline-block; background: #5b9bd5; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px;\">Contact Support</a>"
				+ "    </div>" + "</div>"
				+ "<div style=\"padding: 10px; text-align: center; background: #f1f1f1; color: #888; font-size: 14px;\">"
				+ "    Shopping App Support Team &copy; 2025" + "</div>" + "</div>" + "</div>";

		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, true); // Set true for multipart email

		helper.setFrom("chamidukeshikaz@gmail.com", "Shopping App Support Team");
		helper.setTo(order.getOrderAddress().getEmail());

		Double Total = (order.getPrice()) * (order.getQuantity());

		// Replace placeholders with actual values
		msg = msg.replace("[[name]]", order.getOrderAddress().getFirstName());
		msg = msg.replace("[[orderId]]", order.getOrderId());
		msg = msg.replace("[[orderStatus]]", status);
		msg = msg.replace("[[productName]]", order.getProduct().getTitle());
		msg = msg.replace("[[category]]", order.getProduct().getCategory());
		msg = msg.replace("[[quantity]]", order.getQuantity().toString());
		msg = msg.replace("[[price]]", Total.toString());
		msg = msg.replace("[[paymentType]]", order.getPaymentType());

		helper.setSubject("Product Order Status");
		helper.setText(msg, true); // true for HTML content
		mailSender.send(message);

		return true;
	}

	public UserDtls getLoggedInUserDetails(Principal p) {
		String email = p.getName();
		UserDtls userDtls = userService.getUserByEmail(email);
		return userDtls;
	}

}

// 34min