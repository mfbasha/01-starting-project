import { Component, inject, Inject, NgModule, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { UserInputComponent } from "./components/user-input/user-input.component";
import { IInvestment, IInvestmentResult, IInvestmentResultItem } from './models/investment.model';
import { ShowResultsComponent } from "./components/show-results/show-results.component";
import { InvestmentCalculateService } from './services/investment-calculate.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    ShowResultsComponent,
    FormsModule,
  ],
})
export class AppComponent {
  investmentData: IInvestmentResultItem[] = [];
  investmentResult = signal<IInvestmentResultItem[]|undefined>(undefined);
  investmentCalculateService = inject(InvestmentCalculateService);

  addInvestment($event: IInvestment) {


    this.investmentResult.set(this.investmentCalculateService.calculateInvestmentResults($event));

  }
}
