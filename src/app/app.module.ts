import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CreateModelComponent } from './create-model/create-model.component';
import { FloorsComponent } from './create-model/floors/floors.component';
import { SpacesComponent } from './create-model/floors/floor/spaces/spaces.component';
import { FloorComponent } from './create-model/floors/floor/floor.component';
import { SpaceComponent } from './create-model/floors/floor/spaces/space/space.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateModelComponent,
    FloorsComponent,
    SpacesComponent,
    FloorComponent,
    SpaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
