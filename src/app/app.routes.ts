import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //Redirect to home page
    {path: 'home', component: Home}, //Home page
    {path: 'projects', component: Projects}, //Projects page
    {path: 'skills', component: Skills}, //Skills page
    {path: 'contact', component: Contact}, //Contact page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }



