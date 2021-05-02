import express from "express";
import {
  apiGetRestaurants,
  apiGetRestaurantById,
  apiGetRestaurantCuisines,
} from "./restaurants.controller.js";
import {
  apiPostReview,
  apiUpdateReview,
  apiDeleteReview,
} from "./reviews.controller.js";

const router = express.Router();

router.route("/").get(apiGetRestaurants);
router.route("/id/:id").get(apiGetRestaurantById);
router.route("/cuisines").get(apiGetRestaurantCuisines);

router
  .route("/review")
  .post(apiPostReview)
  .put(apiUpdateReview)
  .delete(apiDeleteReview);

export default router;
