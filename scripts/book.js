function reservation() {
  let endOfReservation = document.getElementById("endtime").value;
  console.log(endOfReservation);
  let date_Num = new Date(endOfReservation).getTime();
  console.log(date_Num);

  console.log("you are in reservation");

  let Licenseplate = document.getElementById("licenseplate").value;
  let Endtime = document.getElementById("endtime").value;
  console.log("this is licenseplate", Licenseplate);
  console.log("this is endtime", Endtime);
  console.log(typeof Endtime);

  let url_str = window.location.href;

  let url = new URL(url_str);
  let search_params = url.searchParams;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var userID = user.uid;
      console.log("this is user ID.", userID);
      let currentParkingSpotID = search_params.get("id");
      console.log("currentParkingSpotID", currentParkingSpotID);
      const parkingref = db
        .collection("parkingspots")
        .doc("currentParkingSpotID");
      firebase
        .firestore()
        .collection("parkingspots")
        .doc(currentParkingSpotID)
        .update({
          renterID: userID
        });
      firebase
        .firestore()
        .collection("parkingspots")
        .doc(currentParkingSpotID)
        .update({
          date: date_Num
        });
    }
  });
  setTimeout(() => {
    window.location.replace("./mySpots.html");
  }, "1000");
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};