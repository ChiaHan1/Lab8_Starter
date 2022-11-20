// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// testing isPhoneNumber
test ("isPhoneNumber function pass 1/2", () => {
    expect (functions.isPhoneNumber ("012-345-6789")).toBe (true);
});
test ("isPhoneNumber function pass 2/2", () => {
    expect (functions.isPhoneNumber ("(012)345-6789")).toBe (true);
});
test ("isPhoneNumber function fail 1/2", () => {
    expect (functions.isPhoneNumber ("(012)345-678")).toBe (false);
});
test ("isPhoneNumber function fail 1/2", () => {
    expect (functions.isPhoneNumber ("(abc)def-ghij")).toBe (false);
});

// testing isEmail function
test ("isEmail function pass 1/2", () => {
    expect (functions.isEmail ("abc123@gmail.com")).toBe (true);
});
test ("isEmail function pass 2/2", () => {
    expect (functions.isEmail ("abc123@icloud.com")).toBe (true);
});
test ("isEmail function fail 1/2", () => {
    expect (functions.isEmail ("abc123@@outlook.com")).toBe (false);
});
test ("isEmail function fail 2/2", () => {
    expect (functions.isEmail ("abc123.aol.com")).toBe (false);
});

// testing isStrongPassword function
test ("isStrongPassword function pass 1/2", () => {
    expect (functions.isStrongPassword ("abc123")).toBe (true);
});
test ("isStrongPassword function pass 2/2", () => {
    expect (functions.isStrongPassword ("abcdefg1234567")).toBe (true);
});
test ("isStrongPassword function fail 1/2", () => {
    expect (functions.isStrongPassword ("123")).toBe (false);
});
test ("isStrongPassword function fail 2/2", () => {
    expect (functions.isStrongPassword ("abcdefghijklmnopqrstuvwxyz")).toBe (false);
});

// testing isDate function
test ("isDate function pass 1/2", () => {
    expect (functions.isDate ("01/23/2022")).toBe (true);
});
test ("isDate function pass 2/2", () => {
    expect (functions.isDate ("1/23/2022")).toBe (true);
});
test ("isDate function fail 1/2", () => {
    expect (functions.isDate ("01-23-2022")).toBe (false);
});
test ("isDate function pass 2/2", () => {
    expect (functions.isDate ("1/23/22")).toBe (false);
});

// testing isHexColor function
test ("isHexColor funciton pass 1/2", () => {
    expect (functions.isHexColor ("#abc123")).toBe (true);
});
test ("isHexColor funciton pass 2/2", () => {
    expect (functions.isHexColor ("#def")).toBe (true);
});
test ("isHexColor funciton fail 1/2", () => {
    expect (functions.isHexColor ("##abc123")).toBe (false);
});
test ("isHexColor funciton fail 2/2", () => {
    expect (functions.isHexColor ("#ab12")).toBe (false);
});