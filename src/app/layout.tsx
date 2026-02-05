import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "PokeApp",
  description: "Una aplicación sencilla para explorar Pokémon usando PokeAPI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const menuPokemon = [
    { name: "bulbasaur", slug: "bulbasaur" },
    { name: "ivysaur", slug: "ivysaur" },
    { name: "venusaur", slug: "venusaur" },
    { name: "charmander", slug: "charmander" },
    { name: "charmeleon", slug: "charmeleon" },
    { name: "charizard", slug: "charizard" },
    { name: "squirtle", slug: "squirtle" },
    { name: "wartortle", slug: "wartortle" },
    { name: "blastoise", slug: "blastoise" },
    { name: "caterpie", slug: "caterpie" },
    { name: "butterfree", slug: "butterfree" },
    { name: "pidgey", slug: "pidgey" },
    { name: "pidgeot", slug: "pidgeot" },
    { name: "pikachu", slug: "pikachu" },
    { name: "raichu", slug: "raichu" },
    { name: "jigglypuff", slug: "jigglypuff" },
    { name: "psyduck", slug: "psyduck" },
  ];

  return (
    <html lang="en">
      <body className="h-screen flex flex-col bg-slate-50 dark:bg-slate-950 overflow-hidden">
        
   
        <header className="h-20 bg-slate-900 text-white shadow-lg border-b-4 border-black z-30 shrink-0 flex items-center">
          <div className="w-full px-6">
            <h1 className="text-3xl font-black tracking-tighter uppercase italic">
              Pokemon 
            </h1>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          
         
          <nav className="hidden lg:flex w-64 bg-slate-800 border-r border-slate-700 flex-col z-20">
            <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
                Selecciona un Pokémon
              </h3>
              <ul className="flex flex-col gap-2">
                {menuPokemon.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/pokemon/${p.slug}`}
                      className="group flex items-center px-3 py-2 text-sm font-bold text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg transition-all border-l-4 border-transparent hover:border-yellow-400"
                    >
                      <span className="capitalize">{p.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

        
          <nav className="lg:hidden bg-slate-800 border-b border-slate-700 overflow-x-auto whitespace-nowrap p-4 shrink-0">
             <ul className="flex gap-4">
                {menuPokemon.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/pokemon/${p.slug}`} className="text-xs font-bold text-gray-300 uppercase">
                      {p.name}
                    </Link>
                  </li>
                ))}
             </ul>
          </nav>

          
          <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950">
            <div className="max-w-4xl mx-auto px-6 py-10">
              {children}
            </div>
            
            
            <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 p-6 text-center text-xs text-gray-500">
                 PokeAPI 
            </footer>
          </main>
          
        </div>
      </body>
    </html>
  );
}