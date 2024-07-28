function pattern19(n : number) {
    /* First Half */
    for (let row = 0; row < n; row ++) {
        let drawStr = '';
        for (let star = 0; star < n - row; star++) {
            drawStr += '* ';
        }

        for (let space = 0; space < (row * 2); space++) {
            drawStr += '  ';
        }

        for (let star = 0; star < n - row; star++) {
            drawStr += '* ';
        }
        console.log(drawStr);
    }

    /* Second Half */
    for (let row = 0; row < n; row ++) {
        let drawStr = '';
        for (let star = 0; star <=row; star++) {
            drawStr += '* ';
        }

        for (let space = 0; space < (n - row - 1) * 2; space++) {
            drawStr += '  ';
        }

        for (let star = 0; star <= row; star++) {
            drawStr += '* ';
        }
        console.log(drawStr);
    }
}

pattern19(5);