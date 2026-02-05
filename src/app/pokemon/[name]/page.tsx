// app/pokemon/[name]/page.tsx
import React from 'react'
import Link from "next/link";

// 1. Tipado simplificado para lo que necesitamos
interface PokemonData {
  name: string;
  types: Array<{
    type: {
      name: string;
    };
  }>;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

interface PokemonProps {
  params: Promise<{ name: string }>;
}


export default async function PokemonDetail(props: PokemonProps) {
  const { name } = await props.params;
  
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    { cache: "no-store" }
  );


  if (!res.ok) {
    return (
      <div className="text-red-600">
        Error al obtener la información del Pokémon.
      </div>
    );
  }

  const pokemon: PokemonData = await res.json();



  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-4">
      
      <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 max-w-md w-full shadow-xl">
        <Link href="/" className="text-sm text-yellow-400 mb-4 inline-block hover:underline">
            Inicio
        </Link>

        <div className="flex flex-col items-center">

          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            className="w-48 h-48 mb-4"
          />
          
          
          <h1 className="text-4xl font-bold capitalize mb-4 text-yellow-400">
            {pokemon.name}
          </h1>
          
          <div className="flex gap-3">
            {pokemon.types.map((t) => (
              <span 
                key={t.type.name} 
                className="px-6 py-2 bg-slate-800 rounded-full text-sm font-semibold border border-slate-700 capitalize text-slate-200"
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}