

const daftarpBuku = [
 {
  cover:'buku/buku1.jpg',
  judul: 'seni sikap bodo amat',
  harga: 80000,
  profilToko:false,
  namaToko:'toko ijul',
  bintang: 1.9,
  logo:'photos/logo7.jpg',
  terjual: 2974
 },
 {
  cover:'buku/sejarah.jpg',
  judul: 'sejarah kerajaan besar',
  harga: 26000,
  profilToko:false,
  namaToko:'alfa store',
  bintang: 4.2,
  logo:'photos/logo8.jpg',
  terjual: 2974
 },
 {
  cover:'buku/dunia.jpg',
  judul: 'sejarah yg disembunyikan',
  harga: 120000,
  profilToko:false,
  namaToko:'alfa store',
  bintang: 4.5,
  logo:'photos/logo3.jpg',
  terjual: 2974
 },
 {
  cover:'buku/hiderabad.jpg',
  judul: 'sejarah peradaban hiderabad',
  harga: 206000,
  profilToko:false,
  namaToko:'alfa store',
  bintang: 6,
  logo:'photos/logo6.jpg',
  terjual: 2974
 },
 {
  cover:'buku/wujud.jpg',
  judul: 'wjud tanpa suara',
  harga: 300000,
  profilToko:false,
  namaToko:'alfa store',
  bintang: 2,
  logo:'photos/logo5.jpg',
  terjual: 2974
 },
 {
  cover:'buku/a.jpg',
  judul: 'seni sikap bodo amat',
  harga: 80000,
  profilToko:false,
  namaToko:'toko ijul',
  bintang: 1.9,
  logo:'photos/logo7.jpg',
  terjual: 2974
 },
 {
  cover:'buku/b.jpg',
  judul: 'sejarah kerajaan besar',
  harga: 26000,
  profilToko:false,
  namaToko:'alfa store',
  bintang: 2.3,
  logo:'photos/logo8.jpg',
  terjual: 2974
 },
 {
  cover:'buku/c.jpg',
  judul: 'sejarah yg disembunyikan',
  harga: 120000,
  profilToko:false,
  namaToko:'alfa store',
  bintang: 4.5,
  logo:'photos/logo3.jpg',
  terjual: 2974
 },
 {
  cover:'buku/d.jpg',
  judul: 'sejarah peradaban hiderabad',
  harga: 206000,
  profilToko:false,
  namaToko:'alfa store',
  bintang: 5.7,
  logo:'photos/logo6.jpg',
  rating: ranting(2.5),
  terjual: 29974
 },
 {
  cover:'buku/e.jpg',
  judul: 'wjud tanpa suara',
  harga: 300000,
  profilToko:false,
  namaToko:'alfa store',
  bintang: 4.4,
  logo:'photos/logo5.jpg',
  terjual: 2974
 }
]



function ranting(angka){
  if(angka < 2){
   return `
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang.png">
   <img src="photos/bintang.png">
   <img src="photos/bintang.png">
   <img src="photos/bintang.png">
   <img src="photos/bintang.png">
   `
  } else if(angka > 1.9 && angka < 3){
   return `
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang.png">
   <img src="photos/bintang.png">
   <img src="photos/bintang.png">
   <img src="photos/bintang.png">
   `
  } else if(angka > 2.9 && angka < 4){
   return `
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang.png">
   <img src="photos/bintang.png">
   <img src="photos/bintang.png">
   `
  } 
  else if(angka > 3.9 && angka < 5){
   return `
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang.png">
   <img src="photos/bintang.png">
  `
  }
  else if(angka > 4.9 && angka < 6){
   return `
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang.png">
  `
  }
  else if(angka > 5.9 && angka < 7){
   return `
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   <img src="photos/bintang-like-fil.png">
   `
  }
 }



const newData = daftarpBuku.sort(() => Math.random() - 0.5);


const containe = document.querySelector('.wadah .containert')

containe.innerHTML += `
 ${newData.map(b => {
  return `
 <div class="card-2">
 <span class="jilid"><img src="${b.cover}" class="pointer" height="100%" width="100%" alt="ini cover"></span>
 <div class="desk flex">
  <h3 class="judul">${b.judul}</h3>
  <span class="harga">${b.harga}</span>
  <div class="tombol flex">
   <button><a href="halaman_baca.html">baca</a></button>
   <button class="ranjang ran"></button>
   <button class="bintang baranang"></button>
  </div>
  <div class="profil-toko">
   <div class="flex align-items">
    <img src="${b.logo}" width="25px" class="profil">
    <h4 class="username">${b.namaToko}</h4>
   </div> 
   <div class="tulisan align-items flex">
    <h4 class="angka-bintang">${b.bintang}</h4>
    <div class="bintang btg align-items flex justify-between">
     ${ranting(b.bintang)}
    </div>
   </div>
    <span class="terjual">${b.terjual} terjual</span> 
  </div>
 </div>
</div>
  `
 }).join('')
}
 `


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


const love =Array.from(document.querySelectorAll('.bintang'))
for (let r = 0; r < love.length; r++) {
  love[r].addEventListener("click", (e)=>{
  //   alert('BUKU INI BERHASIL DI SIMPAN..')
     e.target.classList.toggle('love-active')
     
  } )
}



const ranjang = Array.from(document.querySelectorAll('.ranjang'))
for (let r = 0; r < ranjang.length; r++) {
  ranjang[r].addEventListener("click", (e)=>{
    e.target.classList.toggle('disimpan')
  })
}