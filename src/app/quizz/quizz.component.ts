import { Component, OnInit } from '@angular/core';
import quizz from '../../assets/data/quizz_questions.json'
import { QuestionOption, QuizzQuestion, Result } from '../interfaces/interfaces';

@Component({
    selector: 'app-quizz',
    templateUrl: './quizz.component.html',
    styleUrls: ['./quizz.component.scss']
})

export class QuizzComponent implements OnInit {

    quizz_title = "Quizz: "

    //quizz questions
    quizz_questions: QuizzQuestion[] = [];
    question_selected!: QuizzQuestion

    //questions index
    question_index: number = 0
    question_max_index: number = 0

    //user answers
    quizz_answers: QuestionOption[] = []

    //quizz result
    quizz_results: Result[] = quizz.results
    final_result: Result | any

    finished: boolean = false

    ngOnInit(): void {
        if (quizz) {
            this.quizz_title += quizz.title
            this.quizz_questions = quizz.questions

            this.question_max_index = this.quizz_questions.length
            this.question_selected = this.quizz_questions[this.question_index]

        }
    }

    clickAnswer(id: number) {
        const answer_selected = this.quizz_questions[this.question_index].options[id - 1]
        this.quizz_answers.push(answer_selected)
        this.nextQuestion()
    }

    retryQuizz(): void {
        this.question_index = 0
        this.question_selected = this.quizz_questions[this.question_index]
        this.quizz_answers = []
        this.final_result = null
        this.finished = false
    }

    nextQuestion(): void {

        this.question_index += 1

        if (this.question_index < this.question_max_index) {
            this.question_selected = this.quizz_questions[this.question_index]
        } else {
            this.getResult()
        }
    }

    getResult() {
        if (
            (this.quizz_answers.filter(answer => answer.alias == 'A').length >
            this.quizz_answers.filter(answer => answer.alias == 'B').length) &&
            (this.quizz_answers.filter(answer => answer.alias == 'A').length >
            this.quizz_answers.filter(answer => answer.alias == 'C').length)
        ) {
            this.final_result = this.quizz_results.find((res) => res.alias == 'A')
        } else if (
            (this.quizz_answers.filter(answer => answer.alias == 'B').length >
            this.quizz_answers.filter(answer => answer.alias == 'C').length) 
        ){
            this.final_result = this.quizz_results.find((res) => res.alias == 'B')
        }else{
            this.final_result = this.quizz_results.find((res) => res.alias == 'C')
        }
        this.finished = true
    }
}
