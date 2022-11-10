function writeSpots() {
    var spotsRef = db.collection("spots");

    spotsRef.add({
        code:"WYBRN1"
        name: "202 Wayburne Dr",
        city: "Burnaby",

    })
}