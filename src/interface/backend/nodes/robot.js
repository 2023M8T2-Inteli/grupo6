const rclnodejs = require('rclnodejs');

function listenner(msg) {
    console.log(`[Robot][/output]: ${msg}]`);
}

var node;
var publisher;

rclnodejs.init().then(() => {
  node = rclnodejs.createNode('send_to_llm');
  publisher = node.createPublisher('std_msgs/msg/String', '/llm');

  const subscription = node.createSubscription(
    "std_msgs/msg/String",
    "/output",
    (msg) => {
        listenner(msg)
    }
  )
  

  rclnodejs.spin(node);
});

function publish(msg) {
    publisher.publish(msg);
    console.log(`[APINode][/llm]: ${msg}`);
}

module.exports = publish;