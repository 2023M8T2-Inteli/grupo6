---
sidebar_position: 1
slug: '/sprint4/stt'
---

# Sistema de Conversão de Voz para Texto

A tecnologia empregada na transcrição de áudio, conhecida como Speech-to-text (STT), desempenha um papel essencial em nosso chat, permitindo aos usuários solicitar peças por meio de áudio. É crucial transcrever esse áudio para torná-lo compreensível para nosso LLM, possibilitando assim que o chat responda com informações sobre a peça desejada. Para alcançar esse objetivo, adotamos a ferramenta Whisper da OpenAI, um modelo avançado de reconhecimento de fala.

Na implementação atual, no nó responsável pela interface Gradio, foi incorporada a capacidade de acessar o conteúdo do componente de microfone. Essa adição possibilita o processamento do áudio gravado e o envio do resultado da transcrição para o componente de chat, exibindo a mensagem do usuário em formato de texto na interface. Além disso, o texto transcrito é enviado ao LLM para geração de resposta, facilitando a interação completa.

É importante notar que, devido ao uso do Whisper, a transcrição do texto ocorre em inglês, influenciando, por consequência, as respostas do LLM, que também são geradas nesse idioma. Além disso, observamos restrições de uso do framework Gradio, especialmente em relação à gravação de voz, que apresentou desafios em alguns computadores, impactando o desempenho do Whisper.

Planejamos futuras implementações, incluindo a integração de um nó dedicado para STT, proporcionando aprimoramentos da modularização do sistema.

## Demonstração