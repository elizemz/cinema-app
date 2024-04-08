"use client";
import React, { useContext } from "react";
import Breadcrumb from "../../Breadcrumbs/Breadcrumb";
import { useComingSoon } from "@/context";
import { MovieCard } from "./movie-card";
import { ComingsoonDialog } from "./add-dialog/comingsoon-dialog.tsx";

type Props = {};

export const ComingSoon = (props: Props) => {
  const { coMovies } = useComingSoon();
  return (
    <>
      <Breadcrumb pageName="Coming-soon" />
      <ComingsoonDialog />
      <div className="flex flex-wrap gap-5">
        {coMovies.map((movie: any) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </>
  );
};
