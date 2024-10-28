web3 or ether.js

Web3.js and ethers.js are [JavaScript](https://tatum.io/blog/best-javascript-libraries) libraries that play a pivotal role in Ethereum blockchain development. They enable developers to connect to the Ethereum blockchain, interact with smart contracts, and manage blockchain-related data.

While web3.js has been around longer and is often considered the gold standard, ethers.js has shot up in popularity because of its simplicity, lightweight nature, and broader functionalities in specific areas.

npm install ethers

we use providers to read data from blockchain..

Ethers.js includes several utility functions for tasks like encoding/decoding data and handling BigNumbers, often with simpler interfaces than web3.js.

will not use web3.js bcz known for being bulky

it can increase the bundle size of web apllications.

ethers.js has a smaller footprint, making it a preferred choice for performance.

lets say we have to call smart contract functions..

so we need some language to communicate with them 

so we need some package so ethers.js is there it is package. so in  dencentralized application, we can use it, lets say we have code in react and we need that our frontend can commiuncate with that smart contracts or blockchain. so we need this library.

so we need ethers.js library..

Common Terminologeies..

**Provider** ⇒ if we need to do any operation read-only accesss on blockchain, we need or use providers..

**Signer**→ we use signer class whenever we need some change in blockchain state. then we need signer class

**Contract**→ It is an abstraction, which represents a connection to a specific contract on the etherum network, so that application can use it like a normal Javascript object.

connecting to blockchain 

We can use Infuraa..

it is a power like normal system becomes node..

to interact with blockchain.

69009c44e56c499ab0651b9598d9a3b8

https://mainnet.infura.io/v3/69009c44e56c499ab0651b9598d9a3b8

https://mainnet.infura.io/v3/69009c44e56c499ab0651b9598d9a3b8

Why we need Infurra..

infura helping us to build that provider, and we need infura bcz directly, bcz our system cant communicate directly with blockchain ecosystem.