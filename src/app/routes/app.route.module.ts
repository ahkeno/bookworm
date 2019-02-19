import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardPage } from '../modules/dashboard/dashboard.page';
import { BookPage } from '../modules/book-page/book.page';
import { CategoryListPage } from '../modules/category-list/category-list.page';
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
    },
    {
        path: 'category/:tag',
        component: CategoryListPage,
    }
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports:[
        RouterModule
    ]    

})


export class AppRoutingModule{}
