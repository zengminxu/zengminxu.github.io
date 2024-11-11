---
title: 'Semisupervised Action Recognition with Adaptive Correlation Learning'
author: Fan Wang, Zengmin Xu, Jiakun Chen, Ruimin Hu
publishDate: 2024-11-11
description: ''
publishDesc: ''
cite: 'No Cite.'
links:
  - label: 'PDF'
    url: '/pdfs/[2024] Semisupervised Action Recognition with Adaptive Correlation Learning.pdf'
thumbnail: '/thumbnails/2024-adaptive-correlation-learning.png'
---

## Abstract

There is a huge amount of video image data in the action recognition domain, and it is unreasonable to use expensive manual annotation. Traditional semi-supervised learning applies graph embedding and label propagation to mine local neighborhood relationships between labeled and unlabeled data. However, graph-based modeling methods have limited effectiveness for unstructured action videos. Recently, Graph Convolutional Networks (GCNs) have been used to exploit local neighborhood relationships of samples (action videos). However, existing GCNs methods struggle to extract discriminative high-level features from fixed graph, and suffer from excessive computational complexity when dealing with large-scale data. To address these issues, we propose a new GCN-based semisupervised method with adaptive feature correlation, which enhances local neighborhood by computing its correlation weights and learns global topology from labeled and unlabeled samples to obtain the optimal graph structures, effectively extracting high-level features. Furthermore, owing to the complexity caused by the inevitable redundant computations of GCNs, we apply linear transformations to the features of neighbor graph nodes, then aggregate adjacent nodes’ features for capturing the local neighborhood information. Thus, we mitigate this excess complexity by removing nonlinearity and collapsing weight matrices between consecutive layers, thereby addressing the issue of computational complexity . This linear model is simpler than traditional GCN models and offers superior generalization, robustness, and efficiency. The proposed approach achieves comparable performance on UCF101 using only 0.15 × N labeled training data. On HMDB51 and Something-Something V2, our method improves the recognition accuracy by +1.7% and +2% respectively, using only 0.20 × N labeled training data.
