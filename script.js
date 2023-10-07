

 const header = document.querySelector('header')

  header.innerHTML = `
 <div class="wadah">
 <div class="nav-top flex justify-content-center align-items">
  <!-- <h3 class="logo">logo</h3> -->
  <div class="cari rumasa flex align-items justify-content-center">
   <button class="pointer"><img src ="photos/lup.png" width="20px"></button>
   <input type="search" name="" id="">
  </div>
  <img class="chat pointer" src="photos/chat.png" alt="menu">
  <div class="toggle flex justify-content-center">
   <span></span>
   <span></span>
   <span></span>
  </div>
  <div class="menu disnone">
   <ul>
    <li><a href="">stelan</a></li>
    <li><a href="">log-out</a></li>
    <li><a href="">share</a></li>
   </ul>
  </div>
 </div>
</div>
 `

 


 const toggle = document.querySelector('.toggle')

 toggle.addEventListener('click',function(e){
  document.querySelector('.menu').classList.toggle('disnone')
  document.querySelector('.toggle').classList.toggle('close')
 })


 



 document.querySelector('footer').innerHTML += `
 <div>
   <ul class="flex justify-content-center footer">
    <a href="index.html" class="home">
      <img src="photos/house.png" class="icon">
      <span>beranda</span>
    </a>
    <a href="shop.html" class="shop">
      <img src="photos/ranjang.png" class="icon">
      <span>pasar</span>
     </a>
    <a href="profil.html" class="akun">
      <img src="photos/akun.png" class="icon">
      <span>akun</span>
    </a>
  </ul>
</div>
`














let kategoriBuku = [
 {
  img: 'bender/icon (1).jpeg',
  desk: 'novel'
 },
 {
  img: 'bender/icon (6).jpg',
  desk: 'sejarah'
 },
 {
  img: 'bender/icon (5).jpeg',
  desk: 'pendidikan'
 },
 {
  img: 'bender/icon (7).jpeg',
  desk: 'matematika'
 },
 {
  img: 'bender/icon (2).jpeg',
  desk: 'astronomi'
 },
 {
  img: 'bender/icon (3).jpeg',
  desk: 'keagamaan'
 },
 {
  img: 'bender/icon (4).jpeg',
  desk: 'komputer'
 },
 {
  img: 'bender/icon (2).jpeg',
  desk: 'astronomi'
 } 
]

const kumpulan = document.querySelector('.ebook .flex')
kumpulan.innerHTML += `

 ${kategoriBuku.map(e => {
  return `
  <a href="halaman_baca.html">
   <div class="card capitalize">
    <div class="cover">
     <img src="${e.img}" width="100%" height="98%">
    </div> 
    <span>${e.desk}</span>
   </div>
 </a>
  `
 }).join('')}
 
 <a href="zpasar-ebook.html" class="capitalize">selengkapnya..</a>
`

const layer = document.querySelector('.layer')
let angka = 0
/*
function semua(){
 setInterval(() => {
  angka += 350
  
 
  layer.style.marginLeft = `-${angka}px`
  
  if(angka >= 1320){
   angka = 0
   // angka -= 330
   // layer.style.marginLeft = `${angka}px`
  }
// console.log(angka);
 }, 3000);
}
semua()
*/



