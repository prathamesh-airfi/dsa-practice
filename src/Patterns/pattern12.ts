function pattern12(n: number) {
    for(let row = 1; row <= n; row++) {
        let drawStr = '';
        for(let nums = 1; nums <= row; nums++) {
            drawStr += `${nums} `;
        }

        for(let space = 1; space <= 2 * (n - row); space++) {
            drawStr += '  ';
        }

        for(let nums = (n - (n - row)); nums >= 1; nums--) {
            drawStr += `${nums} `;
        }

        console.log(drawStr);
    }
}

pattern12(4);