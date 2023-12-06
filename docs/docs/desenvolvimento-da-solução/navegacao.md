---
sidebar_position: 6
slug: '/navegacao'
---



# Sistema de localização e mapeamento simultâneo
O sistema de mapeamento e navegação enfoca o procedimento essencial que capacita um robô a movimentar-se de maneira autônoma em um ambiente desconhecido. Inicialmente, abordaremos o método pelo qual o robô constrói um mapa do ambiente ao seu redor, identificando obstáculos e possíveis trajetos. Em seguida, exploraremos a relevância de uma interface de comunicação eficiente que capacita os usuários a especificar destinos nos quais desejam que o robô se desloque. Essa interface organiza esses destinos em uma sequência lógica e os transmite ao robô na ordem adequada. A integração fluida entre o mapeamento e a comunicação é crucial para a autonomia do robô. Abaixo, detalharemos cada etapa desse processo, elucidando como cada componente contribui para a operação autônoma eficiente do robô.

## Desenvolvimento
### Tecnologias
As principais tecnologias utilizadas para a construção de um veículo autonômo foi uma combinação entre o ROS 2 (Robot Operating System 2), NAV2 (Navigation Stack 2) e TurtleBot3, que podem ser aplicadas em uma implementação de navegação autônoma em ambientes industriais. 

O ROS 2 desempenha um papel essencial como sistema operacional para robôs, proporcionando uma base sólida para o desenvolvimento. Integrado ao ecossistema ROS 2, o NAV2 complementa essa estrutura ao fornecer recursos avançados de navegação, que abrangem algoritmos de mapeamento, localização e planejamento de trajetória. Essa sinergia entre o ROS 2 e o NAV2 estabelece uma plataforma abrangente e robusta, impulsionando eficazmente o desenvolvimento de sistemas autônomos com capacidades avançadas de navegação.

No cenário abordado, o TurtleBot3 é caracterizado por sua modularidade e flexibilidade, integrando-se ao ROS 2 e NAV2 e consolidando-se como uma plataforma pronta para aplicação prática. Essa combinação de tecnologias viabiliza o desenvolvimento de soluções autônomas e eficazes para robôs destinados à entrega de ferramentas em ambientes industriais. O TurtleBot3, ao aproveitar a navegação autônoma proporcionada pelo NAV2 e a infraestrutura do ROS 2, pode ser programado para navegar de maneira inteligente, otimizando rotas, contornando obstáculos e realizando entregas autônomas.

No contexto de nosso projeto, essa sequência de tecnologias estabelece uma base robusta para a automação e eficiência nas operações logísticas internas. A interação entre ROS 2, NAV2 e TurtleBot3 tem como objetivo impulsionar a navegação autônoma de robôs destinados à entrega de ferramentas, representando um avanço significativo na aplicação de tecnologias de última geração para aprimorar as operações industriais. Esta documentação destaca a complementaridade entre essas tecnologias, evidenciando como elas se entrelaçam para formar uma solução integrada e eficaz em consonância com os objetivos de nosso projeto.

### Solução
O pacote de navegação e mapeamento, denominado 'chofer', é um conjunto integrado de ferramentas essenciais para o TurtleBot Burger dentro do workspace de mesmo nome, 'chofer'. Este pacote foi desenvolvido para oferecer funcionalidades fundamentais de mapeamento do ambiente e navegação autônoma do robô em diferentes cenários e ambientes. Compreendendo uma série de nós interconectados e arquivos de lançamento, o 'chofer' proporciona uma solução completa e versátil para a operação eficaz do TurtleBot Burger, permitindo que mapeie seu entorno de forma precisa e realize deslocamentos autônomos com segurança. Este pacote é crucial para capacitar o TurtleBot Burger a operar em ambientes diversos e complexos, oferecendo controle e precisão durante a exploração e a navegação.

#### Pacote Chofer
O pacote 'chofer' é um conjunto de componentes cruciais para a navegação e controle do TurtleBot Burger, composto por vários arquivos-chave.

O `mapper.py` é um nó ROS essencial neste pacote. Responsável pelo mapeamento e navegação, ele permite interação com o teclado para realizar ações específicas durante a operação do robô. Ao inicializar, cria um thread para escutar as entradas do teclado, possibilitando que o usuário pressione a tecla 's' para salvar o mapa. A função keyboard_listener configura o terminal para leitura bruta, continua a ler o teclado indefinidamente e responde à tecla 's' acionando a função save_map, que executa um comando do sistema para salvar o mapa usando o pacote nav2_map_server. Esse nó é fundamental para o pacote 'chofer', permitindo ao operador salvar o mapa do ambiente durante a navegação do TurtleBot Burger.

Além disso, o pacote 'chofer' inclui o arquivo `mapper.launch.py`, que integra o mapper.py ao sistema de lançamento (launch system) do ROS 2. Este arquivo configura o lançamento do nó mapper juntamente com outros componentes necessários, como o lançamento do cartógrafo do TurtleBot Burger (turtlebot3_cartographer) e o controle de teleop via teclado (turtlebot3_teleop). Ao executar este lançamento, é possível iniciar o mapeamento do ambiente e controlar o robô com o teclado, facilitando a criação do mapa durante a operação.

Por outro lado, temos o arquivo `navigator.py`, outro nó crucial do pacote 'chofer'. Responsável por aceitar comandos de waypoints através do tópico /waypoints, guia o TurtleBot Burger até pontos específicos no mapa. Este nó utiliza a biblioteca rclpy para se comunicar com o sistema ROS 2. Ao ser inicializado, instancia a classe BasicNavigator do pacote nav2_simple_commander para controlar a navegação básica do robô. Recebe mensagens do tópico /waypoints, interpreta os dados como pares de coordenadas (x, y) representando destinos no mapa e, com base nessas coordenadas, guia o robô até o ponto desejado. Essencial para a capacidade de navegação autônoma do TurtleBot Burger, este nó contribui significativamente para a precisão de movimento do robô no ambiente.

O `navigator.launch.py`, por sua vez, é um arquivo de lançamento que integra o navigator.py ao sistema de lançamento do ROS 2. Ao executar este lançamento, o nó navigator é iniciado juntamente com o turtlebot3_navigation2, que configura a navegação do TurtleBot Burger. Isso permite ao robô receber comandos de navegação por waypoints e realizar movimentos precisos no ambiente, facilitando a sua capacidade de navegar autonomamente pelo ambiente mapeado.

Esses arquivos e nós, em conjunto, compõem o pacote 'chofer', fornecendo funcionalidades cruciais para o mapeamento, navegação e controle do TurtleBot Burger no ambiente.

**Execução**

Para executar a navegação, utilize os seguintes comandos na pasta raiz do workspace:
```
colcon build
source install/setup.bash
bash run.sh <nome-do-mapa>.yaml
```

## Testes
### Sprint 2
O vídeo abaixo representa o resultado do processo de desenvolvimento da primeira versão do nosso sistema de mapeamento e navegação. 



Através deste primeiro registro, será possível acompanhar a evolução e os desafios enfrentados na criação do método fundamental que permite ao robô movimentar-se autonomamente em ambientes desconhecidos. Desde a construção do mapa do ambiente até a integração com uma interface de comunicação eficiente para direcionar os destinos desejados.





