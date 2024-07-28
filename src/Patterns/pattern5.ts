function pattern5(n: number) {
    for(let i = n; i > 0; i--) {
        let str = '';
        for(let j = 0; j < i; j++) {
            str += '* ';
        }
        console.log(`${str}`);
    }
}

pattern5(5);