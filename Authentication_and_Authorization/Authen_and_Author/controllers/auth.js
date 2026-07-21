const { check, body, validationResult } = require("express-validator");
const user = require("../models/user");
const bcrypt = require("bcrypt");

exports.getLogin = (req, res) => {
  res.render("Auth/Login", {
    title: "Login",
    isLoggedIn: req.session.isLoggedIn || false,
    errors: [],
    oldInput: {},
    user: {},
  });
};

exports.postlogin = (req, res) => {
  const { email, password } = req.body;

  user
    .findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(422).render("Auth/Login", {
          title: "Login",
          isLoggedIn: false,
          errors: [{ msg: "user does not exist." }],
          oldInput: { email },
          user: {},
        });
      }

      return bcrypt.compare(password, user.password).then((doMatch) => {
        if (!doMatch) {
          return res.status(422).render("Auth/Login", {
            title: "Login",
            isLoggedIn: false,
            errors: [{ msg: "Invalid password." }],
            oldInput: { email },
          });
        }

        req.session.isLoggedIn = true;
        req.session.user = user._id;
        req.session.save((err) => {
          if (err) {
            console.log(err);
          }
          res.redirect("/");
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Something went wrong");
    });
};
exports.postlogout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return res.send("Error while logging out");
    }

    res.redirect("/login");
  });
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

  // Last Name  Yash@1234
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
    console.log(errors.array());
    if (!errors.isEmpty()) {
      return res.status(422).render("Auth/signup", {
        title: "Sign Up",
        errors: errors.array(),
        oldInput: req.body,
        isLoggedIn: false,
      });
    }
    const { firstName, lastName, email, password } = req.body;

    bcrypt
      .hash(password, 12)
      .then((hashedPassword) => {
        const user = new user({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        });
        return user.save();
      })
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => {
        console.log(err);
        res.redirect("/");
      });
  },
];
