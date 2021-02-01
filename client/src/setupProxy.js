const createProxyMiddleware = require("http-proxy-middleware");

// This is how the development environment can differentiate the express server vs. the 
// create-react-app server. The array represents the routes that will be forwareded to the target
// In production, this will not matter because this is all merged into one server
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};