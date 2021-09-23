#!/usr/bin/env node

import yargs  from "yargs";

const ENSREVERSERECORDSADDRESS="0x3671aE578E63FdF66ad4F3E12CC0c0d71Ac7510C";
const ENSREVERSERECORDSABI=[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"getNames","outputs":[{"internalType":"string[]","name":"r","type":"string[]"}],"stateMutability":"view","type":"function"}];

const GLICPIXXXVER002ADDRESS="0x1C60841b70821dcA733c9B1a26dBe1a33338bD43";
const GLICPIXXXVER002ABI=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum GLICPIXXXVER002.CollectionToClaim","name":"_collection","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"glicpixv2idBeingMinted","type":"uint256"},{"indexed":false,"internalType":"address","name":"_claimer","type":"address"}],"name":"glicpixv2Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"mintStartIndex","type":"uint256"}],"name":"randomStartingIndexDrawn","type":"event"},{"inputs":[],"name":"BGANPUNKSV1ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BGANPUNKSV1CLAIMSTART","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BGANPUNKSV2ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BGANPUNKSV2CLAIMSTART","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEVMINTSTART","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GLICPIXV1ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GLICPIXV1CLAIMSTART","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GLICPIXXXIMAGEPROVENANCEIPFSHASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"V1BASTARDIDs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRunning","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"internalType":"address","name":"_mintTo","type":"address"}],"name":"devMint_BATCH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum GLICPIXXXVER002.CollectionToClaim","name":"_collection","type":"uint8"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"getWhichGLICPIXXYouAreGetting_BATCH","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum GLICPIXXXVER002.CollectionToClaim","name":"_collection","type":"uint8"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"isGLICPIXXXTaken_BATCH","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum GLICPIXXXVER002.CollectionToClaim","name":"_collection","type":"uint8"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"mintGLICPIXV2_BATCH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintStartIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintStartIndexDrawn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"uint256","name":"randomness","type":"uint256"}],"name":"rawFulfillRandomness","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setRandomNumberForStartingIndexOfMintIds","outputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"showLicense","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalGLICPIX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawLink","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const ERC721HELPERADDRESS="0x12B7458c90616c68fCC37C74609313fD105771F8";
const ERC721HELPERABI=[{"inputs":[{"internalType":"contract IERC721","name":"token","type":"address"},{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"}],"name":"owners","outputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"},{"internalType":"address[]","name":"_owners","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"token","type":"address"}],"name":"tokenInfo","outputs":[{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"token","type":"address"},{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"}],"name":"tokenURIs","outputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"},{"internalType":"string[]","name":"_tokenURIs","type":"string[]"}],"stateMutability":"view","type":"function"}];

const ALLGLICPIXXXVER002API = "https://api.glicpixxx.love/ver002/all";

const CACHEDIRECTORY = "./cache/";

console.log();

var argv = yargs(process.argv.slice(2))
    .version('0.9.0')
    .usage('Usage: $0 <command> [options]')
    .command('count', 'Count the lines in a file')
    .command({
      command: 'info',
      describe: 'Information',
      doSomething,
      handler(argv) {
        info(argv);
      }
    })
    .command({
      command: 'apidata',
      describe: 'Download API data',
      doSomething,
      handler(argv) {
        console.log("apidata");
      }
    })
    .command({
      command: 'add',
      describe: 'Have Jenkins add a new note',
      builder: {
        title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
        },
        body: {
          describe: 'Note content',
          demandOption: true,
          type: 'string'
        }
      },
      handler(argv) {
        // notes.addNote(argv.title, argv.body)
        console.log("add Args are", argv);
      }
    })
    .example('$0 count -f foo.js', 'count the lines in the given file')
    .alias('f', 'file')
    .nargs('f', 1)
    .describe('f', 'Load a file')
    // .demandOption(['f'])
    .demandCommand(1, '').recommendCommands().strict()
    .help('h')
    .alias('h', 'help')
    .epilog('(c) BokkyPooBah / Bok Consulting Pty Ltd - Sep 2021. The MIT Licence')
    .argv;

// console.log("Args are", argv);

// import fs from 'fs';
// import util from 'util';
// import fetch from 'node-fetch';
// import yargs from 'yargs';
//
//

// var fs = require('fs');
// const util = require('util');
// const fetch = require('node-fetch');
// const BASTARDDATA = require('./bastardData.js');

// const downloadFile = (async (url, path) => {
//   const res = await fetch(url, { timeout: 15000 });
//   const fileStream = fs.createWriteStream(path);
//   await new Promise((resolve, reject) => {
//     res.body.pipe(fileStream);
//     res.body.on("error", reject);
//     fileStream.on("finish", resolve);
//   });
// });

// console.log(JSON.stringify(BASTARDDATA.BASTARDDATA["0"]));

// async function doit() {
//   for (const item of BASTARDDATA.BASTARDDATA) {
//     const tokenId = item.tokenId;
//     const arweaveUrl = item.images[2];
//     const filename = "./images/" + tokenId + "_" + arweaveUrl.replace("https://arweave.net/", "") + (item.imageMosaic == null ? ".png" : ".gif");
//     while (!fs.existsSync(filename)) {
//       console.log(filename + " downloading");
//       try {
//         await downloadFile(arweaveUrl, filename);
//       } catch (e) {
//         console.error("Error downloading: " + arweaveUrl);
//       }
//     // } else {
//     //   console.log(filename + " exists");
//     }
//   }
// }
// doit();


function doSomething(argv) {
  console.log("doSomething: " + JSON.stringify(argv));
  console.log("https://etherscan.io/address/0x1c60841b70821dca733c9b1a26dbe1a33338bd43#code");
}

function info(argv) {
  console.log("Current working directory: " + process.cwd());
  console.log("Cache directory          : " + CACHEDIRECTORY);
  console.log("Contract                 : https://etherscan.io/address/0x1c60841b70821dca733c9b1a26dbe1a33338bd43#code");
  console.log("Symbol                   : GLICPIXXXVER002");
  console.log("Name                     : GLICPIXXXVER002 - GRAND COLLECTION");
  console.log("OpenSea URL              : https://opensea.io/collection/glicpixxxver002");
  console.log("All GLICPIXXXVER002 API  : " + ALLGLICPIXXXVER002API);
  console.log();
}
