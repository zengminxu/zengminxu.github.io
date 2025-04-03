---
title: Semisupervised discriminant multimanifold analysis for action recognition
author: Zengmin Xu, Ruimin Hu, Jun Chen, Chen Chen, Junjun Jiang, Jiaofen Li, Hongyang Li
publishDate: 2019-02-13
publishDesc: 'IEEE Transactions on Neural Networks and Learning Systems'
description: ''
doi: 10.1109/TNNLS.2018.2886008
cite: 'Xu Z, Hu R, Chen J, et al. Semisupervised discriminant multimanifold analysis for action recognition[J]. IEEE transactions on neural networks and learning systems, 2019, 30(10): 2951-2962.'
additionalInfo: SCI, 中科院1区Top, CCF B
thumbnail: '/thumbnails/2019-semisupervised-discriminant.jpg'
links:
  - label: 'PDF'
    url: '/pdfs/[2019] Semisupervised discriminant multimanifold analysis for action recognition.pdf'
  - label: 'Code'
    url: 'https://github.com/zengminxu/Semisupervised-discriminant-multimanifold-analysis-for-action-recognition'
---

## Abstract

Although recent semisupervised approaches have proven their effectiveness when there are limited training data, they assume that the samples from different actions lie on a single data manifold in the feature space and try to uncover a common subspace for all samples. However, this assumption ignores the intraclass compactness and the interclass separability simultaneously. We believe that human actions should occupy multimanifold subspace and, therefore, model the samples of the same action as the same manifold and those of different actions as different manifolds. In order to obtain the optimum subspace projection matrix, the current approaches may be mathematically imprecise owe to the badly scaled matrix and improper convergence. To address these issues in unconstrained convex optimization, we introduce a nontrivial spectral projected gradient method and Karush-Kuhn-Tucker conditions without matrix inversion. Through maximizing the separability between different classes by using labeled data points and estimating the intrinsic geometric structure of the data distributions by exploring unlabeled data points, the proposed algorithm can learn global and local consistency and boost the recognition performance. Extensive experiments conducted on the realistic video data sets, including JHMDB, HMDB51, UCF50, and UCF101, have demonstrated that our algorithm outperforms the compared algorithms, including deep learning approach when there are only a few labeled samples.
