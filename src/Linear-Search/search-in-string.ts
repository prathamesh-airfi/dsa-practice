function linearSearchWithinString(text: string, target: string) {
    if (text.length === 0) {
        return -1;
    }

    for (let i = 0; i < text.length; i++) {
        if (text[i] === target) {
            return i;
        }
    }

    return -1;
}

const targetIndex = linearSearchWithinString('Hello World', 'd');

if (targetIndex !== -1) {
    console.log(`Character found at ${targetIndex} location`);
} else {
    console.log(`Character didn't found`);
}