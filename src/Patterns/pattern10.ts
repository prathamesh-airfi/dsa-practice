function pattern10(n: number) {
    /* For Rows */
    for (let row = 1; row <= (n * 2 - 1); row++) {
        let drawStr = '';
        let stars = row;

        if (row > n) stars = 2 * n - row;

        for (let j = 1; j <= stars; j++) {
            drawStr += '* ';
        }

        console.log(drawStr);
    }
}

pattern10(5);