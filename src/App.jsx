import firebase from './utils/firebase';
import { GoogleAuthProvider, getAuth, getRedirectResult, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';

import './App.css';

const App = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) setUser(user);
    });
  }, []);

  const handleGoogleSignInWithRedirect = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleGoogleSignInWithPopup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      setUser(false);
    } catch (error) {
      console.log(error);
      alert('An error occured !');
    }
  };

  return (
    <div className='App'>
      { user &&
        <div>
          <h1>Hello {user.displayName} !</h1>
          <button className='logout-btn' onClick={handleSignOut}>
            Se déconnecter
          </button>
        </div>
      }

      { !user &&
        <div className='login'>
          <div className='btn-container'>
            <button className='google-sign-in' onClick={handleGoogleSignInWithRedirect}>
              Se connecter avec Google (signInWithRedirect)
            </button>
          </div>

          <div className='btn-container'>
            <button className='google-sign-in' onClick={handleGoogleSignInWithPopup}>
              Se connecter avec Google (signInWithPopup)
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default App;
