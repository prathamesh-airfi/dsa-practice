export function pattern8(n: number) {
    /* For Columns */
    for (let row = 0; row < n; row++) {
        let drawStr = '';
        /* For spaces */
        for (let space = 0; space < row; space++) {
            drawStr += '  '
        }

        /* For characters */
        for (let chars = 0; chars < (2 * n) - ((2 * row) + 1); chars++) {
            drawStr += '* ';
        }

        /* For spaces */
        for (let space = 0; space < row; space++) {
            drawStr += '  '
        }
        console.log(drawStr);
    }
}

pattern8(5);