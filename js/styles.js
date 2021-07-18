function naming() {

    var CC = parseInt(document.getElementById("Century").value);
    var YY = parseInt(document.getElementById("year").value);
    var MM = parseInt(document.getElementById("month").value);
    var DD = parseInt(document.getElementById("date").value);

    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

    if (CC.value =="" || YY.value =="" || MM.value =="" || DD.value =="") {
        alert("Fill in the blank");
    }
