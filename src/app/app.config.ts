import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideHttpClient } from "@angular/common/http";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};

/**
 *
 *
 * Voici mon problème:
 * 
 * Dans le vidéo youtube que je regarde on utilise la bibliotheque angular-in-memory-web-api pour simulé un server distant
 * jusque la tout vas bien mais après il utilse HttpClientModule et il ajoute aussi ça HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false,}),
 * dans sont app.module.ts mais moi je l'ai pas sont app.module du coup j'ai essayè de trouver une solutions avec la doc mais j'ai rien touvé
 * juste qu'il  fallait mettre provideHttpClient à la place de HttpClientModule et cette fois dans app.config.ts
 * 
 * PS: la requete fonctionne mais elle renvoie une erreu dans la console 
 * 
 * es-ce que t'aurais une solution ce problème ??
 * le lien de la vidéo si t'en à besoin : https://www.youtube.com/watch?v=DTIYVffhJuU&list=PLb5-D4FW5FQkBL8bovWe_IUZUenhBc8BD&index=2&t=24134s
 * on commence à parler des requêts http à partir 6:10:35 de la vidéo oh pire va directements à 6:20:11
 */
