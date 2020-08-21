import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, database } from "../misc/firebase";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let userRef;
    const authUnSub = auth.onAuthStateChanged((authObj) => {
      if (authObj) {
        userRef = database.ref(`/profiles/${authObj.uid}`);

        userRef.on("value", (snap) => {
          const profileData = snap.val();
          const data = {
            ...profileData,
            uid: authObj.uid,
            email: authObj.email,
          };
          setProfile(data);
          setIsLoading(false);
        });
      } else {
        if (userRef) {
          userRef.off();
        }
        setProfile(null);
        setIsLoading(false);
      }
    });

    return () => {
      authUnSub();
      if (userRef) {
        userRef.off();
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, isLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  return context;
};
