import React, { useState } from 'react';
import './Form.css';
import Button from 'react-bootstrap/Button';

function Form() {
  const [position, setPosition] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [DOB, setDOB] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');



  const handleSubmit = () => {
    if ((position === "") || (position === undefined)) {
      alert('Please select position you want to apply for.')
    }

    else if (position === "-1") {
      alert('Please select position you want to apply for.')
    }

    else if ((firstname === "") || (firstname === undefined)) {
      alert('Please enter your first name.')
    }

    else if ((lastname === "") || (lastname === undefined)) {
      alert('Please enter your last name.')
    }

    else if ((citizenship === "") || (citizenship === undefined)) {
      alert('Please enter your citizenship.')
    }

    else if ((DOB === "") || (DOB === undefined)) {
      alert('Please enter your date of birth.')
    }

    else if ((address === "") || (address === undefined)) {
      alert('Please enter your address.')
    }

    else if ((zipcode === "") || (zipcode === undefined)) {
      alert('Please enter your city zipcode.')
    }

    else if ((city === "") || (city === undefined)) {
      alert('Please enter your city.')
    }

    else if ((phone === "") || (phone === undefined)) {
      alert('Please enter your mobile number.')
    }

    else if ((email === "") || (email === undefined)) {
      alert('Please enter your E-mail ID.')
    }

    else {
      var a = window.confirm("Are you sure, you want to Submit the application ?");
      // console.log(a)
      if (a === true) {
        window.alert('Your application have been submitted successfully.')
        setPosition('');
        setFirstname('')
        setLastname('')
        setCitizenship('');
        setDOB('');
        setAddress('');
        setZipcode('');
        setCity('');
        setPhone('');
        setEmail('');
        setResume('')
      }
      else {

      }
    }

  }



  return (
    <React.Fragment>
      <br />
      <form action="SEND ADDRESS" id="ft-form" method="POST" acceptCharset="UTF-8" encType="multipart/form-data">
        <fieldset>
          <center> <legend className='job_heading'>Job Application Form</legend></center> <br />
          <label>
            Application for *
            <select name="Application for" value={position} onChange={(e) => setPosition(e.target.value)} required>
              <option defaultValue='-1' aria-checked>--Select Position--</option>
              <option defaultValue='UI/UX Designer'>UI/UX Designer</option>
              <option defaultValue='Shopify Developer'> Shopify Developer</option>
              <option defaultValue='WooCommerce Developer'> WooCommerce Developer</option>
              <option defaultValue='Magento Developer'> Magento Developer</option>
              <option defaultValue='BigCommerce Deveueloper'> BigCommerce Developer</option>
            </select>
          </label>
        </fieldset>
        <fieldset>
          <legend>Personal data</legend>
          <div className="two-cols">
            <label>
              First name *
              <input type="text" name="First name" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} required />
            </label>
            <label>
              Last name *
              <input type="text" name="Last name" value={lastname} onChange={(e) => { setLastname(e.target.value) }} required />
            </label>
          </div>
          <div className="two-cols">
            <label>
              Citizenship
              <input type="text" name="Citizenship" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </label>
            <label>
              Date of birth
              <input type="date" name="Date of birth" value={DOB} onChange={(e) => setDOB(e.target.value)} />
            </label>
          </div>
          <label>
            Address
            <input type="text" name="Address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
          </label>
          <div className="two-cols">
            <label>
              ZIP Code
              <input type="text" name="ZIP" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            </label>
            <label>
              City
              <input type="text" name="City" value={city} onChange={(e) => setCity(e.target.value)} />
            </label>
          </div>
          <div className="two-cols">
            <label>
              Phone *
              <input type="tel" name="Phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label>
              Email address *
              <input type="email" name="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Application documents</legend>
          <input type="hidden" name="MAX_FILE_SIZE" defaultValue="10485760" value={resume} onChange={(e) => setResume(e.target.value)} />



          <p>Possible file types: DOC, PDF. Maximum file size: 10 MB.</p> <br />
          <label className='d1'> Resume</label>
          <input type='file' name='cv' accept='.doc,.docx,.pdf' />


        </fieldset>
        <div className="btns">
          <input type="text" name="_gotcha" defaultValue="" style={{ display: "none" }} />
          {/* <input type="submit" defaultValue="Submit application" /> */}
          <Button variant="info" onClick={handleSubmit}>Submit Application</Button>{' '}
        </div>
      </form>
      <br />
    </React.Fragment>
  );
}

export default Form;

