import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { IInvestment } from '@app/models/investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal<string>('0');
  annualInvestment = signal<string>('0');
  expectedReturn = signal<string>('5');
  duration = signal<string>('10');
  // initialInvestment :string='0';
  // annualInvestment :string='0';
  // expectedReturn :string='5';
  // duration :string='10';

  investmentAdded =output<IInvestment>();

  onSubmit() {
    this.investmentAdded.emit({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });

  }
}
