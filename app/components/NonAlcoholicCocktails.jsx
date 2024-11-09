"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NonAlcoholicCocktails = () => {
  const [nonAlcoholicCocktails, setNonAlcoholicCocktails] = useState();

  useEffect(() => {
    const getNonAlcoholicCocktail = async () => {
      const data = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      );
      const response = await data.json();
      setNonAlcoholicCocktails(response);
      console.log(response);
    };
    getNonAlcoholicCocktail();
  }, []);
  return (
    <div className="flex flex-col mt-[3rem]" id="nonAlcoholic">
      <p className="text-3xl mx-5 text-white">Non-Alcoholic Drinks</p>
      <div className="grid grid-cols-2 gap-5 p-3 md:grid-cols-4 lg:grid-cols-6">
        {nonAlcoholicCocktails?.drinks.map((nonAlcoholicCocktail) => (
          <Link
            href={`/${nonAlcoholicCocktail.idDrink}`}
            className="text-white flex flex-col justify-center items-center gap-2 neon-border-small p-3 hover:scale-105 transition-all"
            key={nonAlcoholicCocktail.idDrink}
          >
            <img
              src={nonAlcoholicCocktail.strDrinkThumb}
              alt={nonAlcoholicCocktail.strDrink}
              className=" max-w-[75px] rounded-full"
            />
            <p className="text-center">{nonAlcoholicCocktail?.strDrink}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default NonAlcoholicCocktails;
