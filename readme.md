
<h1 align="center">Welcome to The Decentralised Petition System👋</h1>

Modern e-Petition Systems build on centralised projects have the power to exploit the Petition in different ways like, using fake signatures by bots, deletion of petitions by other higher entities, etc. 
Keeping in mind these problems we have build a decentralised e-petition system with the help of Tezos ecosystem.

The front end is be built using React.js and Material UI.

![Front End Preview](./Frontend.png)

React is linked with to the Freighter.

The smart contract would consist of two functions:

**Creation** -- Map is used to store data of petition on Blockchain with key as petition Number and Value as a Record containing Title, Content, No of signatures and a list containing map with key.

**Signing system** -- As an input, smart-contract requires the Petition Number in order to update the list of signature. No of signatures are incremented upon calling this function. Assertions are provided to check whether no two Signatures are same. 

## Developers
Aryan Kalra - https://github.com/kalracodes
Vedika Parwal - https://github.com/VedikaParwal

## Prerequisites
This project requires NodeJS (version 8 or later) and NPM. Node and NPM are really easy to install. To make sure you have them available on your machine, try running the following command.

npm >= 6.4.1
node.js >= v8.16.0

##  Install

```sh
npm install
```
>to download all the dependencies

##  Usage

```sh
npm run start
```
