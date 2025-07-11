#! /usr/bin/env node
/********
load node module in interactive repl
you can access module variables and repl inside the module
Rui Azevedo <ruihfazevedo@gmail.com> [www.r-site.net]
**/

var stdin = process.stdin;
// stdin.setRawMode( true );
stdin.resume();
stdin.setEncoding( 'utf8' );
stdin.on( 'data',function( key ) {if ( key === '\u0003' ) process.exit();});

var info = require('./package.json');
var cwd=process.cwd();
console.log("**nit** tool version:",info.version,"cwd:",cwd);
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
ctx.load=require("simple-loader")(ctx);//initialize load with a context
// console.log("ready");
ctx.load(target);
