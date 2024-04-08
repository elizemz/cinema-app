import { Router } from "express";
import { createMovie, deleteMovie, getMovies } from "../controller/movie";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(authenticate, createMovie).get(getMovies);
router.route("/:movieId").delete(authenticate, deleteMovie);

export default router;
