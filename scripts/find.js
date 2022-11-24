
function populateCardsDynamically() {
    let parkingspotCardTemplate = document.getElementById("parkingspotCardTemplate");
    let parkingspotCardGroup = document.getElementById("parkingspotCardGroup");
    
    db.collection("parkingspots")
        .where("available", "==", "true")
        .get()
        .then(allSpots => {
            allSpots.forEach(doc => {
                var spotDescription = doc.data().description; //gets the name field
                var spotID = doc.data().code; //gets the unique CODE field
                var spotGeolocation = doc.data().geolocation; //gets the length field
                let testspotCard = parkingspotCardTemplate.content.cloneNode(true);
                testspotCard.querySelector('.card-title').innerHTML = spotDescription;     //equiv getElementByClassName
                testspotCard.querySelector('.card-length').innerHTML = spotGeolocation;  //equiv getElementByClassName
                testspotCard.querySelector('a').onclick = () => setHikeData(spotID);//equiv getElementByTagName
                testspotCard.querySelector('img').src = `./images/${spotID}.jpg`;   //equiv getElementByTagName
                parkingspotCardGroup.appendChild(testspotCard);
            })

        })
}
populateCardsDynamically();

function setSpotData(id){
    localStorage.setItem ('spotID', id);
}
