// determine what the code is for / question

export interface WhatCodeQuestion<T extends number = 3> {
    type: "what-code";
    bad: string[T];
    answer: string;
    difficulty: 1 | 2 | 3;
}

export type WhatCodeQuestions = {
    type: "what-code";
    bad: string[];
    answer: string;
    difficulty: 1 | 2 | 3;
}[]

/*
    [!] badが不正解、answer が答えになる。
    ジェネリック型で不正解の数を指定
    Difficulty：難易度 1 ~ 3
    Standard: 1
    Advanced: 2
    Professional: 3
*/