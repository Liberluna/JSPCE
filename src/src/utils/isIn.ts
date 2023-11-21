export function isIn(expectation: "server" | "client" = "client"): boolean {
    const pre: boolean = typeof window !== 'undefined';
    return expectation === "server" ? !pre : pre;
}