var suma = (...args) => {

    console.log([...args])

    //console.log(n1,n2);
    return [...args][0] + [...args][1];
};
var dobla = (num, ...args) => {
    //console.log(num,n1,n2,n3);
    console.log([...args])

    return num * [...args][2]

};

var divide = (num, ...args) => {
    //console.log(num,n1,n2,n3);
    console.log([...args])

    return num / [...args][3]

};

var _pipe = (d, s, e, ...args) => (...args) => e(d(s(...args), ...args), ...args);

var ejemplo = _pipe(dobla, suma, divide);

var result = ejemplo(3, 2, 8, 10);

console.log(result)

// --------------------------------

    let suma = (num) => num + 2;
let multiplica = (num) => num * 2;
let divide = (num) => num / 2;

let _pipe = (f, g) => (...args) => g(f(...args));
let pipe = (...fns) => fns.reduce(_pipe)
let aplica = pipe(suma, multiplica, divide);
let results = aplica(2);

console.log(results)

// ----------------------------------------------------