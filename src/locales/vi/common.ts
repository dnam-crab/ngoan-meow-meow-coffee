const viCommon = {
  auth: {
    loginTitle: "Đăng nhập",
    email: "Email",
    password: "Mật khẩu",
    submit: "Đăng nhập",
  },
  errors: {
    title: "Lỗi",
    network: "Lỗi mạng. Kiểm tra kết nối rồi thử lại nhé.",
    timeout: "Quá thời gian chờ. Thử lại nhé.",
    unauthorized: "Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.",
    forbidden: "Bạn không có quyền thực hiện thao tác này.",
    notFound: "Không tìm thấy.",
    conflict: "Dữ liệu bị xung đột. Tải lại rồi thử lại nhé.",
    tooManyRequests: "Bạn thao tác quá nhanh. Chậm lại một chút nha.",
    server: "Lỗi máy chủ. Thử lại sau nhé.",
    badRequest: "Yêu cầu không hợp lệ.",
    validation: "Một số trường chưa hợp lệ.",
    invalidCredentials: "Sai email hoặc mật khẩu",
    unknown: "Có lỗi xảy ra",
  },
} as const;

export default viCommon;
