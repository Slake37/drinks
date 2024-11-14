"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const cocktailbyingredient = () => {
  const [cocktails, setCocktails] = useState();
  const params = useParams();
  useEffect(() => {
    const getCocktails = async () => {
      const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${params.ingredient}`
      );
      const response = await data.json();
      setCocktails(response);
      console.log(response);
    };
    getCocktails();
  }, []);
  return (
    <div className="text-white p-2 flex flex-col justify-center items-start max-w-4xl mx-auto  m-auto mt-[6rem]">
      <p>
        Cocktails that contain{" "}
        <span className="uppercase">{params.ingredient}</span>
      </p>
      <div className="grid grid-cols-2 gap-5 p-3 md:grid-cols-4 lg:grid-cols-6">
        {cocktails?.drinks.map((cocktail) => (
          <Link
            href={`/${cocktail.idDrink}`}
            className="text-white flex flex-col justify-center items-center gap-2 neon-border-small p-3 hover:scale-105 transition-all"
            key={cocktail.idDrink}
          >
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className=" max-w-[75px] rounded-full"
            />
            <p className="text-center">{cocktail?.strDrink}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default cocktailbyingredient;
