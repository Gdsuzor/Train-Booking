let points = 0;

let tripFare = {
    Economy: 25,
    Premium: 60,
    ecoPremium: 70,
    preEconomy: 50,
    minorFee: 15,
    adultFee: 30,
}
let enterName = ""
let tripType = ""
let tripClass = ""
let travellingFrom = ""
let travellingTo = ""
let dateOfBirth = ""
let departureDate = ""
let returnDate = ""


function validateName() {
    enterName = document.getElementById('enterName');
    let nameValue = enterName.value;

    if (nameValue === "" || /\d/.test(nameValue)) {
        enterName.classList.add('invalid-input');
        let nameError = document.getElementById('nameError');
        nameError.textContent = 'Please enter a valid name';
        nameError.style.color = "red";
        return false;
    } else {
        enterName.classList.remove('invalid-input');
        document.getElementById('nameError').textContent = '';
        console.log("Name validated successfully:", nameValue);
        return true;
    }
}


function validateTripType() {

    let typeOfTrip = document.getElementById("typeOfTrip").value;
    let oneWayTrip = document.getElementById("oneWay").value;
    let roundTrip = document.getElementById("roundTrip").value;
    let typeOfClass = document.getElementById("typeOfClass").value;

    if (typeOfTrip === oneWayTrip && typeOfClass === "economy") {
        tripFare.Economy = 300;
        console.log(tripFare.Economy);
    } else if (typeOfTrip === roundTrip && typeOfClass === "premium") {
        tripFare.Premium = 600;
        console.log(tripFare.Premium);
    } else if (typeOfTrip === oneWayTrip && typeOfClass === "premium") {
        tripFare.ecoPremium = 400;
        console.log(tripFare.ecoPremium);
    } else if (typeOfTrip === roundTrip && typeOfClass === "economy") {
        tripFare.preEconomy = 450;
        console.log(tripFare.preEconomy);
    } else {
        let tripTypeError = document.getElementById('tripTypeError');
        let tripClassError = document.getElementById('tripClassError');
        tripTypeError.textContent = 'Please enter a valid type of trip';
        tripClassError.textContent = "please enter a valid class of flight";
        tripTypeError.style.color = "red"
        tripClassError.style.color = "red"
    }
    tripType = typeOfTrip;
    tripClass = typeOfClass;

}


    let travelRoute = {
        Sanjuan: 20,
        SanFernando: 25,
        Baguio: 30,
        IlocosSur: 35,
        IlocosNorte: 40,
        Hundredisland: 45,
    }


function validateTravelFrom() {
    let travelFrom = document.getElementById("travelFrom").value;

    let sanJuan = document.getElementById("sanJuan").value;
    let sanFernando = document.getElementById("sanFernando").value;
    let baguio = document.getElementById("baguio").value;
    let ilocosSur = document.getElementById("ilocosSur").value;
    let ilocosNorte = document.getElementById("ilocosNorte").value;
    let hundredIsland = document.getElementById("hundredIsland").value;

    let travelTo = document.getElementById("travelTo").value;

    if (travelFrom === sanJuan && travelTo === sanFernando || travelFrom === sanFernando && travelTo === sanJuan) {
        travelRoute.SanFernando = 100;
        console.log(travelRoute.SanFernando);
    } else if (travelFrom === sanJuan && travelTo === baguio || travelFrom === baguio && travelTo === sanJuan) {
        travelRoute.Baguio = 150;
        console.log(travelRoute.Baguio);
    } else if (travelFrom === sanJuan && travelTo === ilocosSur || travelFrom === ilocosSur && travelTo === sanJuan) {
        travelRoute.IlocosSur = 200;
        console.log(travelRoute.IlocosSur);
    } else if (travelFrom === sanJuan && travelTo === ilocosNorte || travelFrom === ilocosNorte && travelTo === sanJuan) {
        travelRoute.IlocosNorte = 250;
        console.log(travelRoute.IlocosNorte);
    } else if (travelFrom === sanJuan && travelTo === hundredIsland || travelFrom === hundredIsland && travelTo === sanJuan) {
        travelRoute.Hundredisland = 300;
        console.log(travelRoute.Hundredisland);
    } else if (travelFrom === sanFernando && travelTo === baguio || travelFrom === baguio && travelTo === sanFernando) {
        travelRoute.SanFernando = 120;
        console.log(travelRoute.SanFernando);
    } else if (travelFrom === sanFernando && travelTo === ilocosSur || travelFrom === ilocosSur && travelTo === sanFernando) {
        travelRoute.IlocosSur = 220;
        console.log(travelRoute.IlocosSur);
    } else if (travelFrom === sanFernando && travelTo === ilocosNorte || travelFrom === ilocosNorte && travelTo === sanFernando) {
        travelRoute.IlocosNorte = 270;
        console.log(travelRoute.IlocosNorte);
    } else if (travelFrom === sanFernando && travelTo === hundredIsland || travelFrom === hundredIsland && travelTo === sanFernando) {
        travelRoute.Hundredisland = 320;
        console.log(travelRoute.Hundredisland);
    } else if (travelFrom === baguio && travelTo === ilocosSur || travelFrom === ilocosSur && travelTo === baguio || travelFrom === baguio && travelTo === ilocosNorte || travelFrom === ilocosNorte && travelTo === baguio) {
        travelRoute.SanFernando = 170;
        console.log(travelRoute.SanFernando)
    } else if (travelFrom === baguio && travelTo === hundredIsland || travelFrom === hundredIsland && travelTo === baguio) {
        travelRoute.Hundredisland = 340
        console.log(travelRoute.Hundredisland);

    } else {
        let TravellingFromError = document.getElementById('TravellingFromError');
        let travelToError = document.getElementById('travelToError');
        TravellingFromError.textContent = 'Please enter a valid place of travel';
        travelToError.textContent = "please enter a valid place of travel";
        tripTypeError.style.color = "red"
        tripClassError.style.color = "red"

    }
    travellingFrom = travelFrom;
    travellingTo = travelTo;

}

