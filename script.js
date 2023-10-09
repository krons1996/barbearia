const list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked');
    }
}, false);

function transferir() {
    const li = document.createElement("LI");
    let inputValue = (document.getElementById("myInput").value) + ' | ' + document.getElementById("dlservicos").value + ' | '  + document.getElementById("dtAgen").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (document.getElementById("myInput").value === '') {
        alert("Escreva algo!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

} 