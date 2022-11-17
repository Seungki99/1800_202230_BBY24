//change funtion name
function reservation() {
    //change ID name with is same with addvehicle that I mentioned
    let Licenseplate = document.getElementById("licenseplate").value;
    let Starttime = document.getElementById("starttime").value;
    let Endtime = document.getElementById("endtime").value;
    
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid)
            var userID = user.uid;
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    var userEmail = userDoc.data().email;
                    db.collection("reservation").add({
                        //removed code beacuse I didnt use the upper function from demo 10 review.js 
                        userID: userID,
                        //changed which is matched to the funtion that I let it in the upper funtion
                        licenseplate: Licenseplate,
                        starttime: Starttime,
                        endtime: Endtime,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    }).then(()=>{
                        //change location into account
                        window.location.href = "confirmation.html"; //new line added
                    })
                })
        } else {
            // No user is signed in.
        }
    });
}
