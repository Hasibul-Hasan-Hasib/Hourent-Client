import app from '@/firebase/firebase.config';
import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import Swal from 'sweetalert2';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // Credentials SignUp
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Credentials SignIn
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Update User Profile
  const updateUserProfile = updatedData => {
    return updateProfile(auth.currentUser, updatedData);
  };
  // Reset Password
  const passwordResetEmail = email => {
    return sendPasswordResetEmail(auth, email);
  };
  // Logout
  const logOut = () => {
    localStorage.removeItem('loginAttempt');
    return signOut(auth);
  };
  // Google SignIn
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Github SignIn
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // On Auth State Change
  useEffect(() => {
    setLoading(true);

    const unsubscribe = onAuthStateChanged(auth, async currentUser => {
      if (currentUser) {
        localStorage.removeItem('loginAttempt');
        
        // Set Users
        setUser(currentUser);
        setLoading(false);

      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Exported Auth Info
  const authInfo = {
    user,
    createNewUser,
    logOut,
    userLogin,
    updateUserProfile,
    passwordResetEmail,
    signInWithGoogle,
    signInWithGithub,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;