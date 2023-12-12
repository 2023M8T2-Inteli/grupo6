from launch import LaunchDescription
from launch_ros.actions import Node
from launch.actions import IncludeLaunchDescription
from launch.launch_description_sources import PythonLaunchDescriptionSource
from launch.substitutions import ThisLaunchFileDir
from launch.substitutions import LaunchConfiguration
from ament_index_python.packages import get_package_share_directory
import os

def generate_launch_description():
    # Get the package directories
    turtlebot3_navigation2_dir = get_package_share_directory('turtlebot3_navigation2')
    turtlebot3_gazebo_dir = get_package_share_directory('turtlebot3_gazebo')
    navigation_dir = get_package_share_directory('navigation')

    # Define launch file paths
    navigation2_launch_file = PythonLaunchDescriptionSource(
        os.path.join(turtlebot3_navigation2_dir, 'launch', 'navigation2.launch.py')
    )
    gazebo_launch_file = PythonLaunchDescriptionSource(
        os.path.join(turtlebot3_gazebo_dir, 'launch', 'turtlebot3_world.launch.py')
    )

    movement_launch_file = PythonLaunchDescriptionSource(
        os.path.join(navigation_dir, 'movement.py')
    )

    # Include Launch Descriptions
    navigation2_launch = IncludeLaunchDescription(navigation2_launch_file)
    gazebo_launch = IncludeLaunchDescription(gazebo_launch_file)
    movement_launch = IncludeLaunchDescription(movement_launch_file)

    # Create the launch description and populate
    ld = LaunchDescription()

    # Add actions to the launch description
    ld.add_action(navigation2_launch)
    ld.add_action(gazebo_launch)
    ld.add_action(movement_launch)

    return ld