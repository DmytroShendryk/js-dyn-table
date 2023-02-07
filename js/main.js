const table = document.getElementById('table').innerHTML = `<table id = tab-nums></table>`;
function buildTable(){
    let tab = '';
    for (let i=1; i<=10; i++){
        tab += '<tr>';
        for (let j=1; j<=10; j++){
            tab += '<td>' + i * j + '</td>'
        }
        tab += '</tr>';
    }
     document.getElementById('tab-nums').innerHTML = tab;
}
document.onready = buildTable();