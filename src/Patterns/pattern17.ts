function pattern17(n: number) {
    const startCharCode  = 65;
    let centerCharCode = 65;

    for(let row = 0; row < n; row++) {
        let drawStr = '';

        for(let space = 0; space < (n - row - 1); space++) {
            drawStr += '  ';
        }

        for(let leftChar = 0; leftChar < row; leftChar++) {
            drawStr += `${String.fromCharCode(startCharCode + leftChar)} `
        }

        for(let centerChar = 0; centerChar < 1; centerChar++) {
            drawStr += `${String.fromCharCode(centerCharCode)} `;
        }

        for(let rightChar = 0; rightChar < row; rightChar++) {
            drawStr += `${String.fromCharCode(centerCharCode - (rightChar + 1))} `
        }

        for(let space = 0; space < (n - row - 1); space++) {
            drawStr += '  ';
        }

        centerCharCode += 1;
        console.log(drawStr);
    }
}

pattern17(4);