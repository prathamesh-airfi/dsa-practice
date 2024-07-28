function pattern4(n: number) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= i; j++) {
            str += `${i} `;
        }
        console.log(`${str}`);
    }
}

pattern4(5);