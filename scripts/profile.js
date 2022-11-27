var currentUser;

function populateInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userCity = userDoc.data().city;
                    var userPhoneNumber = userDoc.data().phonenumber;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                    }
                    if (userCity != null) {
                        document.getElementById("cityInput").value = userCity;
                    }
                    if (userPhoneNumber != null) {
                        document.getElementById("phonenumberInput").value = userPhoneNumber;
                    }
                })
        } else {
            // No user is signed in.
            console.log ("No user is signed in");
        }
    });
}

//call the function to run it 
populateInfo();

function editUserInfo() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
 }

 function saveUserInfo() {
    userName = document.getElementById('nameInput').value;      
    userCity = document.getElementById('cityInput').value;     
    userPhoneNumber = document.getElementById('phonenumberInput').value;       
    
    currentUser.update({
        name: userName,
        city: userCity,
        phonenumber: userPhoneNumber
        
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    
    document.getElementById('personalInfoFields').disabled = true;
}