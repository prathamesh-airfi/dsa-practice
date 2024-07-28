function maximumWealth(accounts: number[][]): number {
    let max = 0;
    accounts.forEach(account => {
        let sum = account.reduce((first, second) => first + second);
        if (sum > max) {
            max = sum
        }
    });

    return max;
};

console.log(maximumWealth([[1,2,3],[3,2,1]]))