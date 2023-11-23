#! /usr/bin/env python3 
import rclpy
import tf_transformations
from rclpy.node import Node
from nav2_simple_commander.robot_navigator import BasicNavigator
from geometry_msgs.msg import PoseStamped, Float32MultiArray
from tf_transformations import quaternion_from_euler
from math import pi
import re

class Navigation(Node):
    def __init__(self):
        super().__init__('navigation')
        self.navigator = BasicNavigator()
        self.initial_pose = self.create_pose_stamped(self.navigator, 0.0, 0.0, 0.0)

        self.nav.waitUntilNav2Active()
        self.nav.setInitialPose(self.initial_pose)

        self.create_subscription(Float32MultiArray, 'waypoints', self.listener_callback, 10)
        self.subscription

    def create_pose_stamped(self, navigator, pos_x, pos_y, rot_z):
        q_x, q_y, q_z, q_w = tf_transformations.quaternion_from_euler(0.0, 0.0, rot_z)
        self.pose = PoseStamped()
        self.pose.header.frame_id = 'map'
        self.pose.header.stamp = navigator.get_clock().now().to_msg()
        self.pose.pose.position.x = pos_x
        self.pose.pose.position.y = pos_y
        self.pose.pose.position.z = pos_x
        self.pose.pose.orientation.x = q_x
        self.pose.pose.orientation.y = q_y
        self.pose.pose.orientation.z = q_z
        self.pose.pose.orientation.w = q_w
        return self.pose
    
    def listener_callback(self, msg, navigator):
        command = msg.data
        x = command[0]
        y = command[1]
        self.get_logger().info(f'Going to ({x},{y})')
        goal_point = self.create_pose_stamped(self.navigator, x, y, 0.0)
        self.navigator.goToPose(goal_point)

def main(args=None):
    rclpy.init(args=args)
    navigation = Navigation()
    rclpy.spin(navigation)
    rclpy.destroy_node()
    rclpy.shutdown()
    
if __name__ == "__main__":
    main()
