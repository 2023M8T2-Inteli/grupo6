---
sidebar_position: 2
slug: '/requisitos'
---

<div style={{display: 'flex', gap:'50px', paddingLeft:'30px' }}>

# Requisitos Funcionais

| N° | Requisito Funcional |
|--------|-----------|
| 1 | Mapeamento da área (espaço do almoxarifado) |
| 2 | Geração de um relatório |
| 3 | Dashboard para visualização do relatório |
| 4 | Capacidade do sistema compreender fala ou texto |
| 5 | Navegação autônoma |
| 6 | Conversão de Texto-Fala e Fala-Texto (TTS e STT) |
| 7 | Capacidade de acompanhar o robô remotamente |
| 8 | Deve haver uma confirmação para as peças que o robô sugerir |
| 9 | Deve haver uma lista com as peças que o cliente solicitou |
| 10 | O sistema deve saber quais peças existem no inventário |
| 11 | O robô deve se mover de forma segura |


#### 1. Mapeamento da Área (Espaço do Almoxarifado)

**Descrição:** O robô deve ser capaz de realizar o mapeamento completo do espaço do almoxarifado, identificando a localização de todas as estantes e áreas de armazenamento.

**Critérios de Aceitação:**
- O robô deve percorrer todo o espaço do almoxarifado.
- O sistema deve criar um mapa detalhado, incluindo a localização de estantes e áreas específicas.
- O mapa deve ser preciso e atualizado conforme mudanças no layout do almoxarifado.

#### 2. Geração de um Relatório

**Descrição:** O sistema deve ser capaz de gerar um relatório diário em formato CSV, contendo todas as operações realizadas pelo robô, incluindo pedidos atendidos e localizações visitadas.

**Critérios de Aceitação:**
- O relatório deve ser gerado automaticamente ao final de cada dia de operação.
- O formato do relatório deve ser CSV, facilitando a integração com outros sistemas.
- O relatório deve incluir detalhes como data, hora, pedido atendido e localização visitada.

#### 3. Dashboard para Visualização do Relatório

**Descrição:** Deve haver um dashboard intuitivo para a visualização dos relatórios gerados, permitindo aos gestores acompanhar as atividades do robô e analisar dados relevantes.

**Critérios de Aceitação:**
- O dashboard deve ser acessível através de uma interface web ou aplicativo.
- Deve permitir a visualização de relatórios diários, semanais e mensais.
- O dashboard deve apresentar informações de forma clara e organizada, incluindo gráficos e tabelas quando apropriado.
- Deve haver opções para filtrar e buscar informações específicas dentro dos relatórios.

#### 4. Capacidade do Sistema Compreender Fala ou Texto

- **Descrição:** O sistema deve ser capaz de compreender comandos de voz e texto em linguagem natural, permitindo que os operadores interajam com o robô utilizando fala ou texto escrito.
- **Critérios de Aceitação:**
  - O sistema deve reconhecer e interpretar comandos de voz em português com uma precisão de pelo menos 95%.
  - O sistema deve ser capaz de processar e responder a comandos de texto em português com uma precisão de pelo menos 98%.
  - O tempo de resposta do sistema para comandos de voz ou texto não deve exceder 3 segundos.

#### 5. Navegação Autônoma

- **Descrição:** O robô deve ser capaz de navegar autonomamente pelo almoxarifado, evitando obstáculos e seguindo rotas otimizadas para alcançar os locais designados.
- **Critérios de Aceitação:**
  - O robô deve ser capaz de mapear o ambiente do almoxarifado e atualizar seu mapa em tempo real.
  - O robô deve evitar obstáculos com uma taxa de sucesso de pelo menos 99%.
  - O robô deve ser capaz de seguir rotas otimizadas para os locais designados, com um desvio máximo de 5% da rota ideal.

#### 6. Conversão de Texto-Fala e Fala-Texto (TTS e STT)

