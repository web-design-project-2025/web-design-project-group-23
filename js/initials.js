
    document.addEventListener('DOMContentLoaded', function() {
    const fullName="Erik Svensson"; 

    function getInitials(name) {
        const namesArray=name.trim().split(" ");
        const initials=namesArray.map(word => word[0].toUpperCase()).join("");
        return initials;
    }
    
    const profileCircle=document.getElementById("profileCircle");
    const mainCircle=document.getElementById("mainCircle");

    if (profileCircl) {
        profileCircle.textContent = getInitials(fullName);
    }

    if (mainCircle) {
        mainCircle.textContent = getInitials(fullName);
    }

    profileCircle.textContent = getInitials(fullName);
    mainCircle.textContent = getInitials(fullName);
