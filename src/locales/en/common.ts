const enCommon = {
  auth: {
    loginTitle: "Login",
    email: "Email",
    password: "Password",
    submit: "Sign in",
  },
  errors: {
    title: "Error",
    network: "Network error. Please check your connection.",
    timeout: "Request timed out. Please try again.",
    unauthorized: "Your session expired. Please log in again.",
    forbidden: "You don't have permission to do that.",
    notFound: "Not found.",
    conflict: "Conflict. Please refresh and try again.",
    tooManyRequests: "Too many requests. Please slow down.",
    server: "Server error. Please try again later.",
    badRequest: "Bad request.",
    validation: "Some fields are invalid.",
    invalidCredentials: "Invalid email or password",
    unknown: "Something went wrong",
  },
} as const;

export default enCommon;
