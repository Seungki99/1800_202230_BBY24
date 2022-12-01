function insertName(){
  // to check if the user is logged in:
   firebase.auth().onAuthStateChanged(user =>{
       if (user){
           console.log(user.uid); // let me to know who is the user that logged in to get the UID
          currentUser = db.collection("users").doc(user.uid); // will to to the firestore and go to the document of the user
          currentUser.get().then(userDoc=>{
              //get the user name
              var user_Name= userDoc.data().name;
              console.log(user_Name);
              $("#name-goes-here").text(user_Name); //jquery
              // document.getElementByID("name-goes-here").innetText=user_Name;
          })    
      }
  
   })
  }
  insertName();

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

