import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Page } from './pages/page1/page1.page';

const routes: Routes = [
  {
    path: '',
    component: Page1Page,
    children: [
      {
        path: ':slug/dashboard ',
        component: Page1Page,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
