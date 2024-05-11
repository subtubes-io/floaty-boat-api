import { Controller, Get } from '@nestjs/common';
import { ExampleService } from '@api/example/example.service';
import { ApiTags } from '@nestjs/swagger';

const CONTROLLER_NAME = `example`;
@ApiTags(CONTROLLER_NAME)
@Controller(CONTROLLER_NAME)
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  async findOne() {
    return this.exampleService.test();
  }
}
