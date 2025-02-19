import { Controller, Get, Query } from '@nestjs/common';
import { LlmService } from './llm.service';

@Controller('ai')
export class LlmController {
  constructor(private readonly llmService: LlmService) {}

  @Get('generate')
  async generate(@Query('prompt') prompt: string) {
    return this.llmService.generateResponse(prompt);
  }
}
