const hexTobinary=require("crypto")

const {Genesis_data, Mine_Rate}=require("./config")


const cryptoHash=require("./crypto_hash")

class Block
{
    constructor({timestamp,prevHash,hash,data,nonce,difficulty})
    {
        this.timestamp=timestamp;
        this.prevHash=prevHash;
        this.hash=hash;
        this.data=data;
        this.nonce=nonce;
        this.difficulty=difficulty;
    }

    static genesis()
        {
            return new this(Genesis_data);
        }

    static mineBlock({prevBlock,data})
    {
        let hash,timestamp;
        const prevHash=prevBlock.hash;
        let {difficulty}=prevBlock;

        let nonce=0;
        do{
            nonce++;
            timestamp=Date.now();
            difficulty=Block.adjustDifficulty({
                originalBlock:prevBlock,
                timestamp
            })
            hash=cryptoHash(timestamp,prevHash,data,nonce,difficulty)
        }while(hexTobinary(hash).substring(0,difficulty)!=='0'.repeat(difficulty)); 
        return new this({
            timestamp,
            prevHash,
            data,
            difficulty,
            hash,
            nonce
        })
    }

    static adjustDifficulty({originalBlock,timestamp})
    {
        const {difficulty}=originalBlock;
        if(difficulty<1) return 1;
        const differnce=timestamp-originalBlock.timestamp;
        if(differnce>Mine_Rate) return difficulty-1;
        return difficulty+1;
    }
    
}

const block1= new Block(
    {
        hash:"2/02/23",
        timestamp:"0xacb",
        prevHash:"0xc12",
        data:"hello"
    }
);



// console.log(block1);

// const genesisBlock= Block.genesis();
// console.log(genesisBlock);

// const result=Block.mineBlock({prevBlock:block1,data:"block2"});
// console.log(result);



module.exports=Block;
 