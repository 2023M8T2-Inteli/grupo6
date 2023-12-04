import rclpy  # Importa o pacote rclpy para trabalhar com ROS 2
from rclpy.node import Node  # Importa a classe Node para criar um nó
from std_msgs.msg import String  # Importa o tipo de mensagem String do ROS
import logging  # Importa o módulo de logging para registro de mensagens

class LoggerNode(Node):
    def __init__(self):
        """
        Inicializa o nó do Logger.
        """
        super().__init__("logger_node")  # Chama o construtor da classe Node
        # Configuração do ROS
        self.subscription = self.create_subscription(
            String, "log_register", self.listener_callback, 10
        )  # Cria uma assinatura para o tópico "log_register"
        
        # Configuração do logging para exibir mensagens no console
        logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
        self.get_logger().info("Logger Node está rodando e registrando informações ")

    def listener_callback(self, msg):
        """
        Callback chamado ao receber uma mensagem no tópico "log_register".
        Registra mensagens de log com as informações recebidas.
        """
        self.get_logger().info(f'Registrando log: "{msg.data}"')

def main(args=None):
    """
    Função principal para iniciar o nó do logger.
    """
    rclpy.init(args=args)  # Inicializa o sistema ROS

    logger_node = LoggerNode()  # Cria uma instância do nó LoggerNode
    try:
        rclpy.spin(logger_node)  # Mantém o programa executando e aguardando eventos
    except KeyboardInterrupt:
        pass
    finally:
        logger_node.destroy_node()  # Finaliza o nó
        rclpy.shutdown()  # Encerra o sistema ROS

if __name__ == "__main__":
    main()  # Chama a função principal para iniciar o nó
