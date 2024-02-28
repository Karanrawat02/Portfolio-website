import React from 'react'
import '../components/Home.css';

function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-none " >
        <div class="container-fluid">
            <a class="navbar-brand text-white" href="#home">Karan Rawat</a>
            <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav ">
                <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#home">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href="#aboutme">About me</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href="#project">Projects</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" aria-disabled="true" href="#contactme">Contact us</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar;
