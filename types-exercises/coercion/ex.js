// TODO: write the validation functions

function isValidName(name) {
    // typeof always returns string
    return typeof name == "string"
        // not empty
        && name.trim() >= 3;
}


function hoursAttended(attended, length) {
        if (typeof attended == "string"
            && attended.trim() != ""
        ) {
            // we are explicetly changing the type here
            // so reassignng is ok
            attended = Number(attended)
        }
    if (typeof length == "string"
        && length.trim() != ""
    ) {
        // we are explicetly changing the type here
        // so reassignng is ok
        length = Number(attended)
    }
    if (
        // just in case if empry or null
        // we check again
        typeof attended == "number" &&
        typeof length == "number"
        && attended >= 0 && length >= 0
        && Number.isInteger(attended) &&
        Number.isInteger(length) &&
        attended <= length
)
    {
        return true
    }
}

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
