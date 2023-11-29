import rclpy  
from rclpy.node import Node  
from std_msgs.msg import String 
import logging 

class LoggerNode(Node):
    def __init__(self):
        """
        Inicializa o nó do Logger.
        """
        super().__init__("logger_node")
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
    rclpy.init(args=args)  

    logger_node = LoggerNode()  
    try:
        rclpy.spin(logger_node) 
    except KeyboardInterrupt:
        pass
    finally:
        logger_node.destroy_node()
        rclpy.shutdown()  

if __name__ == "__main__":
    main()