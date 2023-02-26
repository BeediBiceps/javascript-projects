const Block= require("./block");
const cryptoHash = require("./crypto_hash");

class Blockchain
{
    constructor()
        {
            this.chain=[Block.genesis()];
        }

        addBLock({data}){
            const newBlock=Block.mineBlock({
                prevBlock:this.chain[this.chain.length-1],
                data
            });
            this.chain.push(newBlock);
        }

        replaceChain(chain)
        {
            if(chain.length<=this.chain.length)
            {
                console.error("incoming chain is not longer");
                return 
            }
            if(Blockchain.isValidChain(chain))
            {
                console.error("not valid chain")
                return
            }

            this.chain=chain;

        }

        static isValidChain(chain){
        {
            if(JSON.stringify(chain[0]!==Block.genesis())) {return false;}//used to compare objects of differnet instances
        }
        
        for(let i=1;i<chain.length;i++)
        {
            const {timestamp,prevHas,hash,data,nonce,difficulty}=chain[i];
            const lastDifficulty=chain[i-1].difficulty;
            const realLastHash =chain[i-1].hash;
            if(prevHash!==realLastHash){return false}

            const validatedHash=cryptoHash(timestamp,prevHash,nonce,difficulty,data);
            if(hash!==validatedHash){return false}
            if(Math.abs(lastDifficulty-difficulty)>1) return false;
        }

        return true;

    }


    
}

// const blockchain=new Blockchain();
// blockchain.addBLock({data:"Block1"});
// blockchain.addBLock({data:"Block2"});

// console.log(blockchain)

// const res=Blockchain.isValidChain(blockchain.chain);
// console.log(blockchain.chain)
// // console.log(res)
module.exports= Blockchain;
