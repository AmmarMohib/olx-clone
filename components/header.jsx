import { React, useState } from 'react';
import Head from 'next/head';
import { render } from 'react-dom';
function Header() {
    const [location, setlocation] = useState('location');
    function al(){
      alert("please login to sell")
    }
    function change(e){
        console.log(e.target.outerText)
        setlocation(e.target.outerText);
    }
    return(
<div>
<Head>
<script src="https://unpkg.com/@popperjs/core@2"></script>
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
<script src="https://kit.fontawesome.com/e18c502106.js" crossorigin="anonymous"></script>
</Head>
<header>
    <img className="logo" src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg" alt="" />
    <div className="d-flex">
  <div className="dropdown me-1">
    <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="true" data-bs-offset="10,20">
      <div className="i-d">
<i className="fas fa-search"></i>
</div>
 {location}
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
      <li style={{cursor:'grab'}}>lahore</li>
      <li style={{cursor:'grab'}} >karachi</li>
      <li style={{cursor:'grab'}} >other</li>
    </ul>
  </div>
  
</div>

<div id="inphead" class="input-group mb-3">
  <input className="header-inp" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
  <div className="s-i">
<i className="fas fa-search"></i>
</div>
</div>
<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <br />
      <br />
      <img className="usrimg" src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="" />
      <br />
      <p>Save all your favorite items in one place</p>
      <br />
      <button type="button" class="btn btn-outline-secondary">continue with phone</button>
      <br />
      <button type="button" class="btn btn-outline-secondary">continue with google</button>
      <br />
      <button type="button" class="btn btn-outline-secondary">continue with facebook</button>
      <br />
      <button type="button" class="btn btn-outline-secondary">continue with email</button>
      <br />
      <p>We won't share your personal details with anyone.</p>
      <p>If you continue, you are accepting OLX Terms <br /> and Conditions and Privacy Policy</p>
    </div>
  </div>
</div>
<a id="lgnbtn" class="" data-bs-toggle="modal" href="#exampleModalToggle" role="button">login</a>
<button type="button"id="slbtn" class="btn btn-primary" onClick={al}>sell</button>

</header>

</div>
    )
}
export default Header;