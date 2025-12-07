function lifeInWeeks(age) {

    var remAge = 90 - age;
    var ageInDays = remAge*365;
    var ageInWeeks = remAge*52;
    var ageInMonths = remAge*12;

    console.log("You have " + ageInDays + " days, " + ageInWeeks +" weeks, " + "and " + ageInMonths + " months left.");
    

}

lifeInWeeks(56);
