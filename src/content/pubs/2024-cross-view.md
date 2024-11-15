---
title: 'Cross-View Temporal Contrastive Learning for Self-Supervised Video Representation'
author: 王露露, 徐增敏, 张雪莲, 蒙儒省, 卢涛
publishDate: 2024-04-16
publishDesc: '计算机工程与应用'
description: ''
additionalInfo: 'EI源刊, CCF T2, 北核'
cite: '王露露，徐增敏，张雪莲等. 跨视图时序对比学习的自监督视频表征算法[J]. 计算机工程与应用, 2024, 10.'
links:
  - label: 'PDF'
    url: '/pdfs/[2024] Cross-View Temporal Contrastive Learning for Self-Supervised Video Representation.pdf'
  - label: 'Code'
    url: 'https://github.com/wangll1212/CVTCL'
thumbnail: '/thumbnails/2024-cross-view.jpg'
---

## Abstract

The existing self-supervised representation algorithms mainly focus on the short-term motion characteristics between video frames, but the variation range of the action sequence between frames is small, and the depth feature expression ability of single-view data is affected due to semantic limitations, so the rich multi-view information in video actions is not fully utilized. Therefore, a temporal contrast learning algorithm based on cross-view semantic consistency is proposed to self-supervised learn the action temporal variation characteristics embedded in both RGB frames and optical flow field data. The main ideas are as follows: to design a local temporal contrast learning method, adopt different positive and negative sample division strategies to explore the temporal correlation and discriminative differentiability between non-overlapping segments of the same instance, and enhance the fine-grained feature expression capability; to study the global contrast learning method to increase the positive samples by cross-view semantic co-training, learn the semantic consistency of different views of multiple instances, and improve the generalization ability of the model. The model performance is evaluated through two downstream tasks, and the experimental results on UCF101 and HMDB51 datasets show that the proposed method improves on average 2%~3.5% over cutting-edge mainstream methods on action recognition and video retrieval tasks.
