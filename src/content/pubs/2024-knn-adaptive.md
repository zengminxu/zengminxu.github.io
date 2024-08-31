---
title: 'KNN Adaptive Dual Attention for Object Detection'
author: Hongrun Zhu, Zengmin Xu, Ruxing Meng, Longfei Liu
publishDate: 2024-04-26
publishDesc: 'International Conference on Frontiers of Artificial Intelligence and Machine Learning (FAIML), Yichang, China, 2024'
description: ''
cite: 'Hongrun Zhu, Zengmin Xu, Ruxing Meng, et al. KNN Adaptive Dual Attention for Object Detection[C]//International Conference on Frontiers of Artificial Intelligence and Machine Learning (FAIML), Yichang, China, 2024.'
additionalInfo: 'EI, Best Paper Award'
links:
  - label: 'PDF'
    url: '/pdfs/[2024] KNN Adaptive Dual Attention for Object Detection.pdf'
thumbnail: '/thumbnails/2024-knn-adaptive.png'
---

## Abstract

In construction site scenes, the key to detecting workers wearing safety helmets is to accurately locate the target position in the complex background and rapidly extract fine-grained feature information of the safety helmet for identification. Attention mechanisms assist deep models in focusing on salient features while suppressing irrelevant elements. However, most existing mixed attention mechanisms are not only complex in design but also fail to capture global contextual information. Although existing selfattention mechanisms can model long-range dependencies, they are computationally complex and ignore the expressions of local visual saliency. In this paper, we propose a lightweight KNN Adaptive Dual Attention (KADA) module. KADA employs a Gaussian Mixture Model to compute self-attention maps, which can reduce information loss by adaptively selecting the number of Gaussian components. Then, a KNN-based channel attention mechanism is embedded in self-attention computations, allowing adaptive selection of K channels for interaction within a low-dimensional manifold. This integration enables the capture of both global spatial information and fine-grained semantic information. Experimental results on the Safety Helmet Wearing Detection Dataset(SHWD) and the Complex Real-world Construction Site (CRCS) dataset demonstrate that KADA achieves a better balance between performance and computational complexity. Compared to various attention mechanisms, KADA achieves state-of-the-art results.
