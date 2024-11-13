import promptSync from 'prompt-sync';
const prompt = promptSync();

// Função de rolagem de dados (4d6, descartando o menor)
function rolarDados(numDados: number = 4): number {
    const dados = [];
    for (let i = 0; i < numDados; i++) {
        dados.push(Math.floor(Math.random() * 6) + 1);
    }
    dados.sort((a, b) => a - b); // Ordenar os dados em ordem crescente
    return dados.slice(1).reduce((acc, valor) => acc + valor, 0); // Somar os 3 maiores
}

// Funções para rolar os atributos principais (Força, Destreza, Constituição, Inteligência, Sabedoria, Carisma)
function rolarAtributo(nome: string): number {
    const valor = rolarDados();
    console.log(`${nome} rolou: ${valor}`);
    return valor;
}

// Função para calcular os atributos secundários a partir dos principais (com bônus)
function calcularAtributosSecundarios(forca: number, destreza: number, constituicao: number, inteligencia: number, sabedoria: number, carisma: number): {energia: number, stamina: number, mana: number, ataque: number, defesa: number, armor: number, powerAttack: number} {
    return {
        energia: constituicao * 2, // Energia depende da Constituição (exemplo simples)
        stamina: forca + destreza,  // Stamina pode ser uma média entre Força e Destreza
        mana: inteligencia * 2,    // Mana depende da Inteligência
        ataque: forca + destreza,  // Ataque é um mix de Força e Destreza
        defesa: destreza + constituicao, // Defesa depende de Destreza e Constituição
        armor: destreza,          // Armor pode ser um bônus de Destreza
        powerAttack: forca + constituicao // Power Attack pode ser baseado em Força e Constituição
    };
}

// Funções de validação para atributos
function validarAtributo(nome: string, valor: number, min: number, max: number): number {
    while (valor < min || valor > max) {
        console.log(`${nome} deve estar entre ${min} e ${max}. Tente novamente.`);
        valor = parseInt(prompt(`${nome}: `));
    }
    return valor;
}

// Classe Arma
class Arma {
    public nome: string;
    public tipo: string;
    public nivel: number;
    public dano: number;
    public bonus: number; // Bônus da arma

    constructor(nome: string, tipo: string, nivel: number, dano: number, bonus: number) {
        this.nome = nome;
        this.tipo = tipo;
        this.nivel = nivel;
        this.dano = dano;
        this.bonus = bonus;
    }

    public exibirInformacoes(): void {
        console.log(`Arma: ${this.nome}, Tipo: ${this.tipo}, Nível: ${this.nivel}, Dano: ${this.dano}, Bônus: +${this.bonus}`);
    }
}

// Classe Personagem
class Personagem {
    public nome: string;
    public forca: number;
    public destreza: number;
    public constituicao: number;
    public inteligencia: number;
    public sabedoria: number;
    public carisma: number;
    public energia: number;
    public stamina: number;
    public mana: number;
    public ataque: number;
    public defesa: number;
    public armor: number;
    public powerAttack: number;
    public raca: string;
    public classe: string;
    public armaEquipada: Arma | null; 

    constructor(nome: string, forca: number, destreza: number, constituicao: number, inteligencia: number, sabedoria: number, carisma: number, raca: string, classe: string) {
        this.nome = nome;
        this.forca = forca;
        this.destreza = destreza;
        this.constituicao = constituicao;
        this.inteligencia = inteligencia;
        this.sabedoria = sabedoria;
        this.carisma = carisma;
        this.raca = raca;
        this.classe = classe;

        // Calculando os atributos secundários
        const atributosSecundarios = calcularAtributosSecundarios(forca, destreza, constituicao, inteligencia, sabedoria, carisma);
        this.energia = atributosSecundarios.energia;
        this.stamina = atributosSecundarios.stamina;
        this.mana = atributosSecundarios.mana;
        this.ataque = atributosSecundarios.ataque;
        this.defesa = atributosSecundarios.defesa;
        this.armor = atributosSecundarios.armor;
        this.powerAttack = atributosSecundarios.powerAttack;
        this.armaEquipada = null; // Sem arma equipada inicialmente
    }

    public equiparArma(arma: Arma): void {
        this.armaEquipada = arma;
        console.log(`${this.nome} equipou a arma: ${arma.nome}`);
    }

    public atacar(): void {
        if (this.armaEquipada) {
            const danoTotal = this.ataque + this.armaEquipada.dano + this.armaEquipada.bonus;
            console.log(`${this.nome} ataca com ${this.armaEquipada.nome} e causa ${danoTotal} de dano!`);
        } else {
            console.log(`${this.nome} não tem arma equipada e não pode atacar.`);
        }
    }

    public exibirInformacoes(): void {
        console.log(`Personagem: ${this.nome}`);
        console.log(`Raça: ${this.raca}, Classe: ${this.classe}`);
        console.log(`Força: ${this.forca}, Destreza: ${this.destreza}, Constituição: ${this.constituicao}, Inteligência: ${this.inteligencia}, Sabedoria: ${this.sabedoria}, Carisma: ${this.carisma}`);
        console.log(`Energia: ${this.energia}, Stamina: ${this.stamina}, Mana: ${this.mana}`);
        console.log(`Ataque: ${this.ataque}, Defesa: ${this.defesa}, Armor: ${this.armor}`);
        console.log(`Power Attack: ${this.powerAttack}`);
        if (this.armaEquipada) {
            this.armaEquipada.exibirInformacoes();
        } else {
            console.log(`${this.nome} não está usando nenhuma arma.`);
        }
    }
}

