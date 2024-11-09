import AlcoholicCocktails from "./components/AlcoholicCocktails";
import Header from "./components/Header";
import NonAlcoholicCocktails from "./components/NonAlcoholicCocktails";
import RandomCocktail from "./components/RandomCocktail";

export default function Home() {
  return (
    <div className="">
      <Header />
      <RandomCocktail />
      <AlcoholicCocktails />
      <NonAlcoholicCocktails />
    </div>
  );
}
