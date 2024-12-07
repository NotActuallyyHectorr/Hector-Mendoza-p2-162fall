import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  
import { ItemListComponent } from './components/item-list/item-list.component';  
import { ItemAddComponent } from './components/item-add/item-add.component'; 
import { ItemDetailComponent } from './components/item-detail/item-detail.component';  
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,  
    ItemListComponent,  
    ItemAddComponent,  
    ItemDetailComponent,  
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule, 
    HttpClientModule,  
  ],
  providers: [],
  bootstrap: [AppComponent], 
})
export class AppModule {}
