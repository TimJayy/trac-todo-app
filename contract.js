import { Contract } from 'trac-peer';

export default class TaskManagerContract extends Contract {
    constructor() {
        super();

        // CRITICAL RULE 2: Explicitly register the function schema
        this.addSchema('addTask', {
            value: {
                $$strict: true,
                $$type: "object",
                id: { type: "string" },
                title: { type: "string" },
                completed: { type: "boolean", optional: true }
            }
        });
    }

    // Contract function triggered by the protocol
    async addTask() {
        // CRITICAL RULE 3: Access payload via this.value
        const taskData = this.value;
        const taskKey = `task:${taskData.id}`;

        // Save state to the local autobase
        await this.put(taskKey, {
            id: taskData.id,
            title: taskData.title,
            completed: taskData.completed || false,
            timestamp: Date.now()
        });
        
        // Let the user know it worked!
        console.log(`\n✅ SUCCESS: Task '${taskData.title}' has been securely saved to the database!`);
    }
}