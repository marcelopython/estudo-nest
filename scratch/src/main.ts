import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.modules';


async function booltstrap() {
    
    const app = await NestFactory.create(AppModule)

    await app.listen(3000)

}

booltstrap()