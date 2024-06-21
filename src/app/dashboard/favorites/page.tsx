import { FavoritePokemons } from "@/pokemons";
import { PokemonGrid } from "@/pokemons";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
  title: "Favoritos",
  description: "Pokemons favoritos",
};

const PokemonsPage = () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons favoritos <small className="text-blue-500">Global state</small>
      </span>
      {/* <PokemonGrid pokemons={[]} /> */}
      <FavoritePokemons />
    </div>
  );
};

export default PokemonsPage;
