let url_str = window.location.href;

  let url = new URL(url_str);
  let search_params = url.searchParams;
  console.log("the id in url is", search_params.get("id"));
  let value = search_params.get("id");
  if (value != null) {

    
      
  
  function getAvailable(value) {
    return (db.collection("parkingspots").doc(value).get("available"));
  }
  function printAvailable(myCallback) {
    console.log("this is the callback", myCallback);
  }
  
  printAvailable(getAvailable);
  }

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
                        var parkid = doc.id;
                        var spotDescription = doc.data().description; //gets the name field
                        var spotID = doc.data().code; //gets the unique CODE field
                        var spotGeolocation = doc.data().geolocation; //gets the length field
                        var spotAvailable = doc.data().available;
                        let testspotCard = parkingspotCardTemplate.content.cloneNode(true);
                        testspotCard.querySelector('.card-available').innerHTML = spotGeolocation;
                        testspotCard.querySelector('.card-title').innerHTML = spotDescription; //equiv getElementByClassName
                        testspotCard.querySelector('.card-length').innerHTML = spotAvailable; //equiv getElementByClassName
                        testspotCard.querySelector('#cancel').setAttribute("href", "/cancelThanks.html"+"?"+"id"+"="+parkid);
                        testspotCard.querySelector('#uncancel').setAttribute("href", "/uncancelThanks.html"+"?"+"id"+"="+parkid);
                        // testspotCard.querySelector('a').onclick = () => setHikeData(spotID); //equiv getElementByTagName
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