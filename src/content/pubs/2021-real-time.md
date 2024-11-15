---
title: Real-time action feature extraction via fast PCA-Flow
author: Huafeng Chen, Hongyang Li, Zengmin Xu, Yunhong Zhao, Tigang He
publishDate: 2021-10-15
publishDesc: 'Concurrency and Computation: Practice and Experience'
description: ''
additionalInfo: 'SCI, 中科院4区, JCR Q2, IF=1.5'
doi: 10.1002/cpe.5507
cite: 'Chen H, Li H, Xu Z, et al. Real‐time action feature extraction via fast PCA‐Flow[J]. Concurrency and Computation: Practice and Experience, 2021, 33(11): e5507.'
links:
  - label: PDF
    url: '/pdfs/[2021] Real-time action feature extraction via fast PCA-Flow.pdf'
thumbnail: '/thumbnails/2021-real-time.png'
---

## Abstract

Action recognition is a research hotspot in the field of Internet of Things (IoT). Currently, local pixel-domain spatiotemporal feature extraction methods have reached the state-of-the-art action recognition performance on many challenging datasets. However, the poor computational complexity of these approaches prevents them from scaling up to real-time applications. For solving this problem, we present a novel real-time video feature extraction technique by exploiting the fast PCA-Flow algorithm. Firstly, we down-sample video images in form of grid. Based on the down-sampling images, PCA-Flow algorithm is used to calculate optical flow among adjacent images. The PCA-Flow matrices are then expanded to the original video image size by using efficient gCLSR super-resolution method to keep the inherent geometric structure of the optical flow. Finally, we compute action descriptors based on original pixel frames and the enlarged PCA-Flow images. The proposed approach is validated on three challenging datasets: UCF50, Hollywood2, and HMDB51. Experimental results indicate that the proposed method is more efficient in computation and can achieve competitive quality than the state-of-the-art methods.
