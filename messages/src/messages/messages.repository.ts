import { readFile, writeFile } from "fs/promises";


export class MessagesRepository {
    
    async findOne(id: string) {
        const messages = await this.getAllJson()
        return messages[id]
    }

    async findAll() {
        return this.getAllJson()
    }

    async create(content: string) {

        const messages = await this.getAllJson()

        const id = Math.floor(Math.random() * 999)

        messages[id] = {id, content}

        await writeFile('messages.json', JSON.stringify(messages))

    }

    async getAllJson() {
        const contents = await readFile('messages.json', 'utf8')
        return JSON.parse(contents)
    }
}
