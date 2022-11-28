//firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//       getBookmarks(user)// calls the function if signed in
//   } else {
//       console.log("No user is signed in");
//   }
//});

function populateCardsDynamically() {
    let parkingspotCardTemplate = document.getElementById("parkingspotCardTemplate");
    let parkingspotCardGroup = document.getElementById("parkingspotCardGroup");
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var userID = user.uid;
            db.collection("parkingspots")
                .where("userID", "==", userID).get()
                .then(allSpots => {
                    allSpots.forEach(doc => {
                        var spotDescription = doc.data().description; //gets the name field
                        var spotID = doc.data().code; //gets the unique CODE field
                        var spotGeolocation = doc.data().geolocation; //gets the length field
                        var spotAvailable = doc.data().available;
                        let testspotCard = parkingspotCardTemplate.content.cloneNode(true);
                        testspotCard.querySelector('.card-available').innerHTML = spotGeolocation;
                        testspotCard.querySelector('.card-title').innerHTML = spotDescription; //equiv getElementByClassName
                        testspotCard.querySelector('.card-length').innerHTML = spotAvailable; //equiv getElementByClassName
                        testspotCard.querySelector('a').onclick = () => setHikeData(spotID); //equiv getElementByTagName
                        // testspotCard.querySelector('img').src = `./images/${spotID}.jpg`; //equiv getElementByTagName
                        parkingspotCardGroup.appendChild(testspotCard);
                    })

                })
        }
    })
}
populateCardsDynamically();

function setSpotData(id) {
    localStorage.setItem('spotID', id);
}