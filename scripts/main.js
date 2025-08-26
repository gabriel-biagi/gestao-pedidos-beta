const precoTotalElement = document.getElementById('preco-total');

/*------------------------Lógica da Box Delivery-----------------------*/
function verificarDelivery() {
    const enderecoContainer = document.querySelector('.form-group-endereco');
    if (checkboxDelivery.checked) {
        enderecoContainer.classList.remove('hidden');
    } else {
        enderecoContainer.classList.add('hidden');
    }

    calcularPrecoTotal();
}
const checkboxDelivery = document.querySelector('input[name="delivery"]');
checkboxDelivery.addEventListener('change', verificarDelivery);


//-----------------------Lógica dos Copos------------------------------
let copoSelecionado = null;
const copos = document.querySelectorAll('.size-btn');

function atualizaCopo() {
    copos.forEach(copo => {
        copo.classList.remove('selected');
    })
    this.classList.add('selected');
    copoSelecionado = this;

    console.log(copoSelecionado.dataset.size);

    calcularPrecoTotal();
}

copos.forEach(copo => {
    copo.addEventListener('click', atualizaCopo);
})

//------------------------Lógica dos Acompanhamentos--------------------
let acompanhamentosSelecionados = []


const checkboxes = document.querySelectorAll('input[name="acompanhamentos_pagos"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', atualizarAcompanhamentos);
})

function atualizarAcompanhamentos() {
    acompanhamentosSelecionados = [];
    const checkboxesMarcados = document.querySelectorAll('input[name="acompanhamentos_pagos"]:checked');
    
    checkboxesMarcados.forEach(checkbox => {
        acompanhamentosSelecionados.push(checkbox.value);
    });
    calcularPrecoTotal();
    console.log(acompanhamentosSelecionados);

}



/*-----------------Lógica que calcula o Preço Total---------------------*/
const precoDelivery = 5.00;
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


function calcularPrecoTotal() {
    let precoTotal = 0;

    if (copoSelecionado === null) {
        precoTotalElement.textContent = `R$ ${precoTotal.toFixed(2).replace('.', ',')}`;
        return
    }
    const tamanhoDoCopo = copoSelecionado.dataset.size;
    const precoDoCopo = valorCopos[tamanhoDoCopo];
    precoTotal += precoDoCopo;

    let precoAcompanhamentos = 0;
    acompanhamentosSelecionados.forEach(acompanhamento => {
        if (valorAcompanhamentosPagos[acompanhamento]) {
            precoAcompanhamentos += valorAcompanhamentosPagos[acompanhamento];
        }
    })
    precoTotal += precoAcompanhamentos;

    if (checkboxDelivery.checked) {
        precoTotal += precoDelivery;
    }
    console.log(precoTotal);

    precoTotalElement.textContent = `R$ ${precoTotal.toFixed(2).replace('.', ',')}`;
}

document.addEventListener('DOMContentLoaded', () => {
    verificarDelivery();
    calcularPrecoTotal();
});