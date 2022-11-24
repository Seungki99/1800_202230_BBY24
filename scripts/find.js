function writeparkingspots() {
  //define a variable for the collection you want to create in Firestore to populate data
  var spotsRef = db.collection("parkingspots");

  spotsRef.add({
    code: "AB01",
    available: "true",
    description: "I really hope this works", //replace with your own city?
    geolocation: "url string, I don't care",
    timestamp: "easy",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
  spotsRef.add({
    code: "AB02",
    available: "true",
    description: "I really hope this works",
    geolocation: "url string, I don't care",
    timestamp: "easy",
    vehicle: "NF195P",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
  spotsRef.add({
    code: "AB03",
    available: "true",
    description: "I really hope this works",
    geolocation: "url string, I don't care",
    timestamp: "easy",
    vehicle: "NF195P",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
  spotsRef.add({
    code: "AB04",
    available: "true",
    description: "I really hope this works",
    geolocation: "url string, I don't care",
    timestamp: "easy",
    vehicle: "NF195P",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
  spotsRef.add({
    code: "AB05",
    available: "true",
    description: "I really hope this works",
    geolocation: "url string, I don't care",
    timestamp: "easy",
    vehicle: "NF195P",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
  spotsRef.add({
    code: "AB06",
    available: "true",
    description: "I really hope this works",
    geolocation: "url string, I don't care",
    timestamp: "easy",
    vehicle: "NF195P",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
  spotsRef.add({
    code: "AB07",
    available: "true",
    description: "I really hope this works",
    geolocation: "url string, I don't care",
    timestamp: "easy",
    vehicle: "NF195P",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
  spotsRef.add({
    code: "AB08",
    available: "true",
    description: "I really hope this works",
    geolocation: "Burnaby",
    timestamp: "easy",
    vehicle: "NF195P",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
}
function populateCardsDynamically() {
    let parkingspotCardTemplate = document.getElementById("parkingspotCardTemplate");
    let parkingspotCardGroup = document.getElementById("parkingspotCardGroup");
    let currentDate = Date();
    db.collection("parkingspots")
        .where(("available", "==", true) && "date", "<=", currentDate)
        .get()
        .then(allSpots => {
            allSpots.forEach(doc => {
              
              console.log("doc.data() is", doc.data());
              let parkid = (doc.id);
                var spotDescription = doc.data().description; //gets the name field
                var spotID = doc.data().code; //gets the unique CODE field
                console.log("spotID is ", spotID);
                var spotGeolocation = doc.data().geolocation; //gets the length field
                let testspotCard = parkingspotCardTemplate.content.cloneNode(true);
                console.log('the testspotCard is ', testspotCard);
                console.log("the doc.id now id of card is", doc.id);
                
                
                testspotCard.querySelector('.card-title').innerHTML = spotDescription;     //equiv getElementByClassName
                testspotCard.querySelector('.card-length').innerHTML = spotGeolocation;  //equiv getElementByClassName
                testspotCard.querySelector('a').setAttribute("href", "/book.html"+"?"+"id"+"="+parkid);
                testspotCard.querySelector('a').onclick = () => setHikeData(spotID);//equiv getElementByTagName
                testspotCard.querySelector('img').src = `./images/${spotID}.jpg`;   //equiv getElementByTagName
                parkingspotCardGroup.appendChild(testspotCard);
            })

        })
}
populateCardsDynamically();

function setSpotData(id){
  console.long('the id spot id', id)
    localStorage.setItem ('spotID', id);
}
