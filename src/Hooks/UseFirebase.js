import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "./../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    // console.log(email, password);
    isLoading ? processLogin(email, password) : createNewUser(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (isLogin) {
      processLogin(email, password);
    }
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        setUserName();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("You are already registered!");
      });
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError("You have already ");
      });
  };

  const signInUsingGoogle = () => {
    // setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider);
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut,
    error,
    isLogin,
    toggleLogin,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    handleNameChange,
  };
};

export default useFirebase;
