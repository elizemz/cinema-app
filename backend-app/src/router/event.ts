import { Router } from "express";
import { createEvent, deleteEvent, getEvents } from "../controller/event";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(authenticate, createEvent).get(getEvents);
router.route("/:eventId").delete(authenticate, deleteEvent);

export default router;
