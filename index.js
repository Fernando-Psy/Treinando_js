// Classe base
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    descricao() {
        return `Veículo: ${this.marca} ${this.modelo}`;
    }
}

  // Classe Carro
class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    descricao() {
        return `${super.descricao()} com ${this.portas} portas.`;
    }
}

  // Classe Moto
class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    descricao() {
        return `${super.descricao()} com ${this.cilindradas} cilindradas.`;
    }
}

  // Instâncias de objetos
    const carro1 = new Carro("Toyota", "Corolla", 4);
    const carro2 = new Carro("Honda", "Civic", 2);
    const moto1 = new Moto("Yamaha", "XTZ", 250);

  // Saídas
    console.log(carro1.descricao());
    console.log(carro2.descricao());
    console.log(moto1.descricao());