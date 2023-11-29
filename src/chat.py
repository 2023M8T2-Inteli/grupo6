import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Float32MultiArray

class Chatbot(Node):
    def __init__(self):
        super().__init__('chatbot')
        self.publisher = self.create_publisher(Float32MultiArray, 'waypoints', 10)

        def publisher_point(self, point):
            msg = Float32MultiArray()
            msg.data = point
            self.publisher.publish(msg)
            self.get_logger().info('Publishing: "%s"' % msg.data)
            
        intent_dict = {
            r"\bponto\s+x\b": "x",
            r"\bponto\s+y\b": "y",
            r"\bponto\s+w\b": "w",
        }

        point_dict = {
            "x": [2.0, 0.0, 0.0],
            "y": [2.5, 1.0, 0.0],
            "z": [0.0, 1.0, 0.0],
        }

        def chatbot(self, publisher):
            while rclpy.ok():
                command = input("Enter a command: ")
                if command == "exit":
                    self.get_logger().info("Exiting...")
                    rclpy.shutdown()
                    exit()
                else:
                    for key, value in intent_dict.items():
                        pattern = re.compile(key)
                        groups = pattern.findall(command)
                        if groups:
                            publisher(point_dict[groups[0]])
                            break
                    else:
                        self.get_logger().info("I don't understand")

def main(args=None):
    rclpy.init(args=args)
    chatbot = Chatbot()
    chatbot.chatbot(chatbot.publisher_point)
    rclpy.spin(chatbot)
    chatbot.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
