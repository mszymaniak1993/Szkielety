import React from "react";
// import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import DonorDataService from "../../services/donor"

function DocRegister() {
  const[donname, setDname] = useState("");
  const[blood_type, setDbloodgroup] = useState("");
  const[doncity, setDcity] = useState("");
  const[dontel, setDtel] = useState("");
  const[donemail, setDemail] = useState("");
  const[donpass, setDpass] = useState("");
  
  function hashCode(string) {
    var hash = 0, i, chr;
    if (string.length === 0) return hash;
    for (i = 0; i < string.length; i++) {
      chr   = string.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  function test(){
    const valDname = /^[a-zA-Z]{1,}\s?[a-zA-Z]{1,}$/;
    const valDbloodgroup = /^A\+|A\-|A\-|B\+|B\-|AB\+|AB\-|0\+|0\-$/;
    const valDcity = /^[a-zA-Z]{1,}?\s|-?[a-zA-Z]{1,}$/;
    const valDtel = /^[0-9]{9}$/;
    const valDemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    const valDpass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
    var error = "Podano nieprawidłowe dane w: ";
    if (valDname.test(donname) && valDbloodgroup.test(blood_type) && valDtel.test(dontel) && valDcity.test(doncity) && valDemail.test(donemail) && valDpass.test(donpass) ){
      console.log("ok")
      var data = {
        name: donname,
        blood_type: blood_type,
        city: doncity,
        tel: dontel,
        email: donemail,
        pass: hashCode(donpass)
      }
  //     //TODO check post
      DonorDataService.createD(data)
      alert("Zarejestrowano pomyślnie")
      window.location.href = '/?resultReg=success';
    } else {
      console.log("wrong")
      if (!valDname.test(donname)) error += "danych dawcy "
      if (!valDbloodgroup.test(blood_type)) error += "grupie krwi "
      if (!valDtel.test(dontel)) error += "telefonie "
      if (!valDcity.test(doncity)) error += "miejscowości "
      if (!valDemail.test(donemail)) error += "mailu "
      if (!valDpass.test(donpass) ) error += "haśle"
      error += "."
      alert(error)
      //window.location.href = '/?resultReg=failed';
    }
  }
  
  return (
    <>
        <label class="text-muted font-weight-bold">Imię i Nazwisko Dawcy</label>
        <input type="text" title="Nazwa dwuczłonowa. Wpisz tylko litery" onChange={(e) => {setDname(e.target.value)}} name="donname" placeholder="Imię i Nazwisko Dawcy" class="form-control mb-3" required pattern="[a-zA-Z]{1,}\s?[a-zA-Z]{1,}"></input>
        <label class="text-muted font-weight-bold">Grupa krwi</label>
        <input type="text" title="Wybierz grupę krwi" name="blood_type" onChange={(e) => {setDbloodgroup(e.target.value)}} list="blood_type" placeholder="Grupa krwi" class="form-control mb-3" required></input>
            <datalist id="blood_type">
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="0+">0+</option>
                <option value="0-">0-</option>
            </datalist>
        <label class="text-muted font-weight-bold">Miejscowość</label>
        <input type="text" title="Wpisz tylko litery" name="doncity" onChange={(e) => {setDcity(e.target.value)}} placeholder="Miejscowość" class="form-control mb-3" required pattern="[a-zA-Z]{1,}\s?[a-zA-Z]{0,}"></input>
        <label class="text-muted font-weight-bold">Telefon</label>
        <input type="text" title="Wpisz tylko 9 cyfr bez spacji" name="dontel" onChange={(e) => {setDtel(e.target.value)}} placeholder="Telefon" class="form-control mb-3" required pattern="[0-9]{9}"></input>
        <label class="text-muted font-weight-bold">Email</label>
        <input type="email" title="Wpisz adres mailowy" name="donemail" onChange={(e) => {setDemail(e.target.value)}} placeholder="Email" class="form-control mb-3" required pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"></input>
        <label class="text-muted font-weight-bold">Hasło</label>
        <input type="password" title="Minimum 5 znaków, jedna duża litera, jedna mała, cyfra i znak specjalny" onChange={(e) => {setDpass(e.target.value)}} name="donpass" placeholder="Hasło" class="form-control mb-3" required pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$"></input>
        <input type="submit" name="donregister" value="Zarejestruj" class="btn btn-primary btn-block mb-4"  onClick={test}></input>
    </>
  );
}

export default DocRegister;
