const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  let auth = req.headers.authorization;

  console.log(auth.split(" ")[1]);

  if (auth) {
    let authToken = auth.split(" ")[1];
    jwt.verify(authToken, "Secret_123", (err, user) => {
      if (err) {
        return res.sendStatus(401);
      }
      req.body.user = user;
      next();
    });
  } else {
    res.status(401).json({
      message: "user not autorized",
    });
  }
};
