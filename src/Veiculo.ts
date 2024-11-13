import promptSync from 'prompt-sync';

const prompt = promptSync();


class Veiculo {

    private chassi: string;
    public marca: string;
    public anoModelo: string;
    public cor: string;
    public potencia: number;
    public numeroMarchas: number;
    private ligado: boolean;
    private velocidade: number;

    constructor(chassi: string, marca: string, anoModelo: string, cor: string, potencia: number, numeroMarchas: number) {
        this.chassi = chassi;
        this.marca = marca;
        this.anoModelo = anoModelo;
        this.cor = cor;
        this.potencia = potencia;
        this.numeroMarchas = numeroMarchas;
        this.ligado = false;
        this.velocidade = 0;
    }

    // Métodos de interação com o veículo
    public ligar(): void {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.marca} ${this.anoModelo} está agora ligado.`);
        } else {
            console.log(`${this.marca} ${this.anoModelo} já está ligado.`);
        }
    }

    public desligar(): void {
        if (this.ligado) {
            this.ligado = false;
            console.log(`${this.marca} ${this.anoModelo} está agora desligado.`);
        } else {
            console.log(`${this.marca} ${this.anoModelo} já está desligado.`);
        }
    }

    public acelerar(): void {
        if (this.ligado) {
            this.velocidade += 10; 
            console.log(`${this.marca} ${this.anoModelo} acelerou para ${this.velocidade} km/h.`);
        } else {
            console.log(`Não é possível acelerar. O veículo não está ligado.`);
        }
    }

    public frear(): void {
        if (this.ligado && this.velocidade > 0) {
            this.velocidade -= 10; 
            console.log(`${this.marca} ${this.anoModelo} reduziu a velocidade para ${this.velocidade} km/h.`);
        } else if (this.velocidade === 0) {
            console.log(`O veículo já está parado.`);
        } else {
            console.log(`Não é possível frear. O veículo não está ligado.`);
        }
    }

    public exibirInstrucoes(): void {
        console.log(`Chassi: ${this.chassi}, Marca: ${this.marca}, Ano e Modelo: ${this.anoModelo}, Cor: ${this.cor}, Potência: ${this.potencia} CV, Marchas: ${this.numeroMarchas}.`);
        console.log(`Veículo ${this.ligado ? 'ligado' : 'desligado'}, Velocidade atual: ${this.velocidade} km/h.`);
    }
}


const meuVeiculo = new Veiculo("8J1 2B2hz7 d0 3f2405", "FIAT", "2024", "PRETO", 150, 6);


function menu() {
    let opcao = '';
    while (opcao !== '0') {
        console.log("\n--- MENU ---");
        console.log("1 - Ligar o veículo");
        console.log("2 - Desligar o veículo");
        console.log("3 - Acelerar o veículo");
        console.log("4 - Frear o veículo");
        console.log("5 - Exibir informações do veículo");
        console.log("0 - Sair");
        
        opcao = prompt('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                meuVeiculo.ligar();
                break;
            case '2':
                meuVeiculo.desligar();
                break;
            case '3':
                meuVeiculo.acelerar();
                break;
            case '4':
                meuVeiculo.frear();
                break;
            case '5':
                meuVeiculo.exibirInstrucoes();
                break;
            case '0':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida!');
                break;
        }
    }
}

menu();
