import React, { useState, useEffect } from 'react';
import {auth, firestore,} from '../firebase';
import { useNavigate } from 'react-router-dom';

function PatientInfo({id}) {
  const [users, setUsers] = useState([]);


   useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;

      if (currentUser) {
        const userRef = firestore.collection('users').doc(id);
        const userDoc = await userRef.get();

        if (userDoc.exists) {
          const userData = userDoc.data();
          setUsers(userData);
        } else {
          console.log('User not found');
        }
      }
    };

    fetchUserData();
  },);

  return (
    <div>
    <p>{users.firstname}</p>
    </div>
  );
}

function PatientImage({id}) {
  const [users, setUsers] = useState([]);


   useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;

      if (currentUser) {
        const userRef = firestore.collection('users').doc(id);
        const userDoc = await userRef.get();

        if (userDoc.exists) {
          const userData = userDoc.data();
          setUsers(userData);
        } else {
          console.log('User not found');
        }
      }
    };

    fetchUserData();
  },);

  return (
    <div>
        <img className='w-25' src={users.imageUrl} alt="My Image" />  
    </div>
  );
}



function AllUsers({id}) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllUsers = async () => {
      const usersRef = firestore.collection('appointments');
      const usersSnapshot = await usersRef.get();

      const usersData = usersSnapshot.docs.map((appointment) => ({
        id: appointment.id,
        ...appointment.data()
      })).filter((user) => user.docId === id && user.status === 'ongoing');

      setUsers(usersData);
    };

    fetchAllUsers();
  },);



  return (
    <div>
    <h3 className='mt-4'>Upcoming Appointments</h3>
    <ul className='text-center list-unstyled row w-100'>
        {users.map((user) => (
        <li key={user.id} className='col-6 p-2'>
            <button className="btn border" onClick={() => navigate(`/patientDetails/?patientId=${user.patientId}&month=${user.month}&day=${user.day}&year=${user.year}&time=${user.time}&appointmentId=${user.id}`)}>
        <div className='row '>
            <div className='col-12 col-lg-6'>
            <PatientImage id={user.patientId}/>
            </div>
            <div className='col'>
            <PatientInfo id={user.patientId}/>
            <p>{user.month} {user.day}, {user.year}</p>
            <p>{user.time}</p>
            </div>
        </div>
          </button>
        </li>
        ))}
    </ul>
    </div>
  );
}


function HomeDoctor() {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [id, setID] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;

      if (currentUser) {
        const userRef = firestore.collection('users').doc(currentUser.uid);
        const userDoc = await userRef.get();

        if (userDoc.exists) {
          const userData = userDoc.data();
          setUser(userData);
          setID(currentUser.uid);
        } else {
          console.log('User not found');
        }
      }
    };

    fetchUserData();
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="container mt-5">
        
      <h1>Hi, Dr. {user.lastname} {user.firstname}</h1>
      <div className='row'>
        <AllUsers id={id}/>
        
        <button onClick={handleSignOut}>Sign out</button>
      </div>
      
    </div>
  );
}






export default HomeDoctor;