// ES6 Modules
// import/export
const a = 1;
const b = 2;
const c = 3;

export const b_ex = b;
export const a_ex = a;

export default function show(){
    console.log("Wow!");
}

export function say(){}

export { c };

// export {
//    b_ex: b, // 2
//    a_ex: a  // 1
// }

/* index.js:

import { b_ex, a_ex } from './library';
import show from './library';
import { say } from './library';
show();

console.log( "b_ex", b_ex, a_ex );
*/