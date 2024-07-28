function pattern7(n: number) {
    /* For Rows */
    for (let row = 0; row < n; row++) {
        let drawStr = '';

        /* Draw spaces */
        for (let space = 0; space < (n - row - 1); space++) {
            drawStr += '  ';
        }

        /* Draw characters */
        for (let char = 0; char < (row * 2 + 1); char++) {
            drawStr += '* ';
        }

        /* Draw spaces */
        for (let space = 0; space < (n - row - 1); space++) {
            drawStr += '  ';
        }

        console.log(drawStr);
    }
}

function pattern8(n: number) {
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

pattern7(6);
pattern8(6);