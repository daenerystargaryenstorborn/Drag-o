const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em um mundo onde a magia se misturou com a tecnologia, você é Elara, uma jovem escolhida para encontrar o último dragão e restaurar o equilíbrio do reino. No entanto, sua jornada não é sobre força bruta, mas sobre sabedoria e as escolhas que moldarão o futuro.Sua primeira missão é decifrar um antigo enigma: A criatura de escamas e fogo, que protege a montanha de gelo, existe de verdade ou é apenas uma lenda?",
        alternativas: [
            {
                texto: "A criatura é uma lenda, uma história para assustar crianças.",
                afirmacao: "Você acreditou na versão popular, ignorando os sussurros dos antigos e a história esquecida de seu povo."
            },
            {
                texto: "A criatura existe, e sua pele de escamas é tão forte quanto a montanha de gelo que ela protege.",
                afirmacao: "Você se aprofundou nas antigas lendas, entendendo que a verdade nem sempre é o que as massas acreditam."
            }
        ]
    },
    {
        enunciado: "Ao chegar à montanha de gelo, você encontra um ancião que a avisa sobre um perigo iminente. A montanha está viva com uma energia mágica poderosa, mas instável. Um poder que, se liberado sem controle, pode destruir o reino. O que você faz?",
        alternativas: [
            {
                texto: "Você usa um artefato mágico, um cristal que sua avó lhe deu, para estabilizar a energia.",
                afirmacao: "Você confiou em seu próprio conhecimento e nas ferramentas que possuía, mostrando que a magia da sua família era suficiente."
            },
            {
                texto: "Você invoca uma poderosa IA de análise de energia, um dispositivo de seu pai, para encontrar a fonte da instabilidade.",
                afirmacao: "Você se abriu para o uso de tecnologias modernas, mostrando que a magia e a ciência podem coexistir para resolver os problemas mais complexos."
            }
        ]
    },
    {
        enunciado: "Depois de estabilizar a montanha, o ancião lhe dá um mapa para o Bosque Sombrio. Lá, você deve encontrar a Árvore dos Murmúrios e ouvir a sua mensagem. No entanto, o bosque é cheio de armadilhas ilusórias. O que você faria para não se perder?",
        alternativas: [
            {
                texto: "Você usa um mapa de papel e uma bússola mágica.",
                afirmacao: "Você optou pela simplicidade e confiabilidade do antigo, valorizando a jornada tanto quanto o destino."
            },
            {
                texto: "Você usa um drone de mapeamento automático, uma IA que cria um mapa 3D do bosque.",
                afirmacao: "Você usou a tecnologia para acelerar o seu progresso, mostrando que a IA pode ser uma ferramenta para desvendar os mistérios do mundo."
            }
        ]
    },
    {
        enunciado: "Chegando à Árvore dos Murmúrios, você se depara com a figura do último dragão. Ele não é uma besta terrível, mas um ser sábio e cansado. Ele diz que a sua jornada está no fim, mas o verdadeiro teste é o que você fará com o que aprendeu. O que você escolherá?",
        alternativas: [
            {
                texto: "Guardar o conhecimento para si mesma, usando-o para proteger o seu povo.",
                afirmacao: "ocê manteve o conhecimento para si mesma, acreditando que o poder deve ser mantido nas mãos de poucos para garantir a segurança de todos."
            },
            {
                texto: "Compartilhar a história e o conhecimento do dragão com todos, garantindo que o seu legado viva.",
                afirmacao: "Você entendeu que a história e o conhecimento não devem ser guardados, mas compartilhados, para que todos possam aprender e crescer."
            }
        ]
    },
    {
        enunciado: "Sua jornada terminou. Sua história está escrita. As suas escolhas moldaram não apenas o seu destino, mas o destino de todo o reino. O que você aprendeu com essa aventura? ",
        alternativas: [
            {
                texto: "Aprendi que Tudo depende de acreditar em nós mesmos",
               afirmacao: "tudo ficou bem "
               
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click");
        respostaSelecionada(alternativa);
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
