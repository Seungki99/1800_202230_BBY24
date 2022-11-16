function writeReview() {
    console.log("inside write review")
    let Description = document.getElementById("description").value;
    let Address = document.getElementById("address").value;
    let Geolocation = document.getElementById("geolocation").value;
    let Available = document.getElementById("available").value;
    let Vehicle = "none";
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          var currentUser = db.collection("users").doc(user.uid);
          var userID = user.uid;
          //get the document for current user.
          currentUser.get().then((userDoc) => {
            var userEmail = userDoc.data().email;
            db.collection("parkingspots")
              .add({
        available: Available,
        userID: userID,
        description: Address,
        geolocation: Geolocation,
        image: Description,
        vehicle: Vehicle,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        window.location.href = "thanks.html"; //new line added
    });
});
        } else {
            //no user is loggedin.
        }
    });
}
        