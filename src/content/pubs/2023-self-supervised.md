---
title: 'Self-supervised Action Recognition Based on Skeleton Data Augmentation and Double Nearest Neighbor Retrieval'
author: 吴雨珊, 徐增敏, 张雪莲, 王涛
publishDate: 2023-11-06
publishDesc: '计算机科学'
description: ''
cite: '吴雨珊, 徐增敏, 张雪莲, 王涛. 骨架数据增强和双重最近邻检索自监督动作识别[J]. 计算机科学, 2023, 50(11): 97-106. https://doi.org/10.11896/jsjkx.230500158'
doi: '10.11896/jsjkx.230500158'
links:
  - label: 'PDF'
    url: '/pdfs/[2023] Self-supervised Action Recognition Based on Skeleton Data Augmentation and Double Nearest Neighbor Retrieval.pdf'
thumbnail: '/thumbnails/2023-self-supervised.png'
---

## Abstract

Traditional self-supervised methods based on skeleton data often take different data augmentation of a sample as positive examples,and the rest of the samples are regarded as negative examples,which makes the ratio of positive and negative samples seriously unbalanced,and limits the usefulness of samples with the same semantic information.In order to solve the above problems,this paper proposes a double nearest neighbor retrieval action recognition algorithm named DNNCLR,in which positive samples are not limited by data augmentation.First,a new joint level spatial data augmentation,namely Bodypart augmentation,is designed based on the physical connection of human joints.The input skeleton sequence is randomly replaced with a normal distribution array to obtain high-level semantic embedding.Secondly,in order to avoid the limitation of positive samples by data augmentation,a more reasonable double nearest neighbor retrieval(DNN) positive sample augmentation strategy is proposed,and further,a double nearest neighbor retrieval contrastive loss(DNN Loss) is proposed.Specifically,by using support sets for global retrieval,the search range of the positive sample set is expanded to new data points that cannot be covered by ordinary data augmentation.In the negative sample set,there are positive samples that have been misjudged,which are skeleton samples with the same semantic information but from different videos.Therefore,by using nearest neighbor retrieval again,these potential positive examples are searched from the negative sample set to further expand the positive sample set,and the double nearest neighbor retrieval contrastive loss is further proposed,forcing the model to learn more general feature representations,making the model optimization more reasonable.Finally,the DNNCLR algorithm is applied to the AimCLR model to obtain the AimDNNCLR model,and the model is evaluated linearly on the NTU-RGB+D dataset.Compared with the first line model,the proposed method has an average improvement of 3.6% in accuracy.
