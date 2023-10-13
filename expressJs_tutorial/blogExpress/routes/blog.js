const express = require("express");
const router = express.Router();
const path = require("path");
const blogs = require("../Data/Datablogs");

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../Views/01index.html"));
  res.render("home");
});

router.get("/blog", (req, res) => {
  // blogs.forEach((e) => {
  //   console.log(e.title);
  // });
  // res.sendFile(path.join(__dirname, "../Views/02blogHome.html"));
  res.render("blogHome", {
    blogs: blogs,
  });
});

router.get("/blogpost/:slug", (req, res) => {
  const myblog = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });
  // console.log(myblog);
  res.render("blogPage", {
    title: myblog[0].title,
    content: myblog[0].content,
  });
  // res.sendFile(path.join(__dirname, "../Views/03blogPage.html"));
});
module.exports = router;
