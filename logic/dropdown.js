var onMobile = false;

function getDropdown() {
    document.getElementById("home").style.display = 'none';
    document.getElementById("mainWindow").style.display = 'none';
    document.getElementById("mobileDropdown").style.display = 'block';

    onMobile = true;
}

function closeDropdown() {
    document.getElementById("mainWindow").style.display = 'block';
    document.getElementById("home").style.display = 'block';
    document.getElementById("mobileDropdown").style.display = 'none';

    onMobile = false;
}

function getDropdownAbout() {
    if (onMobile) {
        document.getElementById("mobileDropdown").style.display = 'none';
    } else {
        document.getElementById("home").style.display = 'none';
        document.getElementById("mainWindow").style.display = 'none';
    }
    document.getElementById("aboutDropdown").style.display = 'block';
}

function closeDropdownAbout() {
    if (onMobile) {
        document.getElementById("mobileDropdown").style.display = 'block';
    } else {
        document.getElementById("home").style.display = 'block';
        document.getElementById("mainWindow").style.display = 'block';
    }
    document.getElementById("aboutDropdown").style.display = 'none';
}