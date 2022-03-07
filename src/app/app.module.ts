import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';
import { HeaderCardsComponent } from './components/header-cards/header-cards.component';
import { CardComponent } from './components/card/card.component';
import { SectionComponent } from './components/section/section.component';
import { SectionCardComponent } from './components/section-card/section-card.component';
import { ObserverDirective } from './observer.directive';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ButtonComponent,
    LogoComponent,
    FormComponent,
    InputComponent,
    HeaderCardsComponent,
    CardComponent,
    SectionComponent,
    SectionCardComponent,
    ObserverDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
