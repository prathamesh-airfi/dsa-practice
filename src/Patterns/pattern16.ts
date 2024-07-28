function pattern16(n: number) {
    const startCharCode  = 65;
    for (let row = 0; row < n; row++) {
        let drawStr = '';
        for(let char = 0; char <= row; char++) {
            drawStr += `${String.fromCharCode(startCharCode + row)} `
        }
        console.log(drawStr);
    }
}

pattern16(5);