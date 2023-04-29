import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from './firebase';



import { Card, Form, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterScreen = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [userRole, setUserRole] = useState('patient');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigate('/login');
      }
    });

    return unsubscribe;
  }, [navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("Passwords don't match");
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);

        firestore.collection('users').doc(user.uid).set({
          firstName,
          lastName,
          email,
          password,
          userRole,
        
        })
        .then(() => {
          console.log('User data saved to Firestore');
          // Navigate to the home page or a success page
        })
        .catch(error => {
          console.log(error);
          alert('Failed to save user data');
        });
      })
      .catch(error => console.log(error));
      
  };


  const handleRoleSelect = (role) => {
    setUserRole(role);
  };



  return (
    <div className="container c-flex justify-content-center align-items-center h-100">
    
      <Card>
        <Card.Header as="h3" className="text-center">
          Register
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={passwordConfirm}
onChange={e => setPasswordConfirm(e.target.value)}
/>
</Form.Group>

<Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {userRole === 'patient' ? 'Patient' : 'Doctor'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onSelect={() => handleRoleSelect('patient')}>
              Patient
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => handleRoleSelect('doctor')}>
              Doctor
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* <Button
          variant="primary"
          type="submit"
          onClick={handleLogin}
          className="mr-2"
        >
          Login
        </Button> */}
        <Button
          variant="outline-primary"
          type="submit"
          onClick={handleSignUp}
        >
          Register
        </Button>
      </Form>
    </Card.Body>
  </Card>
</div>
);
};

export default RegisterScreen;