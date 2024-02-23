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
 * Dans le vidéo youtube que je regarde on utilise la bibliotheque angular-in-memory-web-api pour simulé un server distant
 * jusque la tout vas bien mais après il utilse HttpClientModule et il ajoute aussi ça HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false,}) dans sont app.module.ts
 */

//
