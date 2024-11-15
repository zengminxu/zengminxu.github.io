---
title: Human skeleton for action recognition based on cross-scale graph contrastive learning
author: 张雪莲, 徐增敏, 陈家昆, 王露露
publishDate: 2023-01-01
publishDesc: '燕山大学学报'
description: ''
cite: '张雪莲，徐增敏，陈家昆等. 基于跨尺度图对比学习的人体骨架动作识别方法[J]. 燕山大学学报, 2023, 47(02):164-174.'
additionalInfo: 北核
links:
  - label: PDF
    url: '/pdfs/[2023] Human skeleton for action recognition based on cross-scale graph contrastive learning.pdf'
  - label: Code
    url: 'https://github.com/wulala-source/CrosScale-SGCLR'
thumbnail: '/thumbnails/2023-human-skeleton.jpg'
---

## Abstract

Traditional self-supervised learning models based on the human skeleton usually use contrastive learning modules for representation learning while existing contrastive learning modules use data augmentation methods to construct similar positive samples and the rest of the samples are all negative samples which limits the expression of semantic information for similar samples. To solve these issues an action recognition algorithm with graph contrastive learning and cross-scale consistent knowledge mining is proposed. First a new data augmentation method is designed based on the skeleton graph structure which performs random edge cuttings on the input skeleton sequence to obtain two different views thus enhancing semantic correlation expression between different views of the same skeleton sequence. Second to alleviate the problem of low embedding similarity to similar samples a self-supervised co-training network model is introduced to obtain positive class samples from one skeleton scale and another skeleton scale by using complementary information between different scales of the same skeleton data source to realize the association within a single scale and semantic collaborative interaction between multi-scales. Finally the effectiveness of the model is evaluated based on the linear evaluation protocol and the experimental results on NTU RGB+D 60 and NTU RGB+D 120 datasets show that the recognition accuracy of the proposed method is improved by 2%~3.5% on average compared with the cutting-edge mainstream methods.
