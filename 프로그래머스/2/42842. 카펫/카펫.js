function solution(brown, yellow) {
    const total = brown + yellow;

    for (let height = 1; height <= Math.sqrt(yellow); height++) {
        if (yellow % height === 0) {
            const width = yellow / height;

            if ((width + 2) * (height + 2) === total) {
                return [width + 2, height + 2];
            }
        }
    }
}