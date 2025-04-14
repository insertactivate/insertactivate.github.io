import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { PublicProductsComponent } from './public-products/public-products.component';
import { PublicProductComponent } from './public-products/public-product/public-product.component';

import { PrivateProductsComponent } from './private-products/private-products.component';
import { PrivateProductComponent } from './private-products/private-product/private-product.component';

import { PublicChurchProductsComponent } from './public-church-products/public-church-products.component';
import { ProductionComponent } from './production/production.component';

import { HistoryComponent } from './history/history.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },

	/* https://paul-chesa.medium.com/passing-data-in-routes-in-angular-a-simple-guide-e24b814e7076 */
	{ path: 'public/products', component: PublicProductsComponent },
	{ path: 'public/products/:id', component: PublicProductComponent },

	{ path: 'private/products', component: PrivateProductsComponent },
	{ path: 'private/products/:id', component: PrivateProductComponent },

	{ path: 'public/church/products', component: PublicChurchProductsComponent },
	
	{ path: 'production', component: ProductionComponent },

	{ path: 'history', component: HistoryComponent },
	{ path: 'contact', component: ContactComponent },

	/* */
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: '**', redirectTo: '/dashboard' }
];
