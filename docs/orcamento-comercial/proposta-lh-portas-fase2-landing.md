# Proposta Comercial — LH Portas | Fase 2: Landing page de campanha

**Cliente:** LH Portas  
**Data:** 06/07/2026  
**Validade da proposta:** 15 dias  
**Fase:** 2 de 5  
**Pré-requisito recomendado:** Fase 1 — Mini site profissional para presença digital

---

## Suposições adotadas nesta proposta

| Item | Suposição |
|------|-----------|
| Tipo | Landing de **campanha** com oferta específica (não institucional genérica) |
| CTA principal | WhatsApp + formulário de lead (nome, telefone, mensagem) |
| Seções | Hero, problema/solução, benefícios (4 cards), prova social, CTA final |
| Visual | Layout premium, animações suaves, mobile-first (mesmo padrão Fase 1) |
| Conteúdo | Textos e fotos fornecidos pelo cliente |
| Integração CRM | Não inclusa — leads por e-mail/planilha/webhook até Fase 4 |

**Perguntas em aberto:** qual oferta em destaque? público-alvo? vai rodar anúncios Google/Meta?

---

## 1. Resumo do Projeto

**Nome do projeto:** LH Portas — Landing page de campanha

**Objetivo de negócio:** Converter visitantes de **anúncios pagos ou campanhas pontuais** em leads qualificados (orçamento, WhatsApp). O mini site (Fase 1) é a casa permanente da marca; a landing é a **vitrine de uma oferta** com CTA único e foco em conversão.

**Tipo de sistema:** Página estática de alta conversão, otimizada para tráfego pago e mobile.

**Contexto:** Esta proposta cobre **somente a Fase 2**. Depende de briefing de oferta e CTA. Fases 3–5 (financeiro, CRM, NF) têm propostas separadas.

---

## 2. Escopo Funcional

### Módulo A — Estrutura de conversão

| Entregável | Detalhe |
|------------|---------|
| Hero | Headline, subheadline, CTA principal acima da dobra |
| Problema / solução | 3 bullets da dor do cliente final |
| Benefícios | 4 cards com ícones |
| Prova social | Até 3 depoimentos ou logos (material do cliente) |
| CTA final | Repetição do CTA + WhatsApp |

### Módulo B — Captura de leads

| Entregável | Detalhe |
|------------|---------|
| Formulário | Nome, telefone, mensagem → e-mail + webhook/planilha |
| Evento conversão | GA4 + pixel configurável (Meta/Google Ads) |
| UTM | Estrutura para rastrear campanha |

### Módulo C — Entrega visual e técnica

| Entregável | Detalhe |
|------------|---------|
| Layout premium | Glass, tipografia forte, hierarquia clara |
| Animações suaves | Fade-in escalonado, hover nos CTAs, `prefers-reduced-motion` |
| Mobile perfeito | Touch 44px+, `clamp()`, testado 320–428px |
| Deploy | Netlify/Vercel + SSL |
| SEO | Meta tags; `noindex` opcional se for só tráfego pago |

### Dentro do escopo

- 1 landing completa + formulário + GA4 + 1 rodada de ajustes + 30 dias garantia

### Fora do escopo

CRM integrado, A/B com 2 versões, gestão de tráfego pago, copywriting ilimitado, blog, mini site (Fase 1)

---

## 3. Stack Técnica

HTML5 + Tailwind CSS · JavaScript vanilla · Netlify Forms / Formspree / webhook · GA4 · deploy estático

---

## 4. Estimativa de Tempo

| Atividade | Horas |
|-----------|------:|
| Briefing oferta e copy | 4h |
| Layout premium + animações | 12h |
| Formulário + integração envio | 6h |
| Prova social e benefícios | 6h |
| GA4 + eventos conversão | 4h |
| Deploy + testes mobile | 4h |
| Ajustes pós-preview | 4h |
| **Total** | **40h** |

---

## 5. Precificação

| Item | Valor |
|------|------:|
| Desenvolvimento (40h × R$ 100/h) | **R$ 4.000,00** |
| Manutenção mensal (opcional) | **R$ 200,00/mês** — até 2 alterações de texto/CTA + hospedagem |

---

## 6. Prazo de Entrega

**10 a 14 dias úteis** após aprovação, sinal (50%) e envio de textos, oferta e fotos.

---

## 7. Condições Comerciais

- Pagamento: 50% aprovação + 50% entrega (ou R$ 3.800 à vista com 5% desconto)
- 1 rodada de ajustes inclusa; fora do escopo = cotado à parte
- Garantia 30 dias
- Escopo fechado na Fase 2; financeiro, CRM e NF em propostas próprias
- Conteúdo e criativos de anúncio são do cliente

---

## 8. Observações, Riscos e Melhorias

| Risco | Mitigação |
|-------|-----------|
| Confundir com mini site | Documentar diferença: presença vs campanha |
| Sem oferta definida | Briefing obrigatório antes de iniciar |

**Melhorias recomendadas:** teste A/B de headline; pixel Meta + Google Ads; integração CRM (Fase 4); landing por produto (porta interna/externa).

---

*Proposta válida por 15 dias.*
