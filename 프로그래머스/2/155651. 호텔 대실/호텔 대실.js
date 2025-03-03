function solution(book_time) {
  const toM = (time) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  const add10Min = (time) => toM(time) + 10;

  let b = book_time.map(([start, end]) => [toM(start), add10Min(end)]);

  b.sort((a, b) => a[0] - b[0]);

  let r = [];

  for (let [start, end] of b) {
    let a = false;

    for (let i = 0; i < r.length; i++) {
      if (r[i] <= start) {
        r[i] = end;
        a = true;
        break;
      }
    }

    if (!a) {
      r.push(end);
    }

    r.sort((a, b) => a - b);
  }

  return r.length;
}
