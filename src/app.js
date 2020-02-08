import express from 'express';
import routes from './routes';

/**
 * Importa os arquivos de configuração e conexão com o BD
 */
import './database';

/**
 * O arquivo app.js buscara organizar a estrutura da aplicacao, bem
 * como todos as outras funcionalidades e plugins dentro de seus middlewares e rotas.
 * Essa separação de responsabilidades auxilia nos testes unitários e leitura de código
 */
class App {
  /**
   * Instancia o Express, os middlewares e rotas definidos dentro das funções.
   */
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Habilita o Express para receber requisições JSON, equivalente ao uso do body-parser
    this.server.use(express.json());
  }

  routes() {
    // Importa e usa as rotas de outro arquivo
    this.server.use(routes);
  }
}

// Exporta o método server para uso externo
export default new App().server;
