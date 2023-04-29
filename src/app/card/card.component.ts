import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() id: number = 0

    @Input() title: string = ""
    @Input() subtitle: string = ""
    @Input() content: string = ""
    @Input() imgSrc: string = ""
    @Input() type: string = "answer"

    @Output() clickAnswerEvent: EventEmitter<any> = new EventEmitter() 

    clickAnswer(id: number){
        this.clickAnswerEvent.emit(id)
    }
}
