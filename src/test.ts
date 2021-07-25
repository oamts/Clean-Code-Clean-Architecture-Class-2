import {validate} from './index';

console.assert(validate("00000000000") === false, "00000000000");
console.assert(validate("86446422799") === false, "86446422799");
console.assert(validate("86446422784") === true, "86446422784");
console.assert(validate("864.464.227-84") === true, "864.464.227-84");
console.assert(validate("91720489726") === true, "91720489726");
console.assert(validate("a1720489726") === false, "a1720489726");