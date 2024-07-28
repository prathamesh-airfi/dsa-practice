function pattern14(n: number) {
    const startCharCode  = 65;
    for (let row = 0; row < n; row++) {
        let drawStr = '';
        for(let char = 0; char <= row; char++) {
            drawStr += `${String.fromCharCode(startCharCode + char)} `
        }
        console.log(drawStr)
    }
}

pattern14(5);