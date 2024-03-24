import { NextFunction, Request, Response } from "express";
import Movie from "../model/movie";
import Seat from "../model/seat";

export const getSeats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const seats = await Movie.find();
    res.status(201).json({ message: "Бүх kino олдлоо", seats });
  } catch (error) {
    console.log(error);
  }
};

export const createSeats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newSeat = req.body;
    const seat = await Seat.create(newSeat);
    res.status(201).json({ message: "new movie creted", seat });
  } catch (error) {
    res.status(400).json({ message: "there is an error" + error });
  }
};
