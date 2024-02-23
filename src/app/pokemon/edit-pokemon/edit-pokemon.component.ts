import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-edit-pokemon",
  standalone: true,
  imports: [PokemonFormComponent],
  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>

    @if(pokemon) {
    <p class="center">
      <img [src]="pokemon.picture" />
    </p>
    } @if (pokemon) {
    <app-pokemon-form [pokemon]="pokemon" />
    }
  `,
  styles: ``,
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private activatedRoutes: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: string | null =
      this.activatedRoutes.snapshot.paramMap.get("id");

    if (pokemonId) {
      this.pokemonService
        .getPokemonById(+pokemonId)
        .subscribe((pokemon) => (this.pokemon = pokemon));
    } else {
      this.pokemon = undefined;
    }
  }
}
