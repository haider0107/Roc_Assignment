import jwt from "jsonwebtoken";

const privateKey = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
  try {
    // Fetch the token from headers
    const token = req.headers["auth-token"];

    // verify the token
    const payload = jwt.verify(token, privateKey);

    // set the payload in req object
    req.payload = payload;

    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Invalid token / token expired" });
  }
}

export default authMiddleware;
