//Gia tri khoi tao ban dau
const initialState = {
  isLoggedIn: false,
  token: null
};
// isLoggedIn: cho biet nguoi dung da dang nhap hay chua
//token: token cua nguoi dung sau khi dang nhap thanh cong

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
