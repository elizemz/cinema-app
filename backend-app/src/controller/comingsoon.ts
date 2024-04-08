import { NextFunction, Request, Response } from "express";
import Comingsoon from "../model/comingsoon";
import Customer from "../model/customer";
import MyError from "../utils/myError";

export const getComingsoon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movies = await Comingsoon.find();
    res.status(200).json({ message: "Бүх kino олдлоо", movies });
  } catch (error) {
    console.log(error);
  }
};

export const createComingsoon = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  // console.log("REQ FILE +++++ ", req.file);
  try {
    const finduser = Customer.findById(req.user?._id);
    if (!finduser) {
      throw new MyError("Нэмэх үйлдлийг хийхийн тулд нэвтрэх хэрэгтэй", 400);
    } else {
      const newMovie = {
        title: req.body.title,
        poster: {
          vertical: req.body.vertical || "",
          lands: { land1: req.body.land1, land2: req.body.land2 },
        },
        movie_trailer: req.body.movie_trailer,
        duration: req.body.duration,
        releaseDate: req.body.releaseDate,
        director: req.body.director,
        genre: req.body.genre,
        synopsis: req.body.synopsis,
        movieType: req.body.movieType || "2D",
        cast: [
          { name: req.body.cast1name, img: req.body.cast1img },
          { name: req.body.cast2name, img: req.body.cast2img },
          { name: req.body.cast3name, img: req.body.cast3img },
        ],
      };

      console.log("newMovie", newMovie);

      const movie = await Comingsoon.create(newMovie);
      res.status(201).json({ message: "new event created", movie });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteMovie = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const finduser = Customer.findById(req.user?._id);
    console.log("MOVIEID =====", req.params.movieId);
    if (!finduser) {
      throw new MyError("Устгах үйлдлийг хийхийн тулд нэвтрэх хэрэгтэй", 400);
    } else {
      await Comingsoon.findByIdAndDelete(req.params.movieId);
      res.status(201).json({ message: "movie deleted" });
    }
  } catch (error) {
    next(error);
  }
};
