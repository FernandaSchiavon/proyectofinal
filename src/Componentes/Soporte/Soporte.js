import React from "react";
import './Soporte.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Soporte = () => {
    return(
        <div>
            <h1> Soporte </h1>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">home tab esta aqui</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">profile tab </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">contact tab</div>
</div>
        </div>
    );
};

export default Soporte