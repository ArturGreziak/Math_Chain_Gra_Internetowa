(function(root){
'use strict';
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
function generate(level){
 const cap=level<4?10:level<9?20:35;
 let a=rnd(2,cap),b=rnd(2,cap),c=rnd(2,9),d=rnd(2,9);
 const kind=level<3?rnd(0,1):level<6?rnd(0,3):level<10?rnd(2,5):rnd(4,7);
 switch(kind){
 case 0:return {text:`${a} + ${b} − ${c}`,answer:a+b-c,hint:`First add ${a} + ${b}, then subtract ${c}.`};
 case 1:if(a<b)[a,b]=[b,a];return {text:`${a} − ${b} + ${c}`,answer:a-b+c,hint:`Work from left to right: ${a} − ${b} = ${a-b}.`};
 case 2:return {text:`${c} × ${d} + ${a}`,answer:c*d+a,hint:`Multiplication first: ${c} × ${d} = ${c*d}.`};
 case 3:return {text:`${c*d} ÷ ${c} + ${b}`,answer:d+b,hint:`Division first: ${c*d} ÷ ${c} = ${d}.`};
 case 4:return {text:`(${a} + ${b}) × ${c}`,answer:(a+b)*c,hint:`Parentheses first: ${a} + ${b} = ${a+b}.`};
 case 5:return {text:`${a} + ${c} × ${d} − ${b}`,answer:a+c*d-b,hint:`Multiplication first: ${c} × ${d} = ${c*d}.`};
 case 6:return {text:`(${c*d} + ${c*a}) ÷ ${c}`,answer:d+a,hint:`Add inside parentheses: ${c*d} + ${c*a} = ${c*(d+a)}.`};
 default:return {text:`${a} × ${c} − (${b} + ${d})`,answer:a*c-b-d,hint:`Calculate multiplication and parentheses before subtraction.`};
 }
}
if(typeof module!=='undefined')module.exports={generate};else root.MathEngine={generate};
})(typeof window!=='undefined'?window:globalThis);
