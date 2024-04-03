import React, { useContext } from "react";
import Cinema from "@/components/Cinema";
import { CinemaContext } from "@/components/context/cinema";

const CinemaPage = () => {
  return (
    <div>
      <Cinema />
    </div>
  );
};

export default CinemaPage;
