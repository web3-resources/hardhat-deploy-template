# Hardhat Template


### Summary
This template enables you to compile, deploy, and verify solidity contracts on EVM-compatible chains using the hardhat development environment.

### Install

```
npm i
```

### Compile

```
npx hardhat compile
```

### Deploy

You can deploy to any network that is configured in the hardhat.config.ts file. In order to deploy to that network, run:

```
npx hardhat deploy --network {NETWORK}
```

### Verify

npx hardhat deploy returns an address. To verify, run:

```
npx hardhat verify --network {NETWORK} {ADDRESS} 
```




