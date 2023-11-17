// codeRefactor question

export interface CodeRefactor<T extends number = 3> {
    type: "code-refactor";
    bad: string[T];
    answer: string;
    difficulty: number;
}

export type CodeRefactors = {
    type: "code-refactor";
    bad: string[];
    answer: string;
    difficulty: number;
}[]

/*
    [!] badが不正解、answer が答えになる。
    ジェネリック型で不正解の数を指定
    difficulty：難易度 1 ~ 10
    全5問の難易度合計が それぞれ
    Standard: 15
    Advanced: 25
    Professional: 40
    になるように選出
*/