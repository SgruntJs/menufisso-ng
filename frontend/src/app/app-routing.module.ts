import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InserReviewComponent } from './pages/admin/inser-review/inser-review.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'review', component: InserReviewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
