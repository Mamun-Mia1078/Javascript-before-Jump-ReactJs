const hasMeeting = false;

const meeting = new Promise((resolve,reject) => {
    if(!hasMeeting){
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Rabindra Sorobor, Dhanmondi",
            time: "11/6/22, 5:00pm"
        };
        resolve(meetingDetails) ;
    } else {
        reject(new Error ("Meeting already Scheduled"));
    }
});
meeting 
.then((res)=>{
    console.log(JSON.stringify(res));
})
.catch((err)=>{
    console.log(err.message);
})