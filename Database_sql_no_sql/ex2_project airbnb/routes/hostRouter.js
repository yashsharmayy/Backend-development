//Core module
const path = require("path");

//external module
const express = require("express");

//local module
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil");
const storeController = require("../controllers/store");
const hostController = require("../controllers/host");

hostRouter.get("/add-home", hostController.getAddhomepage);
hostRouter.post("/add-home", hostController.postAddhomepage);
hostRouter.get("/admin-home-list", hostController.AdminHomeListrouter);
hostRouter.get("/edit-home/:homeId", hostController.geteditpage);
hostRouter.post("/edit-home/:homeId", hostController.posteditpage);
hostRouter.post("/delete-home/:homeId", hostController.postdeletepage);

// hostRouter.get("/add-home", (req, res, next) => {
//   // res.sendFile(path.join(__dirname, "../", "pages", "addHome.html"));
//   // res.sendFile(path.join(rootDir, "views", "addHome.html"));
//   res.render("addHome", {
//     title: "registration form",
//   });
// });

// hostRouter.post("/add-home", (req, res, next) => {
//   console.log("Home registration successfuly", req.body, req.body.name);
//   registrationForm.push({ userName: req.body.name });

//   // res.sendFile(path.join(__dirname, "../", "pages", "success.html"));
//   // res.sendFile(path.join(rootDir, "views", "success.html"));
//   res.render("success", {
//     title: "success msg",
//   });
// });

// exports.hostRouter = hostRouter;
module.exports = hostRouter;
