import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { SelectService } from '../../services/select.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  option: string = '';
  question1: string;
  question2: string;
  answer1: string;
  answer2: string;
  isCorrect: boolean | null = null;
  subscription: Subscription | undefined;

  constructor(
    private optionService: SelectService
  ) {
    this.question1 = '¿Cuál es la diferencia fundamental entre un argumento deductivo y un argumento inductivo?';
    this.question2 = '¿Qué aspecto de los argumentos NO sería evaluado en la prueba de comunicación escrita, según lo establecido en el texto?';
    this.answer1 = '';
    this.answer2 = '';
  }

  ngOnInit() {
    this.subscription = this.optionService.currentOption.subscribe(option => {
      this.option = option;
    });
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  checkAnswers() {
    this.isCorrect = this.answer1 === 'D' && this.answer2 === 'C';
  }
}
