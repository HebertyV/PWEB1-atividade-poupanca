class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento) {
        evento.preventDefault();
        const elementoNumero = document.querySelector('#numero');
        const elementoSaldo = document.querySelector('#saldo');
        const elementoDataAniversario = document.querySelector('#dataAniversario');
        const tipoConta = document.querySelector('#tipoConta').value;

        if (tipoConta === 'Conta') {
            const conta = new Conta(elementoNumero.value, Number(elementoSaldo.value));
            this.repositorioContas.adicionar(conta);
            this.inserirContaNoHTML(conta);
        } else if (tipoConta === 'ContaBonificada') {
            const contaBonificada = new ContaBonificada(elementoNumero.value, Number(elementoSaldo.value));
            this.repositorioContas.adicionar(contaBonificada);
            this.inserirContaNoHTML(contaBonificada);
        } else if (tipoConta === 'Poupanca') {
            const poupanca = new Poupanca(elementoNumero.value, Number(elementoSaldo.value), elementoDataAniversario.value);
            this.repositorioContas.adicionar(poupanca);
            this.inserirContaNoHTML(poupanca);
        }
    }


    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
