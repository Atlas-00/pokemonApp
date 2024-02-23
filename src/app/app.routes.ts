import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { pokemonRoutes } from "./pokemon/pokemon.routes";

export const routes: Routes = [
  ...pokemonRoutes,
  { path: "", redirectTo: "pokemons", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];
