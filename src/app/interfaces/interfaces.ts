export interface QuizzQuestion {
    id: number,
    question: string,
    options: QuestionOption[]
}

export interface QuestionOption {
    id: number,
    name: string,
    alias: string
}

export interface Result {
    id: number,
    alias: string,
    title: string,
    content: string,
    img: {
        url: string,
        alt: string
    }
}