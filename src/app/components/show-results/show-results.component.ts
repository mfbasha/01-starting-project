import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { IInvestmentResultItem } from '@app/models/investment.model';

@Component({
  selector: 'app-show-results',
  standalone: true,
  imports: [CurrencyPipe,PercentPipe],
  templateUrl: './show-results.component.html',
  styleUrl: './show-results.component.css',
})
export class ShowResultsComponent {
  investmentData = input<IInvestmentResultItem[]>();
}
