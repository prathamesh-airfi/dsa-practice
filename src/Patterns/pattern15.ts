function pattern15(n: number) {
    const startCharCode  = 65;
    for (let row = 0; row < n; row++) {
        let drawStr = '';
        for(let char = 0; char <= (n - row - 1); char++) {
            drawStr += `${String.fromCharCode(startCharCode + char)} `
        }
        console.log(drawStr);
    }
}

pattern15(5);