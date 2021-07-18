import React from 'react';
import Head from 'next/head';
function Footer(){
    return(
         <div>
             <Head>
<script src="https://unpkg.com/@popperjs/core@2"></script>
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
<script src="https://kit.fontawesome.com/e18c502106.js" crossorigin="anonymous"></script>
</Head>
             <footer>
             <div className="appadd">
             <div className="container">
  <div className="row">
    <div className="col">
    <img src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp" alt="" />
    </div>
    <div className="col">
      <h1>TRY THE OLX APP</h1>
      <br />
      <p style={{fontFamily:'sans-serif',fontSize:'18px'}}>Buy, sell and find just about anything using the app on your mobile.</p>
    </div>
    <div className="col" id="ld">
        <p className="ap">Get your app today</p>
        <br />
        <div className="app-img">
        <img src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="" />
        <img src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" />
        </div>
    </div>
  </div>
</div>
      
             </div>
  <div className="row" id="mfc"> 
    
    <div className="col">
    <h5>POPULAR CATEGORIES</h5>
    <br />
      <p>Cars</p>
      <p>Flats for rent</p>
      <p>Mobile Phones</p>
      <p>Jobs</p>
    </div>
    <div className="col">
    <h5>TRENDING SEARCHES</h5>
    <br />
      <p>Bikes</p>
      <p>Watches</p>
      <p>Books</p>
      <p>Dogs</p>
    </div>
    <div className="col">
    <h5>ABOUT US</h5>
    <br />
      <p>About EMPG</p>
      <p>OLX Blog</p>
      <p>Contact Us</p>
      <p>OLX for Businesses</p>
    </div>
    <div className="col">
      <h5>OLX</h5>
      <br />
      <p>Help</p>
      <p>Sitemap</p>
      <p>legal and privacy</p>
      <p>information</p>
      </div>
      <div class="col">
      <h5>follow us</h5>
      <br />
      <img src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg" alt="" />
      <img src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="" />
      <img src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg" alt="" />
      <img src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg" alt="" />
      
      </div>
    </div>
             </footer>
         </div>
    )
}
export default Footer;