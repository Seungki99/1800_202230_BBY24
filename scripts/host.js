let a = true;
let b = "I really hope this works";
let c = "url string i dont care";
let d = "Surrey"
let e = "NF195P"

 function writeReview() {
    console.log("inside write review")
    
    db.collection("parkingspots").add({
        available: a,
        description: b,
        geolocation: c,
        image: d,
        vehicle: e,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(()=>{
        window.location.href = "thanks.html"; //new line added
    })                    
}