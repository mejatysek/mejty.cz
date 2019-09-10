function getYear() {
    return new Date().getFullYear()
}

function fillCopyright() {
    document.getElementById("copyright").textContent = `© 2015-${getYear()} Matěj Mihal.`
}

window.addEventListener("DOMContentLoaded", event => fillCopyright());
