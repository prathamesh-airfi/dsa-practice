function pattern6(n: number) {
    for(let i = n; i > 0; i--) {
        let str = '';
        for(let j = 1; j <= i; j++) {
            str += `${j} `;
        }
        console.log(`${str}`);
    }
}

pattern6(5);