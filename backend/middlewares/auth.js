import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
<<<<<<< HEAD
    const token = req.headers["authorization"]?.split(" ")[1];
=======
    const token = req.headers["authorization"]?.split(" ")[1]; // Get the token from Authorization header
>>>>>>> 549c5bf (Admin authentication added)

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
      }
<<<<<<< HEAD
      req.user = decoded;
=======
      req.user = decoded; // Attach user info to request object
>>>>>>> 549c5bf (Admin authentication added)
      next();
    });
  };