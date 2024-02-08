import React, { useEffect } from 'react'
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

function RedirectPage() {
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            // User is authenticated, redirect to home page if not already there
            if (window.location.pathname !== "/main") {
              navigate("/main");
            }
          } else {
            // User is not authenticated, redirect to login page
            navigate("/login");
          }
        });
      
        return () => unsubscribe(); // Cleanup on unmount
      }, []);
  return (
    <div>
      
    </div>
  )
}

export default RedirectPage
