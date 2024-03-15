"use client";
import React from "react";
import { cards } from "./cards";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "..";
import { DialogCloseButton } from "./dialog";

type Props = {};

export const MovieCard = (props: Props) => {
  return (
    <div className="mt-10 flex justify-evenly">
      {cards.map((card: any, i) => {
        return (
          <div
            className="w-[300px] h-[500px] rounded-lg border-1 overflow-hidden flex justify-center items-center border-2 border-rose-200"
            key={i}
          >
            <Card
              className="w-[300px] h-[500px] rounded-lg transition ease-in duration-300 delay-200 hover:cursor-pointer hover:scale-105"
              onClick={() => {
                console.log("aaa==>", card.title);
              }}
            >
              <img
                src={card.movieImages}
                className="h-[390px] w-[300px] rounded-t-lg relative"
              />
              <Badge variant="secondary" className="absolute mb-4">
                {card.date}
              </Badge>

              <CardFooter className="bg-slate-500 flex items-center flex-col mt-4 gap-2 rounded-b-lg">
                <p className="text-white font-bold text-2xl hover:color-yellow">
                  {card.title}
                </p>
                <DialogCloseButton card={card} />
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
