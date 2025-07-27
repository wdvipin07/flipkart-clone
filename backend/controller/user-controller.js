import User from "../models/User.js";
import passport from "passport";

export const signupControlller = async (req, res, next) => {
  try {
    let { username, email, mobile, password } = req.body;
    const newUser = new User({ username, email, mobile });
    const registerUser = await User.register(newUser, password);
    // Signup and just login
    req.login(registerUser, (err) => {
      if (err) return next(err);
      res.status(200).json({ message: "Registration & Login Successful" });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Login Controller for user Login in the page
export const loginController = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json({ message: err.message });
    if (!user) {
      return res
        .status(401)
        .json({ message: info?.message || "Invalid credentials" });
    }
    req.logIn(user, (err) => {
      if (err) return res.status(500).json({ message: err.message });
      return res.json({ message: "Login successful!" });
    });
  })(req, res, next);
};

//User Logout controller
export const logoutController = (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.clearCookie("connect.sid"); // session cookie ka naam
      res.json({ message: "Logged out" });
    });
  });
};

//auth Controller
export const authController = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user }); //  React me yeh use hoga
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
};
