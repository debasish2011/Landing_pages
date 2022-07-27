function showForm(){
    let btn = document.getElementById('contact_us')
    btn.style.display = 'none';
    let form = document.getElementById('form');
    form.style.display = 'flex';
    form.style.margin = '5px 0px'
}

function search() {
    let search = document.getElementById('search').value;
}

function getInfo() {
    let info = {
        fullName : document.getElementById('fullName').value,
        email : document.getElementById('email').value,
        number : document.getElementById('number').value,
        concern : document.getElementById('concern').value
    };
}