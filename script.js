// Captura o botão e as áreas de texto pelo ID
const botaoDecodificar = document.getElementById('botaoDecodificar');
const textoCodificado = document.getElementById('textoCodificado');
const textoDecodificado = document.getElementById('textoDecodificado');

// Adiciona um ouvinte de evento ao botão
botaoDecodificar.addEventListener('click', function() {
    try {
        // Obtém o valor do texto codificado digitado pelo cliente
        const textoCodificadoDigitado = textoCodificado.value;

        // Decodifica o texto com Base64
        let textoDecodificadoResultado = atob(textoCodificadoDigitado);

        // Se a decodificação com Base64 não funcionar, tenta decodificar como URL
        if (textoDecodificadoResultado === '') {
            textoDecodificadoResultado = decodeURIComponent(textoCodificadoDigitado);
        }

        // Se a decodificação como URL não funcionar, tenta decodificar como JSON
        if (textoDecodificadoResultado === '') {
            textoDecodificadoResultado = JSON.parse(textoCodificadoDigitado);
        }

        // Atribui o texto decodificado à textarea de texto decodificado
        textoDecodificado.value = textoDecodificadoResultado;
    } catch (erro) {
        // Se ocorrer um erro durante a decodificação, exibe uma mensagem de erro
        alert('Erro ao decodificar o texto. Certifique-se de que o texto está codificado corretamente.');
        console.error('Erro ao decodificar:', erro);
    }
});

