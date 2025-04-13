import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { PublicProductsComponent } from './public-products/public-products.component';
import { PublicChurchProductsComponent } from './public-church-products/public-church-products.component';
import { PrivateProductsComponent } from './private-products/private-products.component';
import { ProductionComponent } from './production/production.component';

import { HistoryComponent } from './history/history.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },

	{ path: 'public/products', component: PublicProductsComponent },
	{ path: 'public/church/products', component: PublicChurchProductsComponent },
	{ path: 'private/products', component: PrivateProductsComponent },
	{ path: 'production', component: ProductionComponent },

	{ path: 'history', component: HistoryComponent },
	{ path: 'contact', component: ContactComponent },

	/* */
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: '**', redirectTo: '/dashboard' }
];
