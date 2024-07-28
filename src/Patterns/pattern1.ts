function pattern1(n: number) {
    for(let i = 0; i < n; i++) {
        let str = '';
        for(let j = 0; j < n; j++) {
            str += '* ';
        }
        console.log(`${str}`);
    }
}

pattern1(5);