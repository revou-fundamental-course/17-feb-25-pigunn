// ini JavaScript


function validateForm() {
    let nameInput = document.getElementById('name-input');
    
    if (nameInput.value == '') {
        alert('Nama Tidak Boleh Kosong');
    } else {
        alert(' Welcome ' + nameInput.value);
    }
}

// For Index Identifier
let indexBanner = 0;

showBanner();

function nextBanner() {
    // Increment indexBanner
    indexBanner+=1;
    showBanner();
}

function showBanner() {
    let banner = document.getElementsByClassName('main-banner');
    // reset condition
    if(indexBanner > 2) {
        indexBanner = 0;
    }
    // loop untuk hide semua
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = 'none';
    }
    //showBanner
    banner[indexBanner].style.display = 'block';
}
// autoplay
setInterval(nextBanner, 3000);autoplay