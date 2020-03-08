// v = -0;
// console.log(v.toString())

//

// Always falsy values:
// 0.
// -0,
// null,
// Nan,
// false,
// undefined

// Coercion
// COERSION IS NOT EVIL

//let numStudents = 16;
//console.log(`Its a number ${numStudents}`)
// number TURNS into string

// The implicit coersion is happening here!
// if you sum number + str, the + sign prefers
// string concatination, so one of the is suffering
// coersion!(look specs)

// numStudents + 1 ( 161 )
// But numStudents - 1 ( 15 )  Minus is only for numbers is specs

// Boxing - JavaScript explicitly coerce primitive
// value for you.
// Boxing is where "everything in JavaScript is an object" comes from here

// CORNER CASES
// this is evil
// console.log(Number("")) -> returns 0

// (1 < 2) < 3
// (true) < 3 -> "true" converts to a number due to <
// 1 < 3 -> true BY ACCIDENT
// Booleans converts themselfs to a number


