const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    // We want to logout
    req.logout();
    res.redirect("/");

    // To confirm a logout
    res.send(req.user);

  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
