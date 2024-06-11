function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
    document.getElementById('defaultOpen').click();
}
 
function openProfile(accountName) {
    alert('Открываем профиль для аккаунта: ' + accountName);
}
function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
function openProfile(profileName) {
    var profiles = document.getElementsByClassName("profile");
    for (var i = 0; i < profiles.length; i++) {
        profiles[i].style.display = "none";
    }
    document.getElementById(profileName).style.display = "block";
}

document.getElementById("contactButton").addEventListener("click", function() {
    window.location.href = "contacts";

    function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}


