const enCommon = {
  auth: {
    loginTitle: "Login",
    email: "Email",
    password: "Password",
    submit: "Sign in",
  },
  errors: {
    emailRequired: "Email is required",
    emailInvalid: "Invalid email",
    passwordRequired: "Password is required",
    passwordMin: "Password must be at least {{min}} characters",

    network: "Cannot reach server",
    unauthorized: "You are not logged in",
    forbidden: "You don't have permission",
    server: "Server error, please try again later",
    unknown: "Something went wrong",
  },
} as const;

export default enCommon;
