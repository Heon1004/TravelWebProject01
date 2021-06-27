package customer.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import action.Action;
import action.ActionForward;
import customer.CustomerBean;
import customer.CustomerDAO;
import util.SHA256;

public class CustomerJoinAction implements Action {

	@Override
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		request.setCharacterEncoding("UTF-8");
		ActionForward forward = new ActionForward();
		CustomerBean customer = new CustomerBean();
		CustomerDAO dao = new CustomerDAO();
		String email = request.getParameter("CustomerEmail");
		String pw = request.getParameter("CustomerPw");

		if(!email.equals("") && email != null && !pw.equals("") && pw != null) {
		email = SHA256.getEncrypt(email);
		customer.setCustomerNum(dao.getNum());
		customer.setCustomerEmail(email);
		customer.setCustomerPw(pw);
		dao.join(customer);
		
		forward.setRedirect(true);
		forward.setPath("/index.jsp");
		}else {
			String msg = "記入してない所があります。";
			request.setAttribute("msg", msg);
		}
		System.out.println(forward.isRedirect() + "Action");
		return forward;
	}
}
