function relogio() {
    const paragrafo = document.querySelector('#paragrafo');
    const botaoPausar = document.querySelector('#pausar');
    const botaoIniciar = document.querySelector('#iniciar');
    const boatoZerar = document.querySelector('#zerar');

    const horario = [0, 0, 0];

    function imprimir() {
        const add0H = horario[2] <= 9 ? 0 : '';
        const add0M = horario[1] <= 9 ? 0 : '';
        const add0S = horario[0] <= 9 ? 0 : '';
        paragrafo.innerHTML = `${add0H}${horario[2]}:${add0M}${horario[1]}:${add0S}${horario[0]}`;
        paragrafo.style.color = 'black';
    }

    function iniciar() {
        botaoIniciar.disabled = true;
        timer = setInterval(function () {
            horario[0]++;
            if (horario[0] === 60) {
                horario[0] = 0;
                horario[1]++;
            } if (horario[1] === 60) {
                horario[1] = 0;
                horario[2]++;
            }
            imprimir();

        }, 1000);
    }
    function pausar() {
        setTimeout(function () {
            clearInterval(timer);
            paragrafo.style.color = 'red';
            botaoIniciar.disabled = false;
        })
    }
    function zerar() {
        clearInterval(timer);
        horario[0] = 0;
        horario[1] = 0;
        horario[2] = 0;
        imprimir();
        botaoIniciar.disabled = false;
    }
    botaoIniciar.addEventListener('click', iniciar);
    botaoPausar.addEventListener('click', pausar);
    boatoZerar.addEventListener('click', zerar);
}
relogio();
