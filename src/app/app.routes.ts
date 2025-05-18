import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AddProductComponent } from './add-product/add-product.component';

export const routes: Routes = [
    {path:"",component:HomeComponent,title:"home"},
    {path:"profile",component:ProfileComponent,title:"profile"},
    {path:"dashboard",component:DashboardComponent},
    {path:"products",component:ProductComponent,children:[
        {
            path:"details/:id",component:ProductdetailComponent
        },
        {
           path:"addproduct",component:AddProductComponent
        }
    ]},

    {path:"**",component:NotfoundComponent}
];
