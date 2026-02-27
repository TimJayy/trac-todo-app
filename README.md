# Decentralized To-Do List - Trac Network Bounty Submission

**Bounty Hunter TRAC Wallet Address:** `trac1gqtsmnumt4gagzy023pv6vmlrsne7493hyqk9wqj7usas0vgqq2qc8wmkv`

## Overview
This project is a custom implementation of a decentralized Task Manager / To-Do List built on the **Intercom** stack. It demonstrates a working peer-to-peer (P2P) network where peers discover each other and communicate directly over the Trac/Holepunch stack. 

By utilizing the Intercom contract and protocol system, this application provides a deterministic replicated state to securely store, manage, and retrieve user tasks across a local testing subnet.

## Custom Implementation
The default Intercom template was extended to support this decentralized productivity application.
* **`contract.js`**: Modified to include a strict security schema (`addTask`) that validates task properties (id, title, completion status) and safely writes the task payload to the decentralized database. It also includes terminal success logging.
* **`protocol.js`**: Updated to parse incoming JSON task commands, map them to the contract logic, and intercept specific `/get` commands to output clean, readable database queries to the terminal.

## How to Run Locally
Ensure you have the **Pear runtime** installed to run this application.

### 1. Install Dependencies
If running for the first time, install the required network packages:
```bash
npm install

2. Start the Admin Peer (Bootstrapper)
npx pear run . --peer-store-name admin --msb-store-name admin-msb --subnet-channel todo-app-v1 --dht-bootstrap "127.0.0.1:49737"
Note: Once running, type /stats to retrieve the 64-character Writer Key needed for the joiner peer.

3. Start the Joiner Peer
Open a second terminal window and run:
npx pear run . --peer-store-name joiner --msb-store-name joiner-msb --subnet-channel todo-app-v1 --subnet-bootstrap "<INSERT_64_CHAR_WRITER_KEY_HERE>" --dht-bootstrap "127.0.0.1:49737"

Testing the Network
To record a new task (Simulation mode is used to bypass MSB fee validation for local testing):
/tx --command '{"action": "addTask", "id": "101", "title": "Deploy to Intercom main", "completed": false}' --sim 1

To retrieve the stored task data:
/get --key "task:101"

Gemini said
Here is a fresh, professional README.md file tailored exactly for your new To-Do List app, fully updated with your correct TRAC wallet address.

You can copy this entire block and paste it directly into the README.md file in your VS Code, save it, and upload it to GitHub!

Markdown
# Decentralized To-Do List - Trac Network Bounty Submission

**Bounty Hunter TRAC Wallet Address:** `trac1gqtsmnumt4gagzy023pv6vmlrsne7493hyqk9wqj7usas0vgqq2qc8wmkv`

## Overview
This project is a custom implementation of a decentralized Task Manager / To-Do List built on the **Intercom** stack. It demonstrates a working peer-to-peer (P2P) network where peers discover each other and communicate directly over the Trac/Holepunch stack. 

By utilizing the Intercom contract and protocol system, this application provides a deterministic replicated state to securely store, manage, and retrieve user tasks across a local testing subnet.

## Custom Implementation
The default Intercom template was extended to support this decentralized productivity application.
* **`contract.js`**: Modified to include a strict security schema (`addTask`) that validates task properties (id, title, completion status) and safely writes the task payload to the decentralized database. It also includes terminal success logging.
* **`protocol.js`**: Updated to parse incoming JSON task commands, map them to the contract logic, and intercept specific `/get` commands to output clean, readable database queries to the terminal.

## How to Run Locally
Ensure you have the **Pear runtime** installed to run this application.

### 1. Install Dependencies
If running for the first time, install the required network packages:
```bash
npm install
2. Start the Admin Peer (Bootstrapper)
Bash
npx pear run . --peer-store-name admin --msb-store-name admin-msb --subnet-channel todo-app-v1 --dht-bootstrap "127.0.0.1:49737"
Note: Once running, type /stats to retrieve the 64-character Writer Key needed for the joiner peer.

3. Start the Joiner Peer
Open a second terminal window and run:

Bash
npx pear run . --peer-store-name joiner --msb-store-name joiner-msb --subnet-channel todo-app-v1 --subnet-bootstrap "<INSERT_64_CHAR_WRITER_KEY_HERE>" --dht-bootstrap "127.0.0.1:49737"
Testing the Network
To record a new task (Simulation mode is used to bypass MSB fee validation for local testing):

Plaintext
/tx --command '{"action": "addTask", "id": "101", "title": "Deploy to Intercom main", "completed": false}' --sim 1
To retrieve the stored task data:

Plaintext
/get --key "task:101"
Proof of Execution
1. Successful Smart Contract Execution (Admin)
2. Successful P2P Network Connection (Joiner)
