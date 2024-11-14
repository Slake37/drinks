"use client";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineNoDrinks } from "react-icons/md";
import { useRouter } from "next/navigation";
import { BiDrink } from "react-icons/bi";

const Navbar = () => {
  const [ingredient, setIngredient] = useState("");
  const route = useRouter();

  return (
    <div className="fixed top-0 left-0 w-full z-50 right-0 drop-shadow-md backdrop-blur-lg text-white p-2">
      <div className="flex justify-between px-3 py-2">
        <div className="flex flex-col md:flex-row gap-2 justify-center items-start">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            className="backdrop-blur-lg bg-transparent outline-none placeholder:text-[#bc13fe]/75"
            placeholder="Search by ingredient"
          />
          <button
            onClick={() => route.push(`/cocktailbyingredient/${ingredient}`)}
            className={
              ingredient
                ? "btn bg-[#bc13fe] px-2 rounded-md font-semibold"
                : "hidden"
            }
          >
            Search
          </button>
        </div>
        <div className="flex gap-3">
          <Link href={"/#nonAlcoholic"}>
            <MdOutlineNoDrinks className="text-white text-4xl bg-[#bc13fe] rounded-md p-2" />
          </Link>
          <Link href={"/#alcoholic"}>
            <BiDrink className="text-white text-4xl border-2 border-[#bc13fe] rounded-md p-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
