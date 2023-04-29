import React, { useState } from 'react';
import './EditProfilePage.css';

function EditProfilePage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };


  return (
    <div className="card">
      <div className="card-body">
        <div className="avatar">
          <img src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/338010911_638610751361721_8269449271916106870_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEiOyO_coROD3m_Dv-eaqULGTHakn0GqnkZMdqSfQaqeUmR-o9KntNDyIjhu6xVaTa9_xth6NcLjc-EfP0tTy8x&_nc_ohc=8fDk8Exe71sAX8JSgJP&_nc_ht=scontent.fmnl9-3.fna&oh=00_AfC2A_UV6SAGh3BuygAxeURUOMQ1ssoC3sh2kfAdmPaoAw&oe=64510189" alt="Avatar" />
        </div>
        <div>
          <h5 className="card-title">Edit Profile</h5>
          <form>
            <div className="form-group">
              <label htmlFor="firstName"></label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName"></label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender"></label>
              <select
                className="form-control"
                id="gender"
                value={gender}
                onChange={handleGenderChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber"></label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Phone Number"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
