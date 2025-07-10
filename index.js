#! /usr/bin/env node
/********
load node module in interactive repl
you can access module variables and repl inside the module
Rui Azevedo <ruihfazevedo@gmail.com> [www.r-site.net]
**/

var info = require('./package.json');
console.log("-= nit tool "+info.version+" =-");
var cwd=process.cwd();
var fs=require("fs");
var target=process.argv.slice(2).join(" ");
if(!target) {
  if(fs.existsSync("index.js")) target="index.js"
  else if(fs.existsSync(cwd+"/"+(cwd.split("/").pop())+".js"))
    target=cwd+"/"+(cwd.split("/").pop())+".js"
}
if (target) {
  if(fs.existsSync(target)) 
    console.log("loading:",target)
  else {
    console.log("file not found:",target)
    process.exit();    
  }
} else {
  console.log("usage: nit «file»")
  console.log("Rui Azevedo 2015-2025")
  console.log("http://github.com/neu-rah/nit")
  console.log("tryed:");
  console.log("index.js")
  console.log(cwd+"/"+(cwd.split("/").pop())+".js")
  process.exit();
}
var repl = require("repl").start("#>");
var ctx=repl.context;
ctx.global=global;
process.stdin.resume();
ctx.load=require("simple-loader")(ctx);//initialize load with a context
if (target) {
  ctx.load(target);
  console.log("ready");
} else if(fs.existsSync("index.js")) ctx.load("index.js");
else if(fs.existsSync(cwd+"/"+(cwd.split("/").pop())+".js"))
  ctx.load(cwd+"/"+(cwd.split("/").pop())+".js");
