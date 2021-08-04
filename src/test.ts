import {validate} from './index';

console.assert(validate("00000000000") === false, "00000000000");
console.assert(validate("86446422799") === false, "86446422799");
console.assert(validate("86446422784") === true, "86446422784");
console.assert(validate("864.464.227-84") === true, "864.464.227-84");
console.assert(validate("784.752.390-64") === true, "784.752.390-64");
console.assert(validate("071.489.240-81") === true, "071.489.240-81");
console.assert(validate("123.123.123-12") === false, "123.123.123-12");
console.assert(validate("119.418.247-06") === true, "119.418.247-06");
console.assert(validate("246.678.974-24") === false, "246.678.974-24");
console.assert(validate("91720489726") === true, "91720489726");
console.assert(validate("a1720489726") === false, "a1720489726");
console.assert(validate("") === false, "");