- **Descrição:** O sistema deve ser capaz de converter texto em fala (TTS) e fala em texto (STT), permitindo uma comunicação bidirecional eficaz entre o operador e o robô.
- **Critérios de Aceitação:**
  - A conversão de texto em fala (TTS) deve ser clara e compreensível, com uma taxa de inteligibilidade de pelo menos 95%.
  - A conversão de fala em texto (STT) deve ter uma precisão de pelo menos 95% na transcrição de comandos de voz.
  - O sistema deve ser capaz de realizar a conversão TTS e STT em tempo real, com um tempo de resposta não superior a 2 segundos.

#### 7. Capacidade de Acompanhar o Robô Remotamente

**Descrição:** O sistema deve permitir que os operadores ou supervisores acompanhem a localização e o status do robô em tempo real através de uma interface remota, como um aplicativo móvel ou um painel de controle baseado na web.

**Critérios de Aceitação:**
- A interface remota deve mostrar a localização atual do robô no mapa do almoxarifado.
- Deve exibir informações sobre o status do robô, incluindo nível de bateria e tarefas em andamento.
- A atualização das informações na interface remota deve ocorrer em tempo real ou com um atraso máximo de 5 segundos.

#### 8. Deve Haver uma Confirmação para as Peças que o Robô Sugerir

**Descrição:** Quando o robô identificar e sugerir uma peça com base no pedido do operador, deve haver um mecanismo de confirmação para que o operador possa validar a escolha antes de prosseguir.

**Critérios de Aceitação:**
- Após sugerir uma peça, o robô deve solicitar uma confirmação do operador.
- O operador deve poder confirmar ou rejeitar a sugestão através de um comando de voz ou interface de toque.
- Se a sugestão for rejeitada, o robô deve ser capaz de oferecer alternativas ou solicitar mais informações.

#### 9. Deve Haver uma Lista com as Peças que o Cliente Solicitou

**Descrição:** O sistema deve ser capaz de gerar e manter uma lista das peças solicitadas pelo operador durante a interação com o robô, facilitando o rastreamento e a gestão do pedido.

**Critérios de Aceitação:**
- A lista deve ser gerada automaticamente à medida que o operador solicita peças.
- A lista deve ser acessível tanto pelo operador quanto pelo robô durante a interação.
- A lista deve ser atualizável, permitindo adicionar ou remover itens conforme necessário.
- Após a conclusão do pedido, a lista deve ser armazenada para referência futura e integração com outros sistemas de gestão de almoxarifado.

#### 10. Conhecimento do Inventário pelo Sistema

**Descrição:** O sistema deve ter a capacidade de identificar e manter um registro atualizado de todas as peças disponíveis no inventário do almoxarifado.

**Critérios de Aceitação:**
- O sistema deve ser capaz de listar todas as peças disponíveis no inventário.
- Deve haver uma funcionalidade para atualizar o inventário sempre que uma peça for adicionada ou removida.
- O sistema deve fornecer informações detalhadas sobre cada peça, incluindo nome, código, localização e quantidade disponível.

#### 11. Movimento Seguro do Robô

**Descrição:** O robô deve ser capaz de se mover pelo almoxarifado de forma segura, evitando colisões com objetos, estruturas e pessoas.

**Critérios de Aceitação:**
- O robô deve ser equipado com sensores de proximidade e sistemas de detecção de obstáculos.
- Durante o movimento, o robô deve manter uma distância segura de objetos, estruturas e pessoas.
- Em caso de detecção de obstáculo iminente, o robô deve ser capaz de parar imediatamente ou desviar de forma segura.
- O robô deve seguir um caminho pré-definido, ajustando sua trajetória conforme necessário para garantir a segurança.

# Requisitos Não Funcionais


