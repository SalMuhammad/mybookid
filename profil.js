const beranda = document.getElementById('profil')
const footer = document.querySelector('.footer')

  
 const  profil = `
<!-- bagain profile -->
<div class="jumbotron">
 <div class="profil"></div>
 <div class="nama">
  <h3>alwi amirullah</h3>
  <h4>member gold</h4>
 </div>
</div>

<!-- bagian nav-atas -->
<section class="nav-atas">
 <div class="pesanan-saya capitalize">
  <div class="wadah">
   <div class="flex justify-between align-items align">
    <div class="icon-papan flex align-items">
     <img src="photos/pesan-saya.png" alt="">
     <h4>pesanan saya</h4>
    </div>
    <span> lihat riwayat pesanan ></span>
   </div>
  </div>
 </div>
</section>
<!-- akhir nav-atas -->

<section>
 <div class="pesanan-saya capitalize">
 <div class="wadah">
  <div>
   <div class="nav-bar align">
    <div class="items">
     <img src="photos/belum-dibayar.png" alt="">
     <span>belum dibayar</span>
    </div>
    <div class="items">
     <img src="photos/dikemas.png" alt="">
     <span>belum dibayar</span>
    </div>
    <div class="items">
     <img src="photos/dikirim.png" alt="">
     <span>belum dibayar</span>
    </div>
    <div class="items">
     <img src="photos/beri-penilayan.png" alt="">
     <span>belum dibayar</span>
    </div>
   </div>
  </div>
 </div>
</section>
<!-- akhir profile -->


<!-- bagian toko saya -->
<section class="toko-saya">
 <div class="wadah">
  <div class="navigasi">
   <img src="photos/toko.png" alt="">
   <span>toko saya</span>
   <span>toko</span>
  </div>
 </div>
</section>
<!-- akhir toko saya -->


<!-- nav-bar toko saya -->
<section class="nav-tokosaya">
 <div class="wadah">
  <div class="nav-bar">
   <div class="items">
    <img src="photos/belum-dibayar.png" alt="">
    <span>produk baru</span>
   </div>
   <div class="items">
    <img src="photos/dikemas.png" alt="">
    <span>prososi toko</span>
   </div>
   <div class="items">
    <img src="photos/dikirim.png" alt="">
    <span>penilayan toko</span>
   </div>
  </div>
 </div>
</section>
<!-- akhir nav-bar toko saya -->


<!-- opsi -->
<section class="opsi">
 <div class="wadah capitalize">
  <div class="nanav ">
   <span>silahkan pilih opsi</span>
  </div>
  <ul>
   <li><img src="photos/pengaturan-akun.png" alt=""></li> <span>pengaturan akun</span>
   <li><img src="photos/pusan-bantuan.png" alt=""></li> <span>pusat-bantuan</span>
   <li><img src="photos/log-out.png"> <span>log-out</span></li>
  </ul>
 </div>
</section>
<!-- akhir opsi -->



`

footer.addEventListener('click',function(e){
 if(e.targer.className == 'akun'){
  beranda.innerHTML += profil
  console.log(e.target)
   }
})

