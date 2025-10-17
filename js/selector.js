
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Esta función ya no se usa, está en selection.html
// function loadCategory se define en selection.html