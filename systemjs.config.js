SystemJS.config({
  map: {
    "typescript": "http://localhost:8080/typescript.min.js",
    "babel": "http://localhost:8080/browser.min.js",
    "traceur": "http://localhost:8080/browser.min.js"
    // "babel": "//cdn.bootcss.com/babel-core/6.1.19/browser.min.js"
  }
});
System.config({
 transpiler: "typescript"
  // transpiler: "babel"
});
System.config({
  typescriptOptions: {
    "noImplicitAny": false,
    "typeCheck": true,
    "jsx": "react", // << was important to get TSX working (in browser) 
    "module": "system",
    "isolatedModules": false,
    "emitDecoratorMetadata": true,
    "declaration": false,
    "suppressImplicitAnyIndexErrors": true
  }

});
	
