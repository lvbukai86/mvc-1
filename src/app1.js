import './app1.css'
import $ from'jquery'
const $button1=$("#add");
const $button2=$("#dec");
const $button3=$("#mul");
const $button4=$("#divide");
const $number=$("#number");
const $reset=$("#reset");
const n=localStorage.getItem("n");
$number.text(n||100);
$button1.on('click',()=>{
    let n=parseInt($number.text());
    n+=1;
    localStorage.setItem("n",n);
    $number.text(n);
})
$button2.on('click',()=>{
    let n=parseInt($number.text());
    n-=1;
    localStorage.setItem("n",n);
    $number.text(n);
})
$button3.on('click',()=>{
    let n=parseInt($number.text());
    n=n*2;
    localStorage.setItem("n",n);
    $number.text(n);
})
$button4.on('click',()=>{
    let n=parseInt($number.text());
    n=n/2;
    localStorage.setItem("n",n);
    $number.text(n);
})
$reset.on('click',()=>{
    localStorage.setItem("n",100);
    $number.text(100);

})