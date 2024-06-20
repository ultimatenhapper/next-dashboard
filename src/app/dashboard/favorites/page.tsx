import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons";
import Image from "next/image";

export const metadata = {
  title: "Favoritos",
  description: "Pokemons favoritos",
};

const Pokemons = async () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons favoritos <small className="text-blue-500">Global state</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
};

export default Pokemons;
