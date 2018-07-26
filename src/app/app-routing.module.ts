import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
    { path: '', loadChildren: './user/user.module#UserModule',canActivate:[AuthGuard] },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})
export class AppRoutingModule { }
