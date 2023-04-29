import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionOption } from '../interfaces/interfaces';

@Component({
    selector: 'app-list-cards',
    templateUrl: './list-cards.component.html',
    styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent {
    @Input() answers: QuestionOption[] = []
    @Output() clickAnswerEvent: EventEmitter<any> = new EventEmitter();

    clickAnswer(id: number) {
        this.clickAnswerEvent.emit(id)
    }
}
