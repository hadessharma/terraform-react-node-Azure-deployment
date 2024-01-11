//To check whether the requested user is logged in or not with use of token, in order to access user authorized routes.

// const admin = require("../firebase/index");
// const User = require("../models/user");

// exports.authCheck = async (req, res, next) => {
//   try {
//     const firebaseUser = await admin
//       .auth()
//       .verifyIdToken(req.headers.authtoken);
//     req.user = firebaseUser;
//     next();
//   } catch (err) {
//     console.log(err);
//     res.status(401).json({
//       error: "Invalid or expired token!",
//     });
//   }
// };
