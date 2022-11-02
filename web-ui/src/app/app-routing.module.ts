import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './routes/about/about.component';
import { MixerComponent } from './routes/mixer/mixer.component';
import { TestPageComponent } from './routes/test-page/test-page.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'home', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mixer', component: MixerComponent },
  { path: 'testPage', component: TestPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
