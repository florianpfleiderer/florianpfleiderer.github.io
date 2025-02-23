---
title: Autonomous Robot Hockey System
date: June 2023
repo: florianpfleiderer/ARHS
topics: ["ROS", "Motion-Planning", "Computer-Vision", "SLAM", "Sensor-Fusion", "OpenCV", "Navigation"]
lead: developing a complete autonomous system for robot hockey competition
image: arhs.png
---

This project implements a comprehensive ROS-based system enabling robots to play
hockey autonomously. The system integrates advanced motion planning with the
ROS navigation stack (move_base), sophisticated obstacle avoidance using sensor
fusion (LIDAR and RGB-D cameras), and real-time game element detection through
OpenCV and point cloud processing. Key features include dynamic path planning
with obstacle prediction, precise localization using SLAM techniques (gmapping),
and intelligent puck manipulation strategies with custom-designed actuators.
The robots operate within a structured game environment, communicating with a
central referee node through ROS topics and executing complex game strategies.
The system demonstrates robust performance in competitive scenarios, achieving
high success rates in puck handling and goal scoring while maintaining safe
operation in a dynamic multi-robot environment.
