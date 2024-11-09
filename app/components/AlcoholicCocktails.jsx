"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const AlcoholicCocktails = () => {
  const [alcoholicCocktails, setAlcoholicCocktails] = useState();

  useEffect(() => {
    const getAlcoholicCocktail = async () => {
      const data = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
      );
      const response = await data.json();
      setAlcoholicCocktails(response);
      console.log(response);
    };
    getAlcoholicCocktail();
  }, []);
  return (
    <div className="flex flex-col mt-[3rem]" id="alcoholic">
      <p className="text-3xl mx-5 text-white">Alcoholic Drinks</p>
      <div className="grid grid-cols-2 gap-5 p-3 md:grid-cols-4 lg:grid-cols-6">
        {alcoholicCocktails?.drinks.map((alcoholicCocktail) => (
          <Link
            href={`/${alcoholicCocktail.idDrink}`}
            className="text-white flex flex-col justify-center items-center gap-2 neon-border-small p-3 hover:scale-105 transition-all"
            key={alcoholicCocktail.idDrink}
          >
            <img
              src={alcoholicCocktail.strDrinkThumb}
              alt={alcoholicCocktail.strDrink}
              className=" max-w-[75px] rounded-full"
            />
            <p className="text-center">{alcoholicCocktail?.strDrink}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default AlcoholicCocktails;
