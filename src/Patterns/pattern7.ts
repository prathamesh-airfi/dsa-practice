export function pattern7(n: number) {
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

pattern7(5);