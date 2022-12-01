function writeReview() {
    console.log("inside write review")
    let Description = document.getElementById("description").value;
    let Address = document.getElementById("address").value;
   
    
    let Geolocation = document.getElementById("geolocation").value;
    let Available = document.getElementById("available").value;
    let owner_phone = document.getElementById("phone").value;

    if (Available == "Yes!") {
        Available = true;
    }

  
    let Vehicle = "none";
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          var currentUser = db.collection("users").doc(user.uid);
          var userID = user.uid;
          console.log("this is userID", userID);
          //get the document for current user.
          currentUser.get().then((userDoc) => {
            var userEmail = userDoc.data().email;
            timeDateStamp = Date.now();
            db.collection("parkingspots")
              .add({
        available: Available,
        userID: userID,
        description: Description,
        geolocation: Address,
        image: Description,
        vehicle: Vehicle,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        date: timeDateStamp,
        phone: owner_phone,
        renterID: "none"
    }).then(() => {
        window.location.href = "thanks.html"; //new line added
    });
});
        } else {
            //no user is loggedin.
        }
    });
}
        