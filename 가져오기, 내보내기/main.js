import _ from 'lodash' // From `node_modules`!
import getType from '../getType' // getType.js
// import { random, information as info } from '../getRandom' // getRandom.js
import * as R from '../getRandom' // getRandom.js

console.log(_.camelCase('the hello world'))
console.log(getType([1, 2, 3]))
// console.log(random(), random())
console.log(R.random())
console.log(R)