| N° | Requisito Não Funcional |
|--------|-----------|
| 1 | O sistema deve ser capaz de mapear um espaço de 50m² em cerca de 10 minutos |
| 2 | O relatório deve ser gerado em menos de 30 segundos |
| 3 | O dashboard deve ser gerado em menos de 30 segundos |
| 4 | A lista com as peças solicitadas deve ser gerada em menos de 5 segundos |
| 5 | A resposta ao comando de voz não deve demorar mais que 5 segundos para ser executada |
| 6 | O sistema deve processar comandos de fala ou texto em menos de 5 segundos |
| 7 | O sistema deve ser capaz de operar por pelo menos 8 horas contínuas sem falhas |
| 8 | O robô deve encontrar a melhor rota para chegar nos seus destinos em menos de 20 minutos |
| 9 | O robô deve ter uma margem de segurança em suas rotas de, pelo menos, 5cm |
| 10 | O robô de serviço deve ser capaz de operar continuamente por um período mínimo de 8 horas sem necessidade de recarga, garantindo assim a cobertura de um turno de trabalho completo no almoxarifado |

#### 1. Mapeamento de Espaço

- **Requisito Não Funcional (RNF):** O sistema deve ser capaz de mapear um espaço de 50m² em cerca de 10 minutos.
    
- **Método de Teste:**
    
    1. **Preparação:** Selecionar um espaço de 50m² para o teste.
    2. **Execução:** Iniciar o processo de mapeamento e cronometrar o tempo necessário para a conclusão.
    3. **Avaliação:** Verificar se o mapeamento foi concluído em 10 minutos ou menos.
    4. **Documentação:** Registrar o tempo exato de mapeamento e a qualidade do mapa gerado.

#### 2. Geração de Relatório

- **Requisito Não Funcional (RNF):** O relatório deve ser gerado em menos de 30 segundos.
    
- **Método de Teste:**
    
    1. **Preparação:** Garantir que o sistema esteja operacional e pronto para gerar relatórios.
    2. **Execução:** Solicitar a geração de um relatório e cronometrar o tempo de processamento.
    3. **Avaliação:** Confirmar se o relatório foi gerado em menos de 30 segundos.
    4. **Documentação:** Anotar o tempo de geração do relatório e a integridade dos dados contidos.

#### 3. Geração de Dashboard

- **Requisito Não Funcional (RNF):** O dashboard deve ser gerado em menos de 30 segundos.
    
- **Método de Teste:**
    
    1. **Preparação:** Assegurar que o sistema esteja configurado para gerar dashboards.
    2. **Execução:** Iniciar a geração do dashboard e medir o tempo necessário.
    3. **Avaliação:** Verificar se o dashboard foi gerado em menos de 30 segundos.
    4. **Documentação:** Documentar o tempo de geração e a qualidade visual e informativa do dashboard.

#### 4. Geração Rápida da Lista de Peças

**Requisito Não Funcional (RNF):** A lista com as peças solicitadas pelo operador deve ser gerada pelo sistema do robô em menos de 5 segundos após a solicitação.

**Método de Teste:**

- **Execução:** Realizar múltiplas solicitações de peças ao sistema do robô.
- **Avaliação:** Medir o tempo entre a solicitação e a geração da lista de peças.
- **Critério de Aceitação:** O requisito é atendido se a lista for gerada em menos de 5 segundos em todas as solicitações.

#### 5. Resposta Rápida ao Comando de Voz

**Requisito Não Funcional (RNF):** A resposta do robô ao comando de voz do operador não deve demorar mais que 5 segundos para ser executada.

**Método de Teste:**

- **Execução:** Emitir comandos de voz variados ao robô.
- **Avaliação:** Cronometrar o tempo entre o comando de voz e a execução da resposta pelo robô.
- **Critério de Aceitação:** O requisito é atendido se a resposta for executada em menos de 5 segundos em todos os comandos.

#### 6. Processamento Rápido de Comandos de Fala ou Texto

**Requisito Não Funcional (RNF):** O sistema do robô deve processar comandos de fala ou texto em menos de 5 segundos.

**Método de Teste:**

- **Execução:** Enviar comandos de fala e texto ao sistema do robô.
- **Avaliação:** Medir o tempo entre o envio do comando e a resposta do sistema.
- **Critério de Aceitação:** O requisito é atendido se o processamento for concluído em menos de 5 segundos em todos os comandos.

#### 7. Requisito Não Funcional: Operação Contínua

**Aspecto Específico do Sistema:** Estabilidade Operacional

