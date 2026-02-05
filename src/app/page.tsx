
async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9");
  if (!res.ok) throw new Error("Falló la carga de datos");
  return res.json();
}

export default async function Home() {
  const data = await getPokemons();
  const pokemons = data.results;

  return (
    <main className="p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-800 dark:text-white  tracking-tighter">
          PokeAPI
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Selecciona un Pokémon del menú lateral para ver su información detallada.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pokemons.map((pokemon: any, index: number) => {
          const id = index + 1; 
          
          return (
            <div 
              key={pokemon.name}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center shadow-sm"
            >
              
              <div className="relative w-32 h-32 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <img 
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                  alt={pokemon.name}
                  className="w-24 h-24 z-10"
                />
                
              </div>

              <h2 className="text-xl font-bold capitalize text-slate-700 dark:text-white">
                {pokemon.name}
              </h2>
            
            </div>
          );
        })}
      </div>
    </main>
  );
}