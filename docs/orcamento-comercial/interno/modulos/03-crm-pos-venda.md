# Módulo 03 — CRM / Prontuário pós-venda

**Cliente:** LH Portas · **Fase:** 4 · **Uso:** interno

---

## Dor do cliente

- Objetivo declarado: **não deixar cliente esquecido depois da venda** — pós-venda é o coração do pedido
- Estilo "prontuário clínico, mas comercial" — histórico de contato, tarefas, mensagens
- Hoje: planilhas, sem sistema; controle de mensagens provavelmente manual no WhatsApp
- Ciclo de vida incerto: instalação? garantia? manutenção? revisão anual?

---

## Como apresentar (script completo)

> "Isso é o que você mais descreveu no WhatsApp — um lugar onde cada cliente tem **histórico**: quando comprou, quando instalou, quando ligar de novo pra garantia, o que foi combinado. O CRM não é pra substituir sua planilha de venda de um dia pro outro; é pra **nunca mais perder ninguém no pós-venda**."

> "Antes de cotar fechado, preciso entender: pós-venda de quê exatamente? Só instalação ou manutenção também? É só você ou tem equipe?"

**Posicionamento:** módulo estratégico — não é Fase 1; mini site vem antes.

---

## Perguntas obrigatórias

- [ ] Pós-venda cobre o quê? (instalação, garantia, manutenção, upsell?)
- [ ] Quem usa o sistema? (só dono, vendedores, instaladores?)
- [ ] Base de clientes atual existe? Onde? (planilha, caderno, WhatsApp?)
- [ ] WhatsApp: registrar mensagens manualmente ou integrar API?
- [ ] Precisa de tarefas com data (ligar em 30 dias, visita em 6 meses)?
- [ ] Precisa anexar fotos (obra, nota, contrato)?
- [ ] Quantos clientes ativos por mês (ordem de grandeza)?

---

## O que NÃO prometer

- Integração WhatsApp Business API sem custo e sem aprovação Meta
- App mobile nativo no MVP
- Automação de marketing em massa (e-mail/SMS ilimitado)
- Substituir ERP ou emissão de NF neste módulo
- Migração completa de planilha histórica sem cotar horas de importação

---

## Escopo técnico sugerido (MVP)

| Bloco | Entregável |
|-------|------------|
| Cadastro cliente | Nome, telefone, endereço, origem (mini site, indicação, loja) |
| Prontuário | Linha do tempo: contatos, notas, tarefas concluídas |
| Tarefas | Lembrete com data, responsável, status |
| Pós-venda | Etapas configuráveis (venda → instalação → garantia → follow-up) |
| Busca | Por nome, telefone |
| Dashboard simples | Clientes sem contato há X dias |
| Auth | Login senha, 1–3 usuários |

**Stack MVP:** Supabase (Postgres + Auth) + painel web (Next.js ou React) · ou Firebase

**Evolução:** WhatsApp API, anexos, relatórios, integração financeiro/NF

---

## Estimativa interna

| Cenário | Horas | Valor |
|---------|------:|------:|
| MVP (cadastro + timeline + tarefas) | 100h | R$ 10.000 |
| MVP + importação planilha + dashboard | 120h | R$ 12.000 |
| Completo (+ anexos + múltiplos usuários + regras) | 140h | R$ 14.000 |

---

## Como falar o preço

> "O CRM completo, do jeito que você descreveu, fica na faixa de **R$ 10 mil a R$ 14 mil**, conforme integrações e quantidade de usuários. É o módulo mais estratégico — e o que mais impacta retenção. Fechamos briefing antes do número final."

---

## Objeções comuns

| Objeção | Resposta |
|---------|----------|
| "Uso planilha" | "Planilha não te avisa quem está sem contato há 90 dias. CRM é lembrete + histórico." |
| "WhatsApp já resolve" | "WhatsApp não mostra todos os clientes num quadro. CRM organiza o que está espalhado." |
| "Quero tudo junto" | "CRM depende de saber seu processo. Mini site sai rápido; CRM exige mapear seu pós-venda." |

---

## Melhorias futuras / upsell

1. Integração WhatsApp Business API (histórico automático)
2. Lembretes por e-mail/push
3. Pipeline de vendas (pré-venda + pós-venda)
4. Relatórios: taxa de retorno, tempo médio entre contatos
5. IA: resumo de conversa, sugestão de próximo contato, score de churn

---

## Integração painel + IA

- Origem do cliente (mini site UTM, QR loja, indicação) → campo no cadastro
- Funil pós-venda no dashboard unificado
- **IA:** "12 clientes sem contato há 60+ dias"; sugerir script de ligação; classificar urgência

---

## Replicável para outros clientes

Serviços com **ciclo longo** e **pós-venda crítico**: clínicas, academias, instalação, manutenção, consultoria. Sempre mapear ciclo de vida antes de cotar.
