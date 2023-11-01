class Poupanca extends Conta {
    constructor(numero, saldo, dataAniversario) {
        super(numero, saldo);
        this.dataAniversario = dataAniversario;
    }

    aplicarJuros(juros) {
        if (this.dataAniversario === new Date().getDate()) {
            this.saldo += this.saldo * juros;
        }
    }
}
