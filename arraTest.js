const x = [1, 2, 3];
let y = [4, 5, 6];
let z = x;

z[2] = y[0];
// z[1] = y[2];
// y[1] = z[1];
// x[0] = y[0];
// x[2] = 1;

console.log(x, y, z);

//x and z refer to the same location in memory