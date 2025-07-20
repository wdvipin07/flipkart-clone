export const isLoggedIn = (req, res, next) => {
  console.log("Checking if user is authenticated...");
  console.log("User session:", req.user); // Should show the user object if authenticated
  console.log(
    "IsAuthenticated:",
    req.isAuthenticated ? req.isAuthenticated() : "No function"
  );

  if (!req.isAuthenticated() || !req.user) {
    return res
      .status(401)
      .json({ message: "You must be logged in to access this route" });
  }
  next();
};
