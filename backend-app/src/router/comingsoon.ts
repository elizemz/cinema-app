import { Router } from "express";
import {
  createComingsoon,
  getComingsoon,
  deleteMovie,
} from "../controller/comingsoon";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(authenticate, createComingsoon).get(getComingsoon);
router.route("/:movieId").delete(authenticate, deleteMovie);

export default router;
