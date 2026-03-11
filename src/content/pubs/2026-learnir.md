---
title: 'LearnIR: Learnable Posterior Sampling for Real-World Image Restoration'
author: Yihang Bao, Zhen Huang, Shanyan Guan, Songlin Yang, Yanhao Ge, Wei Li, Bukun Huang, Zengmin Xu
publishDate: 2026-02-26
publishDesc: 'International Conference on Learning Representations'
description: ''
cite: ''
doi: ''
additionalInfo: EI, CCF A
links:
  - label: 'PDF'
    url: '/pdfs/[2026] LearnIR: Learnable Posterior Sampling for Real-World Image Restoration.pdf'
  - label: 'Code'
    url: 'https://github.com/gityihang/LearnIR'
thumbnail: '/thumbnails/2026-learnir.png'
---

## Abstract

Image restoration in real-world conditions is highly challenging due to heterogeneous degradations such as haze, noise, shadows, and blur. Existing diffusion-based methods remain limited: conditional generation struggles to balance fidelity and realism, inversion-based approaches accumulate errors, and posterior sampling requires a known forward operator that is rarely available. We introduce LearnIR, a learnable diffusion posterior sampling framework that eliminates this dependency by training a lightweight model to directly predict gradient correction distributions, enabling Diffusion Posterior Sampling Correction (DPSC) that maintains consistency with the true image distribution during sampling. In addition, a Dynamic Resolution Module (DRM) dynamically adjusts resolution to preserve global structures in early stages and refine fine textures later, while avoiding the need for a pretrained VAE. Experiments on ISTD, O-HAZE, HazyDet, REVIDE, and our newly constructed FaceShadow dataset show that LearnIR achieves state-of-the-art performance in PSNR, SSIM, and LPIPS.
