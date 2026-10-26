
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoNovamente = document.querySelector(".novamente-btn");

const areaJogo = document.querySelector(".area-jogo");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const contadorPergunta = document.querySelector(".contador-pergunta");
const barraProgresso = document.querySelector(".barra-progresso");

const perguntas = [
    {
        enunciado: "Uma inteligência artificial começa a produzir textos quase indistinguíveis dos escritos por pessoas. Como você reage?",
        alternativas: [
            {
                texto: "Vejo uma oportunidade para aprender e criar de novas maneiras.",
                afirmacao: "Você enxerga a inteligência artificial como uma ferramenta de criação e aprendizagem."
            },
            {
                texto: "Acredito que precisamos estabelecer limites e identificar conteúdos artificiais.",
                afirmacao: "Você considera essencial preservar a transparência e a confiança nas informações."
            }
        ]
    },
    {
        enunciado: "Na escola, colegas começam a usar IA para realizar todas as atividades. Qual deveria ser o papel dessa tecnologia?",
        alternativas: [
            {
                texto: "Ajudar na pesquisa, na compreensão e no desenvolvimento de ideias próprias.",
                afirmacao: "Você defende uma educação em que a IA apoia o raciocínio, sem substituir a aprendizagem."
            },
            {
                texto: "Automatizar tarefas sempre que isso economizar tempo.",
                afirmacao: "Você valoriza a eficiência, embora seja importante garantir que a automação não elimine o aprendizado."
            }
        ]
    },
    {
        enunciado: "Empresas passam a automatizar muitas profissões. Qual preocupação deveria receber mais atenção?",
        alternativas: [
            {
                texto: "Preparar trabalhadores para novas funções e proteger quem for afetado.",
                afirmacao: "Você prioriza a adaptação profissional e a proteção das pessoas diante das mudanças econômicas."
            },
            {
                texto: "Incentivar a inovação para criar novos serviços e oportunidades.",
                afirmacao: "Você acredita que a inovação pode abrir caminhos econômicos, especialmente quando acompanhada de capacitação."
            }
        ]
    },
    {
        enunciado: "Uma imagem criada por IA ganha um concurso artístico sem que o público saiba como foi produzida. O que deveria acontecer?",
        alternativas: [
            {
                texto: "Informar claramente quando e como a inteligência artificial foi utilizada.",
                afirmacao: "Você valoriza a transparência sobre a participação da IA nos processos criativos."
            },
            {
                texto: "Avaliar principalmente o resultado e a criatividade da obra.",
                afirmacao: "Você prioriza o resultado artístico, mas reconhece que as regras de autoria precisam ser claras."
            }
        ]
    },
    {
        enunciado: "Estamos em 2049. A IA influencia decisões importantes na sociedade. Quem deve ser responsável por essas decisões?",
        alternativas: [
            {
                texto: "Pessoas e instituições, com supervisão e regras bem definidas.",
                afirmacao: "Você defende que a responsabilidade final permaneça com pessoas e instituições sujeitas a regras."
            },
            {
                texto: "Sistemas de IA podem decidir quando demonstrarem bons resultados.",
                afirmacao: "Você está aberto a delegar decisões à IA quando ela demonstra bons resultados, embora a supervisão e a responsabilização continuem importantes."
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";

    telaInicial.style.display = "none";
    caixaResultado.classList.remove("mostrar");
    areaJogo.classList.add("mostrar");

    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const pergunta = perguntas[atual];

    contadorPergunta.textContent =
        `QUESTÃO ${String(atual + 1).padStart(2, "0")} / ${perguntas.length}`;

    barraProgresso.style.width =
        `${(atual / perguntas.length) * 100}%`;

    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.replaceChildren();

    pergunta.alternativas.forEach((alternativa) => {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            historiaFinal += alternativa.afirmacao + "\n\n";
            atual++;
            mostraPergunta();
        });

        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    areaJogo.classList.remove("mostrar");
    caixaResultado.classList.add("mostrar");

    barraProgresso.style.width = "100%";

    textoResultado.textContent =
        "Suas escolhas ao longo desta missão revelam prioridades importantes " +
        "na maneira como você imagina o futuro da inteligência artificial.\n\n" +
        historiaFinal +
        "Não existe uma única resposta simples para esses desafios. " +
        "O futuro dependerá das tecnologias que desenvolvermos e, sobretudo, " +
        "das decisões que tomarmos coletivamente.";
}

function reiniciarJogo() {
    caixaResultado.classList.remove("mostrar");
    areaJogo.classList.remove("mostrar");

    atual = 0;
    historiaFinal = "";
    barraProgresso.style.width = "0%";

    telaInicial.style.display = "";
}

botaoIniciar.addEventListener("click", iniciaJogo);
botaoNovamente.addEventListener("click", reiniciarJogo);

