"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiDrink } from "react-icons/bi";

const CocktailDetails = () => {
  const [cocktailDetails, setCocktailDetails] = useState();
  const [sameCocktails, setSameCocktails] = useState();

  useEffect(() => {
    const getAlcoholicCocktail = async () => {
      const data = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
      );
      const response = await data.json();
      setCocktailDetails(response.drinks[0]);
      console.log(response);
    };
    const getSameCocktail = async () => {
      if (cocktailDetails) {
        const data = await fetch(
          `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${cocktailDetails?.strIngredient1}`
        );
        const response = await data.json();
        setSameCocktails(response.drinks);
        console.log(response);
      }
    };

    getAlcoholicCocktail();
    getSameCocktail();
  }, [cocktailDetails?.strIngredient1]);

  const params = useParams();
  return (
    <div className="text-white p-2 flex flex-col justify-center items-start max-w-4xl mx-auto  m-auto mt-[3rem]">
      <Link href={"/"}>
        <button className="neon-border my-5 flex justify-center items-center gap-3 px-5 py-1 hover:bg-[#bc13fe] transition-all hover:scale-105">
          <BiDrink />
          Back to Home
        </button>
      </Link>

      <div className="flex flex-col justify-start items-center md:flex-row max-w-4xl mx-auto md:mx-0 gap-5">
        <img
          src={cocktailDetails?.strDrinkThumb}
          alt=""
          className="w-full max-w-[250px] rounded-md neon-border-small"
        />
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full">
          <div className="flex flex-col justify-center items-center  md:justify-start md:items-start mt-3">
            <p className="text-2xl font-semibold">
              {cocktailDetails?.strDrink}
            </p>
            <p>{cocktailDetails?.strAlcoholic}</p>
          </div>
          <div className="flex flex-col justify-start items-start mt-5 w-full">
            <p className="text-xl mb-2">Ingredients:</p>
            {cocktailDetails?.strIngredient1 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient1} </p>
                <p>{cocktailDetails?.strMeasure1}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient2 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient2} </p>
                <p>{cocktailDetails?.strMeasure2}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient3 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient3} </p>
                <p>{cocktailDetails?.strMeasure3}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient4 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient4} </p>
                <p>{cocktailDetails?.strMeasure4}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient5 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient5} </p>
                <p>{cocktailDetails?.strMeasure5}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient6 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient6} </p>
                <p>{cocktailDetails?.strMeasure6}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient7 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient7} </p>
                <p>{cocktailDetails?.strMeasure7}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient8 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient8} </p>
                <p>{cocktailDetails?.strMeasure8}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient9 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient9} </p>
                <p>{cocktailDetails?.strMeasure9}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient10 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient10} </p>
                <p>{cocktailDetails?.strMeasure10}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient11 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient11} </p>
                <p>{cocktailDetails?.strMeasure11}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient12 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient12} </p>
                <p>{cocktailDetails?.strMeasure12}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient13 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient13} </p>
                <p>{cocktailDetails?.strMeasure13}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient14 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient14} </p>
                <p>{cocktailDetails?.strMeasure14}</p>
              </div>
            )}
            {cocktailDetails?.strIngredient15 && (
              <div className="flex gap-2 border-b-2 py-1 w-full justify-between">
                <p>{cocktailDetails?.strIngredient15} </p>
                <p>{cocktailDetails?.strMeasure15}</p>
              </div>
            )}
          </div>{" "}
          <p className="my-5">{cocktailDetails?.strInstructions}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start mt-5">
        <p className="text-xl mb-2 font-semibold">You also can try</p>
        <div className="flex justify-center items-center flex-wrap  gap-6 max-w-4xl w-full mt-5">
          {sameCocktails?.map((sameCocktail) => (
            <Link
              href={`/${sameCocktail.idDrink}`}
              className="text-white flex w-[150px] h-[150px] flex-col justify-center items-center gap-2 neon-border-small p-5 hover:scale-105 transition-all"
              key={sameCocktail.idDrink}
            >
              <img
                src={sameCocktail.strDrinkThumb}
                alt={sameCocktail.strDrink}
                className=" max-w-[75px] rounded-full"
              />
              <p className="text-center">{sameCocktail?.strDrink}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CocktailDetails;
