---
title: Action recognition by saliency-based dense sampling
author: Zengmin Xu, Ruimin Hu, Jun Chen, Chen Chen, Huafeng Chen, Hongyang Li, Qingquan Sun
publishDate: 2017-02-28
publishDesc: 'Neurocomputing'
description: ''
doi: 10.1016/j.neucom.2016.09.106
cite: 'Xu Z, Hu R, Chen J, et al. Action recognition by saliency-based dense sampling[J]. Neurocomputing, 2017, 236: 82-92.'
additionalInfo: SCI, 中科院2区Top, JCR Q1, IF=5.5, CCF C刊
thumbnail: '/thumbnails/2017-action-recognition.png'
links:
  - label: 'PDF'
    url: '/pdfs/[2017] Action recognition by saliency-based dense sampling.pdf'
  - label: 'Code'
    url: 'https://github.com/zengminxu/iDT-RCB-Code'
---

## Abstract

Action recognition, aiming to automatically classify actions from a series of observations, has attracted more attention in the computer vision community. The state-of-the-art action recognition methods utilize dense sampled trajectories to build feature representations. However, their performances are limited due to action region clutters and camera motions in real world applications. No matter how the scenario changes in different backgrounds, the salient cues of actions are highly dependent on their appearances and motions. Based on this discovery, in this paper we propose a novel saliency-based dense sampling strategy named improved dense trajectories (iDT) on salient region-based contrast boundary (iDT-RCB). Without any external human detector, a robust mask is generated to overcome the limitations of global contrast based saliency in action sequences. Warped optical flow is exploited to adjust the interest points sampling to remove subtle motions. We show that an appropriate pruning of feature points can achieve a good balance between saliency and density of the sampled points. Experiments conducted on three benchmark datasets have demonstrated the effectiveness of the proposed method. More specifically, the fusion of deep-learned features and our hand-crafted features can even improve the recognition performance over baseline dense sampling methods. In particular, the fusion scheme achieves the state-of-the-art accuracy at 73.8% and 94.8% on Hollywood2 and UCF50, respectively.
