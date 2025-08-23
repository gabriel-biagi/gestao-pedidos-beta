import { adicionarNovoPedido } from './adicionarNovoPedido.js';

document.querySelector('.submit-btn-add').addEventListener('click', (e) => {
    e.preventDefault();
    const nomeCliente = document.getElementById('cliente').value;
    const checkboxes = document.querySelectorAll('.acompanhamento-items input[type="checkbox"]');
    const acompanhamentosSelecionados = [];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            acompanhamentosSelecionados.push(checkbox.value);
        }
    });
    adicionarNovoPedido(nomeCliente, acompanhamentosSelecionados);
});