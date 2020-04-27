const Web3 = require("web3")
const web3 = new Web3("http://192.168.56.2:22000")
const abi = [
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_schemaList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_schemaOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_schemaTitles",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_schemas",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_schemaid",
				"type": "address"
			}
		],
		"name": "get",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_ownerID",
				"type": "address"
			}
		],
		"name": "getList",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_schemaid",
				"type": "address"
			}
		],
		"name": "getTitle",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_schemaId",
				"type": "address"
			}
		],
		"name": "remove",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_schemaId",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_schema",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_ownerID",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			}
		],
		"name": "set",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const address = "0x590c9404D974a845eb71372c84B60106e0DBe5F3"

const contractInstance = new web3.eth.Contract(abi, address)
// setup end

// C
// contractInstance.methods.set("0x4a5F7AC37f6E4f6bA81d2Cda4eE00f5d47A0C3fC", "Hello World2", "0x4a5F7AC37f6E4f6bA81d2Cda4eE00f5d47A0C3fC", "sataki2").send({from: "0x4a5F7AC37f6E4f6bA81d2Cda4eE00f5d47A0C3fC", gas: 800000}, function(error, transactionHash){ console.log(error) })
// R
contractInstance.methods.get('0x4a5F7AC37f6E4f6bA81d2Cda4eE00f5d47A0C3fC').call({from: '0x4a5F7AC37f6E4f6bA81d2Cda4eE00f5d47A0C3fC'}, function(error, result){console.log(result)})
// D
// contractInstance.methods.remove("0x4a5F7AC37f6E4f6bA81d2Cda4eE00f5d47A0C3fC").send({from: "0x4a5F7AC37f6E4f6bA81d2Cda4eE00f5d47A0C3fC", gas: 800000}, function(error, transactionHash){ console.log(error) })



