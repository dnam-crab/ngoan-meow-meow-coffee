const viCommon = {
  auth: {
    loginTitle: "Đăng nhập",
    email: "Email",
    password: "Mật khẩu",
    submit: "Đăng nhập",
  },
  errors: {
    emailRequired: "Email không được để trống",
    emailInvalid: "Email không hợp lệ",
    passwordRequired: "Mật khẩu không được để trống",
    passwordMin: "Mật khẩu tối thiểu {{min}} ký tự",

    network: "Không kết nối được tới server",
    unauthorized: "Bạn chưa đăng nhập",
    forbidden: "Bạn không có quyền",
    server: "Lỗi hệ thống, thử lại sau",
    unknown: "Có lỗi xảy ra",
  },
} as const;

export default viCommon;
export const __ping = "ok";
