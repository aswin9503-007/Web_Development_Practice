
function whosPaying(names) {
    var nameList = ["Aswin", "Monish", "Logesh", "Kathir", "Shankar"];
    var namesLength = nameList.length;

    var namesposition = Math.floor(Math.random() * namesLength)

    var chosen = nameList[namesposition]

    console.log(chosen + " is going to buy lunch today!")

}

whosPaying();