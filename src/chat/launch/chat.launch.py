import os
from dotenv import load_dotenv
from launch_ros.actions import Node
from launch import LaunchDescription
from launch.actions import IncludeLaunchDescription
from launch.launch_description_sources import PythonLaunchDescriptionSource
from ament_index_python.packages import get_package_share_directory

def generate_launch_description():
    chat_input = Node(
        package='chat',
        executable='input',
        name='chat_input',
        prefix='gnome-terminal --',
        output='screen'
    )

    chat_llm = Node(
        package='chat',
        executable='llm',
        name='chat_llm',
        output='screen',
    )

    chat_output = Node(
        package='chat',
        executable='output',
        name='chat_output',
        output='screen'
    )

    chat_stt = Node(
        package='chat',
        executable='stt',
        name='chat_stt',
        output='screen'
    )

    chat_tts = Node(
        package='chat',
        executable='tts',
        name='chat_tts',
        output='screen'
    )

    return LaunchDescription([    
        chat_input,
        chat_llm,
        chat_output,
        chat_tts,
    ])