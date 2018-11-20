/**
 * Отображает цифру + слово со склонением
 * например:
 * 1 кот
 * 2 кота
 * 5 котов
 */
export default (number: number, titles: string[], justString?: true) => {
    const cases = [2, 0, 1, 1, 1, 2];
    const word = titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    if (justString) {
        return word;
    }
    return number + ' ' + word;
}