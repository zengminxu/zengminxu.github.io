---
title: Cross-View Nearest Neighbor Contrastive Learning of Human Skeleton Representation
author: Xuelian Zhang, Xu, Zengmin and Lulu Wang, Jiakun Chen
publishDate: 2022-02-18
publishDesc: 'China Intelligent Robotics Annual Conference'
description: ''
doi: 10.1007/978-981-99-0301-6_19
cite: 'Zhang X, Xu Z, Wang L, et al. Cross-View Nearest Neighbor Contrastive Learning of Human Skeleton Representation[C]//China Intelligent Robotics Annual Conference. Singapore: Springer Nature Singapore, 2022: 237-256.'
additionalInfo: EI
links:
  - label: PDF
    url: '/pdfs/[2022] Cross-View Nearest Neighbor Contrastive Learning of Human Skeleton Representation.pdf'
  - label: Code
    url: 'https://github.com/wulala-source/CrosNNCLR-SkeletonCLR'
thumbnail: '/thumbnails/2022-cross-view.jpg'
---

## Abstract

Traditional self-supervised contrastive learning approaches regard different views of the same skeleton sequence as a positive pair for the contrastive loss. While existing methods exploit cross-modal retrieval algorithm of the same skeleton sequence to select positives. The common idea in these work is the following: ignore using other views after data augmentation to obtain more positives. Therefore, we propose a novel and generic Cross-View Nearest Neighbor Contrastive Learning framework for self-supervised action Representation (CrosNNCLR) at the view-level, which can be flexibly integrated into contrastive learning networks in a plug-and-play manner. CrosNNCLR utilizes different views of skeleton augmentation to obtain the nearest neighbors from features in latent space and consider them as positives embeddings. Extensive experiments on NTU RGB+D 60/120 and PKU-MMD datasets have shown that our CrosNNCLR can outperform previous state-of-the-art methods. Specifically, when equipped with CrosNNCLR, the performance of SkeletonCLR and AimCLR is improved by 0.4% ~ 12.3% and 0.3 ~ %1.9%, respectively.
