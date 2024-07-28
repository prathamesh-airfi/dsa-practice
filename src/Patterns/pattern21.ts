function pattern21(n: number) {
    for(let row = 0; row < n; row++) {
        const isLastOrFirst = row === 0 || row === n - 1;
        let drawStr = '';
        
        for (let i = 0; i < 1; i++) {
            drawStr += '* ';
        }

        for (let j = 0; j < n - 2; j++) {
            drawStr += `${isLastOrFirst ? '* ': '  '}`;
        }

        for (let k = 0; k < 1; k++) {
            drawStr += '* ';
        }

        console.log(drawStr)
    }
}

pattern21(4);