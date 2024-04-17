---
title: "Comparative Analysis of Entity Identification and Classification of Indian Epic"
collection: publications
permalink: /publication/2015-10-01-paper-title-number-3
excerpt: 'This study addresses the lack of Natural Language Processing (NLP) research on Indian epics like the Mahabharata. By analyzing state-of-the-art supervised Machine Learning (ML) methods for Named Entity Recognition (NER) on a labeled dataset of Mahabharata tokens, the research aims to revitalize NLP exploration in this domain. Challenges include the presence of English and Sanskrit words with different characterizations of characters throughout the narrative. Findings reveal shortcomings in existing methods like NLTK, spaCy, and Stanford NER due to difficulties in distinguishing entities with the same name. Context-driven methods like BERT show promise but tend to overfit the dataset. Overall, the study underscores the need for further research to develop NER techniques suited to the complexities of Indian epics.'
date: 07 November 2022
venue: 'ICMI 22: Proceedings of the 2022 International Conference on Multimodal Interaction'
paperurl: 'https://dl.acm.org/doi/abs/10.1145/3536221.3556573'
citation: 'Shreya Sharma and Mukesh Mohania. 2022. Comparative Analysis of Entity Identification and Classification of Indian Epics. In Proceedings of the 2022 International Conference on Multimodal Interaction (ICMI 22). Association for Computing Machinery, New York, NY, USA, 404–413. https://doi.org/10.1145/3536221.3556573'
---
Despite the relevance and accessibility of Indian epics such as the Mahabharata, little research has been done on the corpus in Natural Language Processing (NLP). To revitalize NLP research on the Indian epics, we present a computational analysis of SOTA supervised Machine Learning (ML) methods for Named Entity Recognition (NER) using our annotated dataset of labeled tokens of the Mahabharata text. The text contains English and Sanskrit words, offering a different vocabulary than modern literature. The characters also change their nature throughout the storyline, challenging many SOTA NER methods as tokens with the same name can have different entity types. For example, we
discover that NLTK inaccurately identifies 95% tokens as named entities. 

We also note that spaCy and Stanford NER perform adequately only after training. However, since they produce one embedding per token, they fail to distinguish between entities with the same name. In contrast, context-driven methods such as BERT and ELMO tackle the issue as they produce different embeddings. Yet, ELMO delivers poor results due to its character-based embeddings and pseudo-bidirectionality. BERT performs the best with a 0.98 micro-avg F1 score but overfits the dataset.

Therefore, the current SOTA techniques are unsuitable for NER on the Indian epics, and more research is needed to build a universally suited NER agent capable of recognizing named entities from diverse cultural
contexts.
