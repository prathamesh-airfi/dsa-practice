function pattern13(n: number) {
    let count = 1;
    for (let row = 1; row <= n; row++) {
        let drawStr = '';
        for (let col = 1; col <= row; col++) {
            drawStr += `${count} `;
            count += 1;
        }
        console.log(drawStr);
    }
}

pattern13(5)