import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginModule } from './login/login.module';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ProductsComponent } from './products/products.component';
import { EmployeesComponent } from './employees/employees.component';
import { NumberonlyDirective } from './customdirectives/numberonly.directive';
import { HighlightDirective } from './customdirectives/highlight.directive';
import { PipesComponent } from './pipes/pipes.component';
import { RemainingPipe } from './remaining.pipe';
import { MySortPipe } from './my-sort.pipe';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { EmpComponent } from './emp/emp.component';
import { UsersComponent } from './users/users.component';
import { CommentComponent } from './comment/comment.component';
import { MathService } from './math.service';
import { MyInterceptor1 } from './utils/my-interceptor1';
import { RetryInterceptor } from './utils/retry-interceptor';
import { SuccessInterceptor } from './utils/success-interceptor';
import { Observable1Component } from './observable1/observable1.component';
import { Observable2Component } from './observable2/observable2.component';
import { Observable3Component } from './observable3/observable3.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { MapdemoComponent } from './mapdemo/mapdemo.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { Observable4Component } from './observable4/observable4.component';
import { Message1Component } from './message1/message1.component';
import { Message2Component } from './message2/message2.component';
import { CartComponent } from './cart/cart.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { ModelDrivenForm1Component } from './model-driven-form1/model-driven-form1.component';
import { ModelDrivenForm2Component } from './model-driven-form2/model-driven-form2.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeCrudComponent } from './employee-crud/employee-crud.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@NgModule({
  // components, directives , pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    DatabindingComponent,
    DirectivesComponent,
    ProductsComponent,
    EmployeesComponent,
    NumberonlyDirective,
    HighlightDirective,
    PipesComponent,
    RemainingPipe,
    MySortPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    EmpComponent,
    UsersComponent,
    CommentComponent,
    Observable1Component,
    Observable2Component,
    Observable3Component,
    ForkjoinComponent,
    MapdemoComponent,
    MyloginComponent,
    Observable4Component,
    Message1Component,
    Message2Component,
    CartComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    ModelDrivenForm1Component,
    ModelDrivenForm2Component,
    HomeComponent,
    AboutusComponent,
    CareersComponent,
    ContactusComponent,
    NotfoundComponent,
    EmployeeCrudComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
  ],
  // modules
  imports: [
    BrowserModule,
    LoginModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  // Services/ Injectables
  providers: [
    MathService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor1, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SuccessInterceptor, multi: true },
  ],
  // components to bootstrap/load
  bootstrap: [AppComponent],
})
export class AppModule {}
