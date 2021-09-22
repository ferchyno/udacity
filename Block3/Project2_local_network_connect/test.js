// Web3 API object
let Web3 = require('web3');

// Transaction API object
let EthereumTx = require('ethereumjs-tx').Transaction;

// Connection to Infura
let url = [
            "https://mainnet.infura.io/v3/f85ca96666304af18d77aa32afaf5293",
            "https://rinkeby.infura.io/v3/f85ca96666304af18d77aa32afaf5293",
            "HTTP://127.0.0.1:7545"
];
let senderAddresses = [
    "0x10fC1475c05f6522b5D8221dF28a896dC2178E95",
    "0x9A34c40f8C292782B362385640Ad04d74059BFd8",
    "0x6d1d84958546e9b46F7Bcc2D7Fd3D835771c8545",
    "0x99F53b395c53E7eE5dC61416fb92512F41790043",
    "0xad71981B81a1E9E7AAE051Cc03ec244ba6043f52"
];
let senderPrivateKeys = [
    "c69e46272f2e1398d43125222a89539a0ccd9983f6b7a004b7c9fa49d8477092",
    "ea9f9324179d853e974408cb82f3700985ed51cea3c4a27c7396cdd7d8defda1",
    "a343f6c5a0231741b9181d80d9139dab050aa5b00116e82be63f18335eb376ff",
    "daff535048c270d345a2b022f798e36869f2aa47d26f8f2fbd920ef5d8e87e1e",
    "1c8beb37d099fbdd2537cf22c42f43712d7fe23cf019c591d0556c6fe1383fcb"
];
let receiverAddresses = [
    "0x30E924856B80db250F0b0008f8219Fec0a46E97E",
    "0x1893Bf8140Baf80bc5eDd5617Cb2361f7977F533",
    "0xC21a1d79189fd782a77289c096BEDC1145af96d4",
    "0xddA8E19Ab8CA6945613F8Dc606EF0393Fb5238e2",
    "0xB76c9F56261AE4A656Ed5Bf8F5dE6f19E3BD4d8b"
];
let receiverPrivateKeys = [
    "5800bc057d91ecdd6d79c5a66c397e0aa0ab785b047647853a302a082d268efb",
    "0334df1964a5a56e043aa54234d3c9e1c617e36d8787fb86ebce6050a827a4af",
    "cc7a1dcf2aa6a0411857ef60967c3361c09aa5a1d041ceff8ee01782602d4ca5",
    "333dfb415c3374d1316010912c660d7509f0f2af9f38d161e97b7a1974208c48",
    "b042786b7edb7869bed40c04d9f4554ae9b7f1b41d51477b686431dcdabe1359"
];

class test {
    constructor() {
        this.web3 = null;
    }

    getBalance()
    {
        let address = "0xd88595BcB6518eA2C7AC0459677fd237ACF31B76";
        this.web3 = new Web3(url[1]);
        this.web3.eth.getBalance(address, (err, bal) =>
        {
            let balance_ether = this.web3.utils.fromWei(bal, 'ether');
            console.log(balance_ether);

        });
    }

    getTransaction()
    {
        let transaction = "0x320d3b8cff4e0456ea924680b737427fe0087cedf922de147b29fb6bf37ea4e6";
        this.web3 = new Web3(url[1]);
        this.web3.eth.getTransaction(transaction, (error, trans) =>
        {
            console.log(trans);
        });
    }

    getTransCount(sendAddress)
    {
        this.web3 = new Web3(url[2]);

        return this.web3.eth.getTransactionCount(sendAddress).then((txAmount) => {
            let nonce = '0x0' + txAmount;
            console.log(nonce);
        });
    }

    getContract()
    {
        let abi = JSON.parse('[{"constant":true,"inputs":[],"name":"batFundDeposit","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"batFund","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenExchangeRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"refund","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isFinalized","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingEndBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ethFundDeposit","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"createTokens","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationMin","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingStartBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_ethFundDeposit","type":"address"},{"name":"_batFundDeposit","type":"address"},{"name":"_fundingStartBlock","type":"uint256"},{"name":"_fundingEndBlock","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"LogRefund","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"CreateBAT","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]');
        let contract_addres = '0x0D8775F648430679A709E98d2b0Cb6250d2887EF';
        this.web3 = new Web3(url[0]);
        let contract = new this.web3.eth.Contract(abi, contract_addres);

        // Call to a contract methods
        contract.methods.name().call((err, result) => {
            console.log(result);
        });
        contract.methods.symbol().call((err, result) => {
            console.log(result);
        });
        contract.methods.totalSupply().call((err, result) => {
            console.log(result);
        });
    }

    getLocalNetworkAccounts()
    {
        this.web3 = new Web3(url[2]);
        this.web3.eth.getAccounts().then((accounts) => console.log(accounts));
    }

    createTransaction()
    {
        // Connect to local network
        this.web3 = new Web3(url[2]);

        // Get addreses
        let sendAddress = senderAddresses[0];
        let receiveAddress = receiverAddresses[0];

        // Show balance
        this.web3.eth.getBalance(sendAddress).then(console.log);
        this.web3.eth.getBalance(receiveAddress).then(console.log);

        // Setup transaction
        let rawTransaction = {
            to: receiveAddress,
            gasPrice: '0x20000000',
            gasLimit: '0x30000',
            value: '0x1',
            data: '0x00'
        };

        this.web3.eth.getTransactionCount(sendAddress).then((txAmount) => {
            rawTransaction.nonce = '0x0' + txAmount;

            console.log(rawTransaction);

            // Sign the transaction
            let tx = this.signTransaction(rawTransaction);

            // Send transaction to network
            this.sendTxToNetwork(tx);
        });
    }

    _signTransaction(rawTransaction)
    {

        let pkSender = senderPrivateKeys[0];
        let pkSenderHex = new Buffer.from(pkSender, 'hex');
        let tx = new EthereumTx(rawTransaction);
        tx.sign(pkSenderHex);

        return tx;
    }

    _sendTxToNetwork(tx)
    {
        let serializedTx = tx.serialize();
        this.web3.eth.sendSignedTransaction(serializedTx).then(console.log);
    }

    getGasPrice()
    {
        // let blockHashOrBlockNumber = '0xc99e85bf2783f358d92ada473541a5caa65a16a8aaa9eee3069b792f5ebf9282';
        let blockHashOrBlockNumber = 13225055;

        // Connect to local network
        this.web3 = new Web3(url[0]);
        // this.web3.eth.getGasPrice().then(console.log);
        // this.web3.eth.getBlockTransactionCount(blockHashOrBlockNumber).then(console.log);
        this.web3.eth.getUncle(5000, 0).then(console.log);

    }

    getMessage()
    {
        let transaction = '0x0a919b324d73cf846c1d87aa8908d71c2a0060cd765bc01fbf33f06f2fe0e5cd';
        let address = '0x10fC1475c05f6522b5D8221dF28a896dC2178E95';
        let block = '';
        this.web3 = new Web3(url[2]);
        this.web3.eth.getTransactionCount(address).then(console.log);
    }


}
let test_obj = new test();
// test_obj.getBalance();
// test_obj.getTransaction();
// test_obj.getTransCount(senderAddresses[0]);
// test_obj.getContract();
// test_obj.getLocalNetworkAccounts();
// test_obj.createTransaction();
// test_obj.getGasPrice();
test_obj.getMessage();
