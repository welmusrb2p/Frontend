import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GlobalService } from './core/services/global.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomformbuilderComponent } from './userManagement/customformbuilder/customformbuilder.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { LoginComponent } from './userManagement/login/login.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UnauthorizedComponent } from './core/components/unauthorized/unauthorized.component';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { HeaderInterceptor } from './core/interceptors/header.interceptor';
import { ExplosivesRoutingModule } from './modules/explosives/explosives.routing.module';
import { IndexComponent } from './layout/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CustomformbuilderComponent,
    LoginComponent,
    NavbarComponent,
    UnauthorizedComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [HttpClient],
      },
    }),
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
     GlobalService
     ,NgxSpinnerService
   
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
export function translateFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
