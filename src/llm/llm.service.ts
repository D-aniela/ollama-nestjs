import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LlmService {
  private ollamaUrl = 'http://localhost:11434/api/generate';

  async generateResponse(prompt: string): Promise<string> {
    try {
      const response: { data: { response: string } } = await axios.post(
        this.ollamaUrl,
        {
          model: 'mistral',
          prompt: prompt,
          stream: false,
        },
      );

      return response.data.response ?? 'No response received'; // Maneja casos de respuesta vacía
    } catch (error) {
      console.error('Error al llamar a Ollama:', error.message);
      return 'Error al generar respuesta';
    }
  }
}
