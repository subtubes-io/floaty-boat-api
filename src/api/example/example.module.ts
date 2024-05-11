import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { PrismaService } from '@utils/prisma/prisma.service';
import { ExampleController } from '@api/example/example.controller';

@Module({
  exports: [ExampleService],
  providers: [ExampleService, PrismaService],
  controllers: [ExampleController],
})
export class ExampleModule {}
