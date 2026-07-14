# Módulo 02 — Landing page

**Cliente:** LH Portas · **Fase:** 2 · **Uso:** interno

---

## Dor do cliente

- Pediu "landing page" sem briefing: não definiu se institucional ou campanha
- Pode confundir com o mini site (Fase 1) — precisa separar na conversa
- Sem landing, anúncios pagos (Google/Meta) mandam tráfego pro WhatsApp ou mini site genérico e perdem conversão

---

## Como apresentar (script completo)

> "O **mini site** é a casa da LH Portas na internet — presença permanente. A **landing page** é a vitrine de uma **oferta específica**: promoção de porta, instalação com desconto, campanha de verão. Quem clica no anúncio cai numa página com um único objetivo: pedir orçamento ou chamar no WhatsApp."

> "Só faz sentido depois que o mini site existir — ou em paralelo se você já for rodar anúncio com urgência."

**NÃO dizer:** "é a mesma coisa do site" ou "página a mais igual".

---

## Perguntas obrigatórias

- [ ] Institucional ou campanha? Qual produto/oferta em destaque?
- [ ] Público-alvo? (residencial, condomínio, construtoras?)
- [ ] CTA único? (WhatsApp, formulário, ligar?)
- [ ] Vai investir em anúncios? Qual orçamento de mídia?
- [ ] Tem fotos de obras, depoimentos, prova social?
- [ ] Precisa de formulário que grava lead ou só WhatsApp?

---

## O que NÃO prometer

- CRM integrado nesta fase (só webhook/planilha/e-mail)
- Múltiplas variantes A/B sem cotar extra
- Copywriting ilimitado
- Gestão de tráfego pago (só a página)
- Blog ou múltiplas subpáginas

---

## Escopo técnico sugerido

| Bloco | Entregável |
|-------|------------|
| Hero | Headline + subheadline + CTA principal |
| Problema/solução | 3 bullets da dor do cliente final |
| Benefícios | 3–6 cards |
| Prova social | Depoimentos ou logos (se cliente fornecer) |
| CTA final | WhatsApp ou formulário |
| Formulário | Nome, telefone, mensagem → e-mail/webhook/planilha |
| SEO básico | Meta para campanha + noindex se for só ads |
| Analytics | GA4 + evento de conversão |
| Deploy | Mesmo stack do mini site |

---

## Stack recomendada

HTML/Tailwind ou Astro estático · Formspree/Netlify Forms/webhook · GA4 · opcional: integração futura com CRM (Fase 4)

---

## Estimativa interna

| Cenário | Horas | Valor |
|---------|------:|------:|
| Landing simples (1 CTA WhatsApp) | 30h | R$ 3.000 |
| Landing + formulário + prova social | 40h | R$ 4.000 |
| Landing + 2 variantes para teste | 45h | R$ 4.500 |

---

## Como falar o preço

> "Uma landing de campanha completa fica entre **R$ 3.000 e R$ 4.500**, conforme formulário, quantidade de seções e se você já tem textos e fotos. Fechamos escopo antes de começar."

---

## Objeções comuns

| Objeção | Resposta |
|---------|----------|
| "Já tenho o mini site" | "Perfeito — a landing é complementar, pra quem vem de anúncio e precisa converter rápido." |
| "Quero só uma página" | "O mini site já é sua página principal. Landing é opcional até você investir em divulgação paga." |

---

## Melhorias futuras / upsell

1. Teste A/B de headline (2 versões)
2. Pixel Meta + Google Ads conversion tracking
3. Integração automática com CRM (Fase 4)
4. Landing por produto (porta interna vs externa vs instalação)
5. Chatbot ou qualificação de lead com IA

---

## Integração painel + IA

- Leads capturados → tabela no painel com origem UTM
- Taxa de conversão visita → lead
- **IA:** gerar variantes de headline; classificar lead quente/frio pelo texto do formulário

---

## Replicável para outros clientes

Qualquer negócio que vá rodar **anúncio pago** com oferta clara. Sempre vender **depois** ou **junto** do mini site, nunca como substituto.
