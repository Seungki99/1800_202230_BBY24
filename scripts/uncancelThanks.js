let url_str = window.location.href;

let url = new URL(url_str);
let search_params = url.searchParams;
console.log("parking id is", search_params.get("id"));


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    let currentParkingSpotID = search_params.get("id");
    console.log("currentParkingSpotID", currentParkingSpotID);
    db.collection("parkingspots").doc("currentParkingSpotID");
    firebase
      .firestore()
      .collection("parkingspots")
      .doc(currentParkingSpotID)
      .update({
        renterID: null,
      });
    firebase
      .firestore()
      .collection("parkingspots")
      .doc(currentParkingSpotID)
      .update({
        date: 1,
      });
    firebase
      .firestore()
      .collection("parkingspots")
      .doc(currentParkingSpotID)
      .update({
        available: true,
      });
  }
});
