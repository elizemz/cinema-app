"use client";
import React, { useContext } from "react";
import { Badge, Button, Card, CardFooter, MovieContext } from "@/components";
import { ComingModal } from "./comingModal";
import { ComingsoonContext } from "@/components/contexts/comingsoon";

type Props = {
  pageCount: number;
};

export const CardSection = ({ pageCount }: Props) => {
  const { coMovies } = useContext(ComingsoonContext);
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {coMovies.slice(0, pageCount).map((card: any) => (
          <Card
            className="my-4 transition ease-in duration-200 delay-100 hover:cursor-pointer hover:scale-105 border-2 border-slate-900 bg-slate-900 shadow-none w-[300px] h-[450px]"
            onClick={() => {
              console.log("aaa==>", card.title);
            }}
          >
            <ComingModal card={card} />
            <Badge className="absolute mt-[-20px] bg-slate-800 shadow-none rounded-none rounded-tr-lg">
              {card.releaseDate.split("T")[0]}
            </Badge>

            <CardFooter className="bg-slate-800 flex items-center flex-col gap-2 rounded-b-lg">
              <p className="text-white font-bold text-sm mt-5 overflow-hidden whitespace-nowrap">
                {card.title}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
