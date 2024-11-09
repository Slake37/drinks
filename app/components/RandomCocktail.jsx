"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const RandomCocktail = () => {
  const [randomCocktail, setRandomcocktail] = useState();

  useEffect(() => {
    const getRandomCocktail = async () => {
      const data = await fetch(
        "https://thecocktaildb.com/api/json/v1/1/random.php"
      );
      const response = await data.json();
      setRandomcocktail(response);
      console.log(response.drinks[0]);
    };
    getRandomCocktail();
  }, []);

  return (
    <div className="mt-5 p-3 w-full max-w-4xl flex justify-center items-center mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full ">
        <Link href={`/${randomCocktail?.drinks[0].idDrink}`}>
          <img
            src={randomCocktail?.drinks[0].strDrinkThumb}
            alt=""
            className="neon-border max-w-[300px] "
          />
        </Link>

        <div className="text-white w-full  font-semibold flex flex-col justify-center items-center md:justify-start md:items-start p-3 ">
          <p className="text-3xl">{randomCocktail?.drinks[0].strDrink}</p>
          <p className="text-2xl">({randomCocktail?.drinks[0].strAlcoholic})</p>
          <div className="flex flex-col justify-start items-start mt-5 w-full">
            <p className="text-xl mb-2">Ingredients:</p>
            {randomCocktail?.drinks[0].strIngredient1 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient1} </p>
                <p>{randomCocktail?.drinks[0].strMeasure1}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient2 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient2} </p>
                <p>{randomCocktail?.drinks[0].strMeasure2}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient3 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient3} </p>
                <p>{randomCocktail?.drinks[0].strMeasure3}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient4 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient4} </p>
                <p>{randomCocktail?.drinks[0].strMeasure4}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient5 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient5} </p>
                <p>{randomCocktail?.drinks[0].strMeasure5}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient6 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient6} </p>
                <p>{randomCocktail?.drinks[0].strMeasure6}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient7 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient7} </p>
                <p>{randomCocktail?.drinks[0].strMeasure7}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient8 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient8} </p>
                <p>{randomCocktail?.drinks[0].strMeasure8}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient9 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient9} </p>
                <p>{randomCocktail?.drinks[0].strMeasure9}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient10 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient10} </p>
                <p>{randomCocktail?.drinks[0].strMeasure10}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient11 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient11} </p>
                <p>{randomCocktail?.drinks[0].strMeasure11}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient12 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient12} </p>
                <p>{randomCocktail?.drinks[0].strMeasure12}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient13 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient13} </p>
                <p>{randomCocktail?.drinks[0].strMeasure13}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient14 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient14} </p>
                <p>{randomCocktail?.drinks[0].strMeasure14}</p>
              </div>
            )}
            {randomCocktail?.drinks[0].strIngredient15 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{randomCocktail?.drinks[0].strIngredient15} </p>
                <p>{randomCocktail?.drinks[0].strMeasure15}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RandomCocktail;
