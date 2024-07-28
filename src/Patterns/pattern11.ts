function pattern11(n: number) {
    for (let row = 0; row < n; row++) {
        let count = row % 2 === 0 ? 1 : 0;
        let drawStr = '';
        for(let num = 0; num <= row; num++) {
            drawStr += `${count % 2} `
            count += 1;
        }
        console.log(drawStr);
    }
}

pattern11(5);