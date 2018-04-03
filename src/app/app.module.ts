import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BookcaseComponent } from './pages/bookcase/bookcase.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginModule } from './pages/login/login.module';
import { BookComponent } from './pages/shared/book/book.component';
import { BookSaleComponent } from './pages/shared/book-sale/book-sale.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookcaseComponent,
    FooterComponent,
    BookComponent,
    BookSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
