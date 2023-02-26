const Blockchain = require("./blockchain");
const blockchain = new Blockchain();

blockchain.addBLock({ data: "new data" });
console.log(blockchain.chain[blockchain.chain.length - 1]);
let prevTimestamp, nextTimestamp, nextBlock, timeDiff, avgtime;

const time=[];

for (let i = 0; i < 1000; i++)
{
  prevTimestamp=blockchain.chain[blockchain.chain.length - 1].timestamp;

  blockchain.addBLock({ data: `block ${i}` });
  nextBlock=blockchain.chain[blockchain.chain.length - 1];
  nextTimestamp=nextBlock.timestamp;

  timeDiff = nextTimestamp-prevTimestamp;

  time.push(timeDiff);

  avgtime=time.reduce((total,num)=>total+num)/time.length;

  console.log(`Time to mine:${timeDiff}ms,difficulty:${nextBlock.difficulty},avgtime:${avgtime}ms`);
}