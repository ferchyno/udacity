const SHA256 = require('crypto-js/sha256');

/**
 * Class with a constructor for block
 */
class Block
{
    constructor(data)
    {
        this.hash = "";
        this.height = 0;
        this.body = data;
        this.time = 0;
        this.previousBlockHash = "";
    }
}

/**
 * Class with a constructor for new blockchains
 * functions to support:
 *     - getLatestBlock()
 *     - addBlock()
 *     - getBlock()
 *     - validateBlock()
 *     - validateChain()
 */
class Blockchain
{
    constructor()
    {
        // Store de blockchain
        this.chain = [];
        // Addd the first genesis block
        this.addBlock(new Block("First block in the chain . Genesis Block"));
    }

    /**
     * Add new block to chain
     * @param newBlock
     */
    addBlock(newBlock)
    {
        newBlock.height = this.chain.length;
        newBlock.time = new Date().getTime().toString().slice(0,-3);

        // SHA256 requires a string of data
        if(this.chain.length > 0) {
            newBlock.previousBlockHash = this.getLatestBlock();
        }
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        this.chain.push(newBlock);
    }

    /**
     * Get the latest chain block
    */
    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }
}