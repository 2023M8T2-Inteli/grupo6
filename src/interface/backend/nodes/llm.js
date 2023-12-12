// TODO: create node class
//router.get('/', chatController.getChat);
const rclnodejs = require('rclnodejs');

class SendToLLM {
  constructor() {
    this.node = rclnodejs.createNode('send_to_llm');
    this.publisher = this.node.createPublisher('std_msgs/msg/String', '/llm');
    this.subscription = this.node.createSubscription('std_msgs/msg/String', '/output', (msg) => {
      console.log(`I heard: [${msg.data}]`);
    });
  }

  
}
rclnodejs.init().then(() => {
  const node = rclnodejs.createNode('publisher_example_node');
  const publisher = node.createPublisher('std_msgs/msg/String', '/llm');
  publisher.publish("parametro do llm");

  rclnodejs.spin(node);
});
//sefodeu kkkakakaka


module.exports = router;