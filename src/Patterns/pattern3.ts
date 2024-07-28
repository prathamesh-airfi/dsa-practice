function pattern3(n: number) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= i; j++) {
            str += `${j} `;
        }
        console.log(`${str}`);
    }
}

pattern3(5);