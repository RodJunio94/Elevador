(function() {
    function criarFaixas() {
        const elementosComFaixas = document.querySelectorAll('[faixas]');
        elementosComFaixas.forEach(el => {
            const qtd = +el.getAttribute('faixas')
            for(let i = 0; i < qtd; i++) {
                const faixa = document.createElement('div')
                faixa.classList.add('faixa')
                el.appendChild(faixa)
            }
        });
    }

    criarFaixas();
})();
