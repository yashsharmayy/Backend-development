const { check, body, validationResult } = require("express-validator");
const User = require("../models/user");

exports.getLogin = (req, res) => {
  res.render("Auth/Login", {
    title: "Airbnb Home",
    isLoggedIn: req.session.isLoggedIn,
  });
};

exports.postlogin = (req, res) => {
  console.log(req.body);
  req.session.isLoggedIn = true;
  // res.cookie("isLoggedIn", true);
  // req.isLoggedIn = true;
  res.redirect("/");
};
exports.postlogout = (req, res) => {
  // console.log(req.body);
  // req.isLoggedIn = true;
  res.cookie("isLoggedIn", false);
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return res.send("Error while logging out");
    }
  });

  res.redirect("/login");
};

//sign up

exports.getsignup = (req, res) => {
  res.render("Auth/signup", {
    title: "Sign up page",
    errors: [],
    oldInput: {},
    isLoggedIn: req.session.isLoggedIn || false,
  });
};

exports.postsignup = [
  // First Name
  check("firstName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("First name can contain only letters."),

  // Last Name
  check("lastName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Last name can contain only letters."),

  // Email
  check("email")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email.")
    .normalizeEmail(),

  // Password
  check("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters.")
    .matches(/[A-Z]/)
    .withMessage("Password must contain one uppercase letter.")
    .matches(/[a-z]/)
    .withMessage("Password must contain one lowercase letter.")
    .matches(/[0-9]/)
    .withMessage("Password must contain one number.")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain one special character."),

  // Confirm Password
  body("confirmPassword")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match.");
      }
      return true;
    }),

  // Controller
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).render("Auth/signup", {
        title: "Sign Up",
        errors: errors.array(),
        oldInput: req.body,
        isLoggedIn: false,
      });
    }

    const { firstName, lastName, email, password } = req.body;

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    newUser
      .save()
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => {
        console.log(err);
        res.send("Something went wrong");
      });
  },
];
