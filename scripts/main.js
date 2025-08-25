
/*------------------------Lógica da Box Delivery-----------------------*/
function verificarDelivery() {
    const enderecoContainer = document.querySelector('.form-group-endereco');
    if (checkboxDelivery.checked) {
        enderecoContainer.classList.remove('hidden');
    } else {
        enderecoContainer.classList.add('hidden');
    }
}
const checkboxDelivery = document.querySelector('input[name="delivery"]');
checkboxDelivery.addEventListener('change', verificarDelivery);


function verificaAcompanhamentos() {
    const checkboxAcompanhamentosPagos = document.querySelectorAll('input[name="acompanhamentos_pagos"]');

    checkboxAcompanhamentosPagos.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            
        })
    })
}


/*-----------------Lógica que calcula o Preço Total---------------------*/
const valorCopos = {
    '300ml': 16.00,
    '400ml': 18.00,
    '550ml': 20.00,
    '770ml': 25.00
}

const valorAcompanhamentosPagos = {
    'nutella': 7.00,
    'creme de coco bianco': 5.00,
    'morango': 3.00,
    'kiwi': 2.00,
    'creme de ninho': 5.00,
    'creme de amendoim': 5.00,
    'ovomaltine': 4.00,
    'bombom': 2.00,
    'mms': 2.00,
    'mel': 2.00,
    'chocoball': 2.00
}

let precoTotal;
let copoSelecionado = null;

function calcularPrecoTotal(copoSelecionado, valorCopos, valorAcompanhamentosPagos, valorDelivery, precoTotal) {

}