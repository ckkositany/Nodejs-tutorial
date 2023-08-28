// npm - global command comes with node;
//npm --version

// local dependency - use it only in this particular project
//local dependencies are installed by running npm i(packageName)
//OR sudo npm install -g<packageName>

//package.json - manifest file(stores important info about the project/package)
//manual approach (create package.json in the root create properties etc)
//npm init step by step ,press enter to skip
//npm init -y (everything by default)



 const _ =require('lodash')

 const items=[1,[2,[3,[4,[5]]]]]
 const newItems=_.flattenDeep(items)
 console.log(newItems)