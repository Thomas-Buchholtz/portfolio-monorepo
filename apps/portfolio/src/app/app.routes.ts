import { Route } from '@angular/router';
import {Cv} from './pages/cv/cv';
import {Home} from "./pages/home/home";
import {NotFound} from "./pages/notfound/404";

export const appRoutes: Route[] = [

  {path: '', component: Home},

  {path: 'cv', component: Cv},

  {path: '404', component: NotFound},

  {path: '**', redirectTo: ''}
];
