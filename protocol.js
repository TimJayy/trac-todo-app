import { Protocol } from 'trac-peer';

export default class TaskManagerProtocol extends Protocol {
    // CRITICAL RULE 4: Parse JSON and map to the contract function
    mapTxCommand(command) {
        try {
            const json = JSON.parse(command);

            // Trigger the schema-validated contract function
            if (json.action === 'addTask') {
                return {
                    type: 'addTask', 
                    value: {
                        id: json.id,
                        title: json.title,
                        completed: json.completed || false
                    }
                };
            }
            
            throw new Error("Action not recognized.");
        } catch (error) {
            console.error("Transaction Mapping Error:", error.message);
            return null; // Drop invalid transactions
        }
    }

    // CRITICAL RULE 5: Intercept custom commands to read local autobase
    async customCommand(input) {
        // Intercept '/get --key "..."' pattern
        if (input.startsWith('/get --key')) {
            const match = input.match(/--key\s+"([^"]+)"/);
            
            if (match && match[1]) {
                const key = match[1];
                
                // Read the local autobase state
                const data = await this.get(key);
                
                if (data) {
                    console.log(`[Task Data] ${key}:`, data);
                } else {
                    console.log(`[Not Found] No task exists at key: ${key}`);
                }
                return true; // Inform the REPL/CLI that the command was handled
            }
        }
        
        return false; // Pass through unhandled inputs
    }
}