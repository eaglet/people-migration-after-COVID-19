import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { IconsComponent } from '../../icons/icons.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'analysis',           component: UserComponent },
    { path: 'icons',          component: IconsComponent },
];
