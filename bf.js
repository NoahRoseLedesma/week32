var bf = require('./bfmodule.js');
console.log(bf.toAsii("Ayy Lmao!"));
console.log(bf.toBrainFuck(bf.toAsii("Ayy Lamo!")));
console.log(bf.toText(bf.toBrainFuck(bf.toAsii("Ayy Lamo!"))));
