import { MessagesRepository } from "./messages.repository"

export class MessagesService {

    private messageRepo: MessagesRepository;

    constructor() {
        // Service is createing its own dependencies
        // DONT DO THIS ON REAL APPS
        this.messageRepo = new MessagesRepository()
    }

    async findOne(id: string) {
        return this.messageRepo.findOne(id)
    }

    async findAll() {
        return this.messageRepo.findAll()
    }

    create(content: string) {
        return this.messageRepo.create(content)
    }


}
