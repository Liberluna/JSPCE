// choice question

export interface ChoiceQuestion<T extends number = 3> {
    type: "choice";
    bad: string[T];
    answer: string;
    difficulty: number;
}

export type ChoiceQuestions = {
    type: "choice";
    bad: string[];
    answer: string;
    difficulty: number;
}[]

/*
    [!] badが不正解、answer が答えになる。
    ジェネリック型で不正解の数を指定
    difficulty：難易度 1 ~ 10
    全25問の難易度合計が それぞれ
    Standard: 75
    Advanced: 150
    Professional: 200
    になるように選出
*/