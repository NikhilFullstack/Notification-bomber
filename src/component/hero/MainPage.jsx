import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { getMessaging } from 'firebase/messaging';
import { getToken } from 'firebase/messaging';
import 'firebase/messaging'
function MainPage() {
  const navigate = useNavigate();
  const logout = async ()=>{
    try{
      const response = await signOut(auth);
      console.log(response);
      navigate("/");
    }
    catch(err){
      console.error(err);
      alert(err.message)
    }
  }

// Request permission for receiving notifications
const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
        console.log('Notification permission granted.');
        // Retrieve FCM token
        const response = await getMessaging();
        const token = await getToken(response,{ vapidKey: 
          'BJiYOy5oabqYyTuWJoPEr2PHsnb6mCoYNObJbi0XSwmsvwMpiExEuon_cRIaZqU1s4mwFIs6UrE0iWkl7Scv9bo'});
        console.log('FCM Token:', token);
          // Send the token to your backend server for further use
        }
        else {
          console.log('Unable to get permission to notify.');
        }
    // Send the token to your backend server for further use
  } catch (error) {
    console.error('Unable to get permission to notify.', error);
  }
};
useEffect(()=>{
  requestNotificationPermission();
},[]);

const sendNotification = async (d)=>{
  try{
      var userResponse = await fetch(`https://schedule-notification.vercel.app/api/send`,
      {
          method: "GET",
      });

      userResponse = await userResponse.json();
      console.log(userResponse);
      if(userResponse.success === false){
        alert(userResponse.message);
      }
      else{
        // navigate("/main")
      }
     
  }
  catch(err){
      console.log(err,"message",err.message);
      alert(err.message);
  }
}




// // Add event listener to refresh token
// messaging.onTokenRefresh(() => {
//   messaging.getToken().then((refreshedToken) => {
//     console.log('Token refreshed:', refreshedToken);
//     // Send the refreshed token to your backend server for further use
//   }).catch((error) => {
//     console.error('Unable to retrieve refreshed token ', error);
//   });
// });


// // Send a message to devices subscribed to the provided topic.
// const sendFCM = async ()=>{
//   try{
//     const response = await getMessaging();
//     // .send(message);
//     const currentToken = await getToken(response, { vapidKey: 
//       'BJiYOy5oabqYyTuWJoPEr2PHsnb6mCoYNObJbi0XSwmsvwMpiExEuon_cRIaZqU1s4mwFIs6UrE0iWkl7Scv9bo'})
//         // Response is a message ID string.
//         console.log('Successfully got current token', currentToken);
        
//         console.log('Successfully sent message:', response);
//   }
//   catch(err){
//     console.error('Error sending message:',err);
//     alert(err.message);
//   }
// }
  return (
    <div>
      MAinPage
      <button onClick={logout} className='text-xl'>Logout</button>
      <div className='container'>
        <div>Notification data will receive here if the app is open and focused.</div>
        <div className='message min-h-20'></div>
        <div>Device Tooken: </div>
        <button onClick={sendNotification} className='text-xl'>Send Notification</button>
      </div>
    </div>
  )
}

export default MainPage
