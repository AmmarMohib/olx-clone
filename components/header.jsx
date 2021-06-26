import { React, useState } from 'react';
import Head from 'next/head';
import { render } from 'react-dom';
function Header() {
    const [location, setlocation] = useState('location');
    function change(e){
        console.log(e.target.outerText)
        setlocation(e.target.outerText);
    }
    return(
<div>
<Head>
<script src="https://unpkg.com/@popperjs/core@2"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</Head>
<header>
    <img className="logo" src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg" alt="" />
    <div className="d-flex">
  <div className="dropdown me-1">
    <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
 {location}
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
      <li style={{cursor:'grab'}} onClick={e=>change(e)}>lahore</li>
      <li style={{cursor:'grab'}} onClick={e=>change(e)}>karachi</li>
      <li style={{cursor:'grab'}} onClick={e=>change(e)}>other</li>
    </ul>
  </div>
  
</div>

<div id="inphead" class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input className="header-inp" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
</div>
<button type="button" id="lgnbtn" class="btn btn-primary">login</button>
<button type="button"id="slbtn" class="btn btn-primary">sell</button>
</header>
</div>
    )
}
export default Header;