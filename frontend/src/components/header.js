import React from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../images/logo.jpg"

//linijki 18 - 28 header dla banku krwi
//linijki 29 - 36 header dla dawcy
//linijki 37 - 44 dla niezalogowanego usera
function Header() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top">
    <div class="container">
        <Link to="/" class="navbar-brand">
            <img src = {logo} width = {50} height={50}/>System banku krwi
        </Link>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="bbPage.php">Lista donacji</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="bbAddBlood.php">Dodaj donację</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="logout.php">Wyloguj</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="donorPage.php">Mój profil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="logout.php">Wyloguj</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="register.php">Zarejestruj się</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="login.php">Zaloguj się</a>
                    </li>
                </ul>
        </div>
    </div>
</nav>
  );
}

export default Header;