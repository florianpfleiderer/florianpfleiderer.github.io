---
title: TSSAgent — Transformer State-Space Agent for Cloth Manipulation  
date: August 2025 
repo: florianpfleiderer/TSSAgent  
topics:
  [
    "Robotics",
    "Deformable-Object Manipulation",
    "Latent Dynamics",
    "Transformer",
    "Reinforcement Learning",
    "Model-Predictive Control",
    "World Models",
  ]
lead: learning latent dynamics and planning for robotic cloth manipulation using a Transformer-based state-space model
image: tssagent.png 
---
This project implements TSSAgent, a Transformer-based agent for learning world models in robotic cloth manipulation. The agent replaces commonly used recurrent architectures with a Transformer state-space model that captures long-range temporal dependencies and maintains sharper latent representations of cloth dynamics. Integrated with the Agent-Arena control framework and the SoftGym simulation environment, TSSAgent trains on large-scale garment manipulation datasets and applies model-predictive control (MPC) to perform fabric-flattening tasks.
The system provides tools for training, evaluation, and benchmarking against existing world-model agents, with an emphasis on preserving fine details in imagined rollouts, improving reward prediction accuracy, and enabling more effective planning in deformable object manipulation. By combining state-of-the-art sequence modeling with reinforcement learning techniques, TSSAgent demonstrates how Transformer-based approaches can address the unique challenges of non-rigid object manipulation in robotics.
