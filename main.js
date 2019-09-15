const {Transaction, Blockchain} = require('./blockchain');
/*
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');



const myKey = ec.keyFromPrivate('Puranjay'+Date.now());

const myWalletAddress = myKey.getPublic('hex');
*/

let BCC=new Blockchain();
myWalletAddress='Puranjay_address'
const tx1=new Transaction(myWalletAddress,'receiver public key',10);
/*
tx1.signTransaction(myKey);
*/
BCC.addTransaction(tx1);

//console.log('Mining block 1...')
//BCC.addBlock(new Block(1, "05/08/2019", { Amount : 7}));

//console.log('Mining block 2...');
//BCC.addBlock(new Block(2, "10/08/2019", { Amount : 4}));

//console.log('Valid? : '+BCC.isChainValid());
//console.log(JSON.stringify(BCC,null,4));
//BCC.chain[1].data = { Amount : 40 };
//console.log('Valid? : '+BCC.isChainValid());


//BCC.createTransaction(new Transaction('adr1','adr2',100));
//BCC.createTransaction(new Transaction('adr2','adr1',50));

console.log('\n\nStarting the miner...');
BCC.minePendingTransactions(myWalletAddress);

console.log('\n\nBalance of myWalletAddress is ', BCC.getBalanceOfAddress(myWalletAddress));

console.log('\n\nStarting the miner again...');
BCC.minePendingTransactions(myWalletAddress);

console.log('\n\nBalance of myWalletAddress is ', BCC.getBalanceOfAddress(myWalletAddress));

console.log('\n\nAll transactions of myWalletAddress are', BCC.getAllTransactionsForWallet(myWalletAddress));

console.log('\n\nIs the Blockchain valid? : '+BCC.isChainValid());

console.log('\n\n',JSON.stringify(BCC,null,4));