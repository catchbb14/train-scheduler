
    //Initialize Firebase
    var config = {
        apiKey: "AIzaSyCGkjbLLE7oypjbZ_1hRbkveQOZZXsYjn8",
        authDomain: "train-project-11b03.firebaseapp.com",
        databaseURL: "https://train-project-11b03.firebaseio.com",
        projectId: "train-project-11b03",
        storageBucket: "train-project-11b03.appspot.com",
        messagingSenderId: "681244605359"
    };
  
    firebase.initializeApp(config);
    //Initialize Database
    var database = firstbase.database();

    //Capture User Input
    $(document).on("click", "button", function(event) {
        
        event.preventDefault();

        var name = $("#newName").val().trim();
        var destination = $("#newDestination").val().trim();
        var firstTrain = $("#newFirstTrain").val().trim();
        var frequency = $("#newFrequency").val().trim();
        
        //Validate Input
        if(moment(date, 'HH:mm', true).isValid()) {
            dataRef.ref('trains/').set({
                dbName: name,
                dbDest: destination,
                dbFirst: firstTrain,
                dbFreq: frequency,
                dateAdded: firebase.database.ServerValue.TIMESTAMP
            });
        } else {
            alert("Invalid initial start time, check your format and try again.");
        }
        
        //Clear Input Fields
        $("#newName").val("");
        $("#newDestination").val("");
        $("#newFirstTrain").val("");
        $("#newFrequency").val("");
    });
    