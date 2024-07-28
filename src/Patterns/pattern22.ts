function pattern22(n: number) {

    for (let row = 0; row < (n * 2 - 1); row++) {
        let drawStr = '';
        for (let col = 0; col < (n * 2 - 1); col++) {

            let top = row;
            let bottom = col;
            let right = (2 * n - 2) - col;
            let left = (2 * n - 2) - row;

            drawStr += (n - Math.min(Math.min(top, bottom), Math.min(left, right))) + '  ';
        }

        console.log(drawStr);
    }

}

pattern22(4);