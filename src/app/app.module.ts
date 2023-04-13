import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyElementComponent } from './my-element/my-element.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  toBeElements = [['app-my-element', MyElementComponent]] as const;

  constructor(injector: Injector) {
    for (const [name, componentClass] of this.toBeElements) {
      const elementClass = createCustomElement(componentClass, { injector });
      customElements.define(name, elementClass);
    }
  }
}
