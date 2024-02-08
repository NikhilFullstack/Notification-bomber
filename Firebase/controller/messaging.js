const admin = require("firebase-admin")
const credentials = require("../friendify-b1bea-firebase-adminsdk-aqu5z-c17925718e.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

const messaging = admin.messaging();


exports.sendMessage = async (req,res)=>{
    try{
        const registrationTokens = [
            'c9dc7n4Lt8caadSJSt19nQ:APA91bGKwiV_TOhGmU2KoAXSJRb94etrI9cIBji3rPYBSX3-Ys_3y44Z1DteLTB-4JlvS8DDAFy2QzqjInaF3jiMb_VOs-GOHRC3ZIzNIMcT-Rcl6eyJaW3g9T8tWfq5lYo6ZHpk_ZKx',
            'egLZ_FEquQs7PpC945rE3I:APA91bHzGzQSipzRiyD-xD8kHMuVCRWJ4i9x_3XB6fCYlkLb3xSYH6f87nGpN1tuFTbjZcv4O23ryTWCrHSjiDlXbiD_I7TsIE-5Z6RDyxwIPeEoy8THnk-l4qcSMu5Atn35ym5A1g0L'  ];
        
            const topic = '/topics/MyTopic';
            // const responseArray = [];
            // for(const token of registrationTokens){
            //     const response = await messaging.sendToDevice(token, {
            //         data : {
            //             title: "Papa aa gye hn..",
            //             body: 'Maaadarchooodd',
            //             imageUrl: "https://w7.pngwing.com/pngs/963/291/png-transparent-one-piece-roronoa-zoro-roronoa-zoro-monkey-d-luffy-dracule-mihawk-one-piece-action-toy-figures-zoro-manga-piracy-cartoon.png"
            //         },
            //         topic: topic
            //     });
            //     responseArray.push(response);
            // }
            // console.log("successfully sent message:", responseArray);
       const response = await messaging.subscribeToTopic(registrationTokens, 
        topic);
        
        // See the MessagingTopicManagementResponse reference documentation
        // for the contents of response.
        console.log('Successfully subscribed to topic:', response);

        const message = {
            data: {
              score: '850',
              time: '2:45'
            },
            topic: topic
          };
          
          // Send a message to devices subscribed to the provided topic.
          const respon = await messaging.send(message)
          console.log("Message sent . ", respon);
        return res.status(200).json({
            success: true,
            message: "Notification successfully send",
            respon,
            response
        })
  }
    catch(err){
        console.error(err);
        return res.status(401).json({
            success: false,
            message: err.message,
        });
    }
}