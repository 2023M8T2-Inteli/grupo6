#! /bin/env python3
import rclpy
from rclpy.node import Node
from std_msgs.msg import String, Float32MultiArray
from gtts import gTTS
import os
import re

class TTSNode(Node):

    def __init__(self, timer_period=0.2):
        super().__init__('tts_node')
        self.subscription_ = self.create_subscription(
            msg_type=String,
            topic="/chatbot",
            callback=self.chatbot_callback,
            qos_profile=10
        )

        self.get_logger().info("Ouvindo ao /chatbot")

        self.timer = self.create_timer(timer_period, self.timer_callback)

        self.message = None

    def timer_callback(self):
        if self.message:
            self.get_logger().info(f"Vou falar: {self.message}")
            self.audio = self.text_to_speech(self.message)
            self.play_audio(self.audio)
            self.message = None

    def chatbot_callback(self, msg):
        self.message = msg.data
        self.get_logger().info(f"Recebi: {self.message}")
    
    def text_to_speech(text, language='en'):
        tts = gTTS(text, lang=language)
        audio_file = "speech.mp3"
        tts.save(audio_file)
        return audio_file
    
    def play_audio(audio_file):
        os.system(f"mpg321 {audio_file}")

def main(args=None):
    rclpy.init(args=args)
    tts_node = TTSNode()

    rclpy.spin(tts_node)

    tts_node.destroy_node()
    rclpy.shutdown()

if __name__ == "__main__":
    #main()
    tts = gTTS(text="Hello World!", lang='en')
    audio_file = "speech.mp3"
    tts.save(audio_file)
    os.system(f"mpg321 {audio_file}")
        