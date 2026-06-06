export function gerarRA(): string {
    const ano = new Date().getFullYear()
    const sequencial = Math.floor(Math.random() * 1_000_000_000)
        .toString()
        .padStart(9, "0")
    return `${ano}${sequencial}`
}