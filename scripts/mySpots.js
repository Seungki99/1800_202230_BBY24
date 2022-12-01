

function populateCardsDynamically() {
    let parkingspotCardTemplate = document.getElementById("parkingspotCardTemplate");
    let parkingspotCardGroup = document.getElementById("parkingspotCardGroup");
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var userID = user.uid;
            // let currentDate = Date.now();
            db.collection("parkingspots")
                .where("renterID", "==", userID).get()
                .then(allSpots => {
                    allSpots.forEach(doc => {
                        var parkid = doc.id;
                        var spotDescription = doc.data().description; //gets the name field
                        var spotID = doc.data().code; //gets the unique CODE field
                        var spotGeolocation = doc.data().geolocation; //gets the length field
                        var spotAvailable = doc.data().available;
                        let phoneNum = doc.data().phone;
                        let testspotCard = parkingspotCardTemplate.content.cloneNode(true);
                        testspotCard.querySelector('.card-available').innerHTML = spotGeolocation;
                        testspotCard.querySelector('.card-title').innerHTML = spotDescription; //equiv getElementByClassName
                        testspotCard.querySelector('.card-length').innerHTML = phoneNum; //equiv getElementByClassName
                        testspotCard.querySelector('a').setAttribute("href", "/add.html"+"?"+"id"+"="+parkid);
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