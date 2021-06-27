package junit.test;

import static org.junit.jupiter.api.Assertions.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import customer.CustomerBean;
import util.Close;
import util.DBconnection;

class CustomerTest {
	public static void main(String[] args) {
		String id = "das";
		String pw = "1111";
		System.out.println(login(id,pw));
	}

	@Test
	public static boolean login(String customerEmail, String customerPw) {
		String SQL = "SELECT customerPw FROM customer WHERE customerEmail = ?";
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		try {
			conn = DBconnection.getConnection();
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, customerEmail);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				if(rs.getString(1).equals(customerPw)) {//디비에서 추출한 값과 유저가 입력한 비번과 일치하면
					return true;
				}
			}
		}catch (Exception e) {
			throw new RuntimeException(e.getMessage());
		}finally {
		// Connection, PreparedStatement를 닫는다.
			try {
				Close.close(conn, pstmt, rs);
			} catch (Exception e) {
				throw new RuntimeException(e.getMessage());
			}
		} // end try~catch
		return false;
	}
}
