import { Injectable } from '@nestjs/common';
import { PrismaService } from '@utils/prisma/prisma.service';

@Injectable()
export class ExampleService {
  constructor(private readonly prismaService: PrismaService) {}

  test(): string {
    return 'this is an example';
  }
}
