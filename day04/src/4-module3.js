//引入3-module.js中的一些变量,要去使用
// import { a,b } from './3-module.js';

// console.log(a,b);

// import { m,say } from './3-module.js';

// console.log(m,say);

// console.log('3-module.js');


import test from './3-module.js';
//console.log(test);

import {n} from './3-module.js';
//console.log(n);

//将所有组成对象 
import * as obj from './3-module.js';
//console.log(obj);

export {n,a} from './3-module.js';

// test();