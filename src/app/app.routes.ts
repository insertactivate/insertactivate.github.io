import { NgModule } from '@angular/core';  
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },

	/* */
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: '**', redirectTo: '/dashboard' }
];

@NgModule({  
  imports: [RouterModule.forRoot(routes, { useHash: true })],  
  exports: [RouterModule]  
})  
export class AppRoutingModule {}
