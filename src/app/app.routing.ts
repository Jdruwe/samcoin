import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  {path: '**', redirectTo: 'home'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
