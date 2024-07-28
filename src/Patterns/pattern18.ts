function pattern18(n: number) {
    let startChar = 65 + n - 1;

    for (let row = 0; row < n; row++) {
        let drawStr = '';
        for (let col = 0; col <= row; col++) {
            drawStr += `${String.fromCharCode(startChar + col)} `
        }
        startChar -= 1;
        console.log(drawStr);
    }

}

pattern18(5);