// const express = require("express");
// const router = express.Router();

// router.get("/all-questions", (req, res) => {
//   res.send("all questions");
// });

// module.exports = router;





const express = require("express");
const router = express.Router();
const {
  postQuestion,
  allQuestion,
} = require("../controller/questionController");

router.post("/postquestions", postQuestion);

router.get("/all-questions", allQuestion);

module.exports = router;