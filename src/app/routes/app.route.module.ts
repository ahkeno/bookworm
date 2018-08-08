import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardPage } from '../modules/dashboard/dashboard.page';
import { BookPage } from '../modules/book-page/book.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardPage
    },
    {
        path: 'book/:id',
        component: BookPage,
    }
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]    

})


export class AppRoutingModule{}
