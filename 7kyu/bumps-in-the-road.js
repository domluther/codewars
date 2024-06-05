// DESCRIPTION:
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(x) {
  // How many ns?
  let n = 0;
  for (let i = 0; i < x.length; i++) {
    n = x[i] === 'n' ? n + 1 : n;
  }
  // n <= 15 win
  return n <= 15 ? 'Woohoo!' : 'Car Dead';
}

const ans = bump('_nnnnnnn_n__n______nn__nn_nnn');
console.log(ans);

function bumpFilter(x) {
  const n = x.split('').filter((char) => char === 'n').length;
  return n <= 15 ? 'Woohoo!' : 'Car Dead';
}

const ans2 = bumpFilter('_nnnnnnn_n__n______nn__nn_nnn');
console.log(ans2);
