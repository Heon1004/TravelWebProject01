package customer;

public class CustomerBean {
	private String customerNum;
	private String customerEmail;
	private String customerPw;
	private boolean availableEmail;
	private String regDate;
	
	
	
	public CustomerBean(String customerNum, String customerEmail, String customerPw, boolean availableEmail,
			String regDate) {
		this.customerNum = customerNum;
		this.customerEmail = customerEmail;
		this.customerPw = customerPw;
		this.availableEmail = availableEmail;
		this.regDate = regDate;
	}
	public String getCustomerNum() {
		return customerNum;
	}
	public void setCustomerNum(String customerNum) {
		this.customerNum = customerNum;
	}
	public String getCustomerEmail() {
		return customerEmail;
	}
	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}
	public String getCustomerPw() {
		return customerPw;
	}
	public void setCustomerPw(String customerPw) {
		this.customerPw = customerPw;
	}
	public boolean isAvailableEmail() {
		return availableEmail;
	}
	public void setAvailableEmail(boolean availableEmail) {
		this.availableEmail = availableEmail;
	}
	public String getRegDate() {
		return regDate;
	}
	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}
	
	
}