// Função para criar o personagem com rolagem de dados
function criarPersonagem(): Personagem {
    const nome = prompt("Digite o nome do personagem: ");
    const raca = prompt("Digite a raça do personagem (exemplo: Humano, Elfo, Anão): ");
    const classe = prompt("Digite a classe do personagem (exemplo: Guerreiro, Mago, Ladrão): ");

    // Rolando os atributos principais (Força, Destreza, Constituição, Inteligência, Sabedoria, Carisma)
    const forca = rolarAtributo("Força");
    const destreza = rolarAtributo("Destreza");
    const constituicao = rolarAtributo("Constituição");
    const inteligencia = rolarAtributo("Inteligência");
    const sabedoria = rolarAtributo("Sabedoria");
    const carisma = rolarAtributo("Carisma");

    // Criando o personagem com os atributos gerados
    return new Personagem(nome, forca, destreza, constituicao, inteligencia, sabedoria, carisma, raca, classe);
}

// Função para criar armas disponíveis
function criarArmasDisponiveis(): Arma[] {
    const armas = [
        new Arma("Espada Longa", "Corte", 1, 10, 2),
        new Arma("Arco Curvo", "Distância", 1, 6, 3),
        new Arma("Clava", "Impacto", 1, 12, 1),
        new Arma("Cajado Mágico", "Mágico", 1, 4, 5)
    ];
    return armas;
}

// Função para interação com o usuário e escolha de arma
function equiparArma(personagem: Personagem): void {
    const armas = criarArmasDisponiveis();

    console.log("\nEscolha uma arma para equipar:");
    armas.forEach((arma, index) => {
        console.log(`${index + 1} - ${arma.nome}, Tipo: ${arma.tipo}, Dano: ${arma.dano}, Bônus: +${arma.bonus}`);
    });

    const escolha = parseInt(prompt("Escolha o número da arma: "));
    if (escolha >= 1 && escolha <= armas.length) {
        personagem.equiparArma(armas[escolha - 1]);
    } else {
        console.log("Escolha inválida.");
    }
}

// Função para gerar inimigos aleatórios
function gerarInimigo(personagem: Personagem): { nome: string, vida: number, ataque: number, defesa: number } {
    const tiposInimigos = ['Goblin', 'Orc', 'Dragão', 'Troll'];
    const nomeInimigo = tiposInimigos[Math.floor(Math.random() * tiposInimigos.length)];
    const vida = Math.floor(Math.random() * 50) + 50; // Vida entre 50 e 100
    const ataque = Math.floor(Math.random() * 10) + 5;  // Ataque entre 5 e 15
    const defesa = Math.floor(Math.random() * 5) + 1;  // Defesa entre 1 e 5
    return { nome: nomeInimigo, vida, ataque, defesa };
}

// Função principal para simular combate
function combate(personagem: Personagem) {
    console.log("Um inimigo apareceu!");
    const inimigo = gerarInimigo(personagem);

    console.log(`Inimigo: ${inimigo.nome}`);
    console.log(`Vida: ${inimigo.vida}, Ataque: ${inimigo.ataque}, Defesa: ${inimigo.defesa}`);

    let round = 1;

    while (personagem.energia > 0 && inimigo.vida > 0) {
        console.log(`\nRound ${round}`);

        // Personagem ataca
        personagem.atacar();
        inimigo.vida -= personagem.ataque; // Subtrai o ataque do personagem da vida do inimigo

        if (inimigo.vida <= 0) {
            console.log(`${inimigo.nome} foi derrotado!`);
            break;
        }

        // Inimigo ataca
        console.log(`${inimigo.nome} ataca!`);
        personagem.energia -= inimigo.ataque - personagem.defesa; // Subtrai a defesa do personagem ao ataque do inimigo
        if (personagem.energia <= 0) {
            console.log(`${personagem.nome} foi derrotado!`);
            break;
        }

        round++;
    }
}

// Função para interação com o usuário
function jogo() {
    const personagem = criarPersonagem();

    let jogoAtivo = true;

    while (jogoAtivo) {
        console.log("\nAção: ");
        console.log("1 - Exibir informações do personagem");
        console.log("2 - Equipar arma");
        console.log("3 - Atacar");
        console.log("4 - Combate contra inimigo");
        console.log("5 - Sair");

        const escolha = parseInt(prompt("Escolha uma ação: "));

        switch (escolha) {
            case 1:
                personagem.exibirInformacoes();
                break;
            case 2:
                equiparArma(personagem);
                break;
            case 3:
                personagem.atacar();
                break;
            case 4:
                combate(personagem);
                break;
            case 5:
                jogoAtivo = false;
                console.log("Fim do jogo!");
                break;
            default:
                console.log("Escolha inválida. Tente novamente.");
        }
    }
}

// Iniciar o jogo
jogo();
