document.getElementById('form-contato').addEventListener('submit', function(e){
    e.preventDefault();

    var nomeCtt = document.getElementById('nome').value;
    var phone = document.getElementById('numero').value;

    var tabela = document.querySelector('table');
    var row = tabela.insertRow(-1);

    var nomecell = row.insertCell(0);
    nomecell.innerHTML = nomeCtt;

    var phoneCell = row.insertCell(1);
    phoneCell.innerHTML = phone;

    document.getElementById('nome').value = '';
    document.getElementById('numero').value = '';
});
