import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { RegistroComponent } from './registro/registro.component';
export const routes: Routes = [
    {
        path: "inicio",

        component: InicioComponent
    },

    {
        path:"contactanos",
        component: ContactanosComponent
    },

    {
        path: "registro",
        component: RegistroComponent
    }


];
