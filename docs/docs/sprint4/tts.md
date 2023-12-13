---
sidebar_position: 2
slug: '/sprint4/tts'
---

# Sistema de Conversão de Texto para Voz

Visando ampliar a acessibilidade, tornou-se possível oferecer respostas audíveis, promovendo uma comunicação mais eficaz. Para alcançar esse objetivo, adotou-se uma abordagem que utiliza tecnologia de conversão de texto em fala. A ferramenta escolhida para essa finalidade é o gTTs (Google Text-to-Speech), que permite ao LLM ditar as respostas diretamente ao usuário.

Na fase de implementação, criou-se um nó que, por meio de um tópico, recebe as respostas geradas pelo LLM, determinando assim quando a resposta deve ser vocalizada e qual é o seu conteúdo.

É relevante notar que, devido às interferências do Whisper que traduzem os textos para inglês, quando a resposta é ditada, ela ocorre em inglês, embora com um sotaque brasileiro.

## Demonstração

<iframe width="560" height="315" src="https://www.youtube.com/embed/Zhh_MciKsNw?si=i7pW4PHAVQ91t-ft" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>