// ===
// from specs triple works only if
// Type(x) and Type(y) are the same!

// == and === are exactly the same
// if the type match!

// === if the types are different its not gonna
// look into values at all

// let workshop1 = {
//     name: "hello"
// }
//
// let workshop2 = {
//     name: "hello"
// }
//
// if (workshop1 == workshop2) {
//     console.log(double) => false
// }
//
// if (workshop1 === workshop2) {
//     console.log(double) => false
// }
// Those are different objects

// null and undefined are only coercive to each other
// if (workshop1 == null (true) || workshop1 == undefined (true))
//     if (workshop1 == null )

// Double equals do numerical comparison
// == compares primitives, otherwise it converse it to ptimitives

// let count = 42
// let count2 = [42]

// ==
// if null or undefined -> Iqual.
// if the types are the same => ===
// if non-primitives => To Primitves
// == prefer numbers

// EVIL THING TO DO
// if (workshow) {
//     ok
// }

// This will never can be needed!

// if (workshop == true) {
//     NO! :(
    // because:
    // ("" == true) primitives
    // (0 === 1) so its tripple equals
    // ? false
// }
//
// if (workshop == false) {
//     YES! :(
// }

// Avoid:
// 1) == with 0 of "" or " "
// 2) == with non primitives
// 3) If you have ro assign == false or true
// USE ===

// == is preferable, but you HAVE to know the type
// === is no needed when the types dont match
// if types are different === wont work

// === should be reserved for the time when we dont know the type
// to sign the uncertainty  to the reader




