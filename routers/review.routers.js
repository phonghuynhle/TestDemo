const express = require("express");
const { Reviews } = require("../models");
const {
  createReview,
  deleteReview,
  getAllReview,
  updateReview,
  getFullReview,
} = require("../controllers/reviews.controllers");
const { authenticate } = require("../middlewares/authen/authenticate");
const { authorize } = require("../middlewares/authen/authorize");
const { checkExist } = require("../middlewares/validations/checkExist");
const { uploadImage } = require("../middlewares/upload/upload-image");
const ReviewRouter = express.Router();

ReviewRouter.post("/create", authenticate, uploadImage("review"), createReview);
ReviewRouter.get("/", getAllReview);
ReviewRouter.put("/:id", checkExist(Reviews), updateReview);
ReviewRouter.delete("/:id", checkExist(Reviews), deleteReview);
ReviewRouter.get("/getFullReview", getFullReview);
module.exports = {
  ReviewRouter,
};
