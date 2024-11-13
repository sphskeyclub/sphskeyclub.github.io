function getDropdown() {
    document.getElementById("mainWindow").style.display = 'none';
    document.getElementById("mobileDropdown").style.display = 'block';
}

function closeDropdown() {
    document.getElementById("mainWindow").style.display = 'block';
    document.getElementById("mobileDropdown").style.display = 'none';
}

function getDropdownAbout() {
    document.getElementById("mainWindow").style.display = 'none';
    document.getElementById("aboutDropdown").style.display = 'block';
}

function closeDropdownAbout() {
    document.getElementById("mainWindow").style.display = 'block';
    document.getElementById("aboutDropdown").style.display = 'none';
}