function validateAge() {
    var selectedDate = document.getElementById('dob').value;
    if (!selectedDate) {
        document.getElementById('dobError').textContent = 'Please select a valid date of birth';
        return;
    }

    var dob = new Date(selectedDate);
    var today = new Date();

    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    if (age <= 18) {
        console.log("minor");
    } else {
        console.log("Adult");
    }
    dateOfBirth = selectedDate
}




function validateDates() {
    let departureDateInput = document.getElementById('departureDate').value;
    let returnDateInput = document.getElementById('returnDate').value;

    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    let departureDate = new Date(departureDateInput);
    let returnDate = new Date(returnDateInput);

    if (departureDate < today) {
        document.getElementById('departureDateError').textContent = 'Departure date must be today or later';
    } else {
        document.getElementById('departureDateError').textContent = '';
    }
    if (returnDate < departureDate || returnDate < today) {
        document.getElementById('returnDateError').textContent = 'Return date must be after departure date';
    } else {
        document.getElementById('returnDateError').textContent = '';
    }

    departureDate = new Date(departureDateInput);
    returnDate = new Date(returnDateInput)


    const timeDifference = returnDate.getTime() - departureDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    console.log('Difference in days:', daysDifference);
    console.log('Difference in milliseconds:', timeDifference);


    // departureDateInput = departureDate;
    // returnDateInput= returnDate
}


function validateForm() {
    const isNameValid = validateName();
    const isValidateTripType = validateTripType();
    const isTravelFromValid = validateTravelFrom();
    const isAgeValid = validateAge();
    const areDatesValid = validateDates();
    const isSumbited = aftersubmition()

    if (isNameValid && isTravelFromValid && isAgeValid && areDatesValid === true) {
        window.location.href = 'approved.html';
    } else {
        // alert('Please fill out all required fields correctly.');
        return false;
    }

}


function aftersubmition(){
    let afterSubmit = document.getElementById("afterSubmit");
    afterSubmit.style.display = "flex";
    afterSubmit.style.fontSize = "20px";
    afterSubmit.style.color = "red";



    var mylist = {
        Name: enterName.value,
        trip_type:tripType,
        trip_class:tripClass,
        travelling_from:travellingFrom,
        travelling_to:travellingTo,
        dateof_birth:dateOfBirth,
        departure_date:departureDate,
        return_date:returnDate


        
    }
    
    var listElement = document.getElementById("mylist");
    let keys = Object.keys(mylist)
    let values = Object.values(mylist)
    for( k = 0;k < keys.length; k++){
        var listItem = document.createElement("li");
        // listItem.style.listStyle = "none"
        listItem.textContent = keys[k]+ ":" +values[k];
        listElement.appendChild(listItem);
    }
}