**Requisito Não Funcional (RNF):** O sistema deve ser capaz de operar por pelo menos 8 horas contínuas sem falhas, garantindo a confiabilidade e a continuidade das operações no almoxarifado.

**Método de Teste**

-  **Preparação:**
   - Garantir que o sistema esteja em condições normais de operação.
   - Iniciar o teste no início de um turno de trabalho.

- **Execução:**
   - Monitorar continuamente o sistema durante 8 horas de operação.
   - Registrar qualquer falha ou interrupção que ocorra.

- **Avaliação:**
   - O requisito é considerado atendido se o sistema operar de forma contínua e sem falhas durante o período de 8 horas.

- **Documentação:**
   - Documentar os resultados do teste, incluindo qualquer falha ou interrupção observada.

#### 8. Requisito Não Funcional: Eficiência de Navegação

**Aspecto Específico do Robô:** Navegação e Tempo de Resposta

**Requisito Não Funcional (RNF):** O robô deve encontrar a melhor rota para chegar aos seus destinos em menos de 20 minutos, otimizando o tempo de busca e deslocamento no almoxarifado.

**Método de Teste**

-  **Preparação:**
   - Definir diversos destinos dentro do almoxarifado.

-  **Execução:**
   - Solicitar ao robô que encontre a rota para cada destino.
   - Cronometrar o tempo que o robô leva para encontrar e percorrer a rota até o destino.

-  **Avaliação:**
   - O requisito é considerado atendido se o robô encontrar e percorrer a rota para cada destino em menos de 20 minutos.

-  **Documentação:**
   - Documentar os tempos registrados para cada rota.

#### 9. Requisito Não Funcional: Margem de Segurança

**Aspecto Específico do Robô:** Segurança na Navegação

**Requisito Não Funcional (RNF):** O robô deve manter uma margem de segurança em suas rotas de, pelo menos, 5cm, evitando colisões e garantindo a segurança no ambiente de trabalho.

**Método de Teste**

- **Preparação:**
   - Configurar um percurso de teste com obstáculos.

- **Execução:**
   - Fazer o robô percorrer o trajeto, observando a distância mantida em relação aos obstáculos.

-  **Avaliação:**
   - Utilizar uma régua ou dispositivo de medição para verificar se a margem de segurança de 5cm é mantida.
   - O requisito é considerado atendido se o robô mantiver a margem de segurança em todas as situações.

-  **Documentação:**
   - Documentar as medições e observações feitas durante o teste.

#### 10. **Requisito Não Funcional:** Autonomia da Bateria

**Requisito Não Funcional (RNF):** O robô de serviço deve ser capaz de operar continuamente por um período mínimo de 8 horas sem necessidade de recarga, garantindo assim a cobertura de um turno de trabalho completo no almoxarifado.

**Método de Teste**

- **Preparação:**
    - Carregar completamente a bateria do robô antes do teste.
    - Garantir que o robô esteja em condições normais de operação.

- **Execução:**
    - Iniciar o teste no início de um turno de trabalho.
    - O robô deve realizar suas funções normais de mapeamento, navegação e interação com os operadores.
    - Monitorar continuamente o nível de bateria do robô.

- **Avaliação:**
    - Registrar o tempo total de operação até que a bateria atinja um nível crítico que exija recarga.
    - O requisito é considerado atendido se o robô operar por no mínimo 8 horas contínuas.

- **Documentação:**
    - Documentar os resultados do teste, incluindo o tempo total de operação e o comportamento do robô ao atingir o nível crítico de bateria.

#### Padrão de Qualidade

- **Clareza e Precisão:** Cada RNF é específico e claro, estabelecendo um limite de tempo de 5 segundos para a execução das tarefas.
- **Mensurabilidade:** Os requisitos são quantificáveis, definindo um tempo mensurável para avaliação.
- **Relevância:** Estes RNFs são relevantes para o contexto do projeto, garantindo a eficiência e a rapidez na interação com o robô.
- **Método de Teste Prático:** Os métodos de teste são práticos e realizáveis, utilizando procedimentos padrão e equipamentos disponíveis, com critérios objetivos para avaliação.

</div>
