function populateCardsDynamically() {
    let parkingspotCardTemplate = document.getElementById("parkingspotCardTemplate");
    let parkingspotCardGroup = document.getElementById("parkingspotCardGroup");
    let currentDate = Date.now();
    console.log("current time stamp is)", currentDate);
    db.collection("parkingspots")
        .where("date", "<", currentDate)
        .get()
        .then(allSpots => {
            allSpots.forEach(doc => {
              console.log("date");
              console.log("doc.data() is", doc.data());
              let parkid = (doc.id);
                var spotDescription = doc.data().description; //gets the name field
                var spotID = doc.data().code; //gets the unique CODE field
                console.log("spotID is ", spotID);
                var spotGeolocation = doc.data().geolocation; //gets the length field
                let testspotCard = parkingspotCardTemplate.content.cloneNode(true);
                console.log('the testspotCard is ', testspotCard);
                console.log("the doc.id now id of card is", doc.id);
                
                
                testspotCard.querySelector('.card-title').innerHTML =spotGeolocation;     //equiv getElementByClassName
                testspotCard.querySelector('.card-length').innerHTML =spotDescription;  //equiv getElementByClassName
                testspotCard.querySelector('a').setAttribute("href", "/book.html"+"?"+"id"+"="+parkid);
                // testspotCard.querySelector('a').onclick = () => setHikeData(spotID);//equiv getElementByTagName
                // testspotCard.querySelector('img').src = `./images/${spotID}.jpg`;   //equiv getElementByTagName
                parkingspotCardGroup.appendChild(testspotCard);
            })

        })
}
populateCardsDynamically();

function setSpotData(id){
  console.long('the id spot id', id)
    localStorage.setItem ('spotID', id);
}

