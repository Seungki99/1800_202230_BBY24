function writeReview() {
    console.log("inside write review")
    let Description = document.getElementById("description").value;
    let Address = document.getElementById("address").value;
    let Geolocation = document.getElementById("geolocation").value;
    let Available = document.getElementById("available").value;
    let Vehicle = "none";
    db.collection("parkingspots").add({
        available: Available,
        description: Address,
        geolocation: Geolocation,
        image: Description,
        vehicle: Vehicle,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        window.location.href = "thanks.html"; //new line added
    })
}