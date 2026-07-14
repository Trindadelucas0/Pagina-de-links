# Módulo 04 — Sistema financeiro (entrada e saída)

**Cliente:** LH Portas · **Fase:** 3 · **Uso:** interno

---

## Dor do cliente

- "Planilhazinhas" — sem controle claro de entradas e saídas
- Saída na loja física — movimento de caixa diário
- Confusão com NF: serviço que emite nota + compra de material onde é difícil pegar NF
- Objetivo declarado: **saber onde está indo o dinheiro**

---

## Como apresentar (script completo)

> "Antes de automatizar nota fiscal, vocês precisam enxergar o financeiro. Hoje são planilhas soltas — o sistema financeiro centraliza **entrada, saída e categorias**: quanto entrou de instalação, quanto saiu em material, o que sobrou no mês."

> "Não substitui seu contador — organiza o dia a dia pra você tomar decisão e depois conectar com a emissão de NF na Fase 5."

---

## Perguntas obrigatórias

- [ ] Só controle manual ou conciliação com extrato bancário?
- [ ] Quantas contas? (caixa loja, PJ, cartão?)
- [ ] Categorias de despesa? (material, frete, salário, imposto?)
- [ ] Precisa separar por obra/cliente?
- [ ] Quem lança? (só dono, funcionária da loja?)
- [ ] Relatórios: diário, semanal, mensal?
- [ ] Integração futura com NF? (sim — planejar desde o MVP)

---

## O que NÃO prometer

- Conciliação bancária automática (OFX/Open Finance) no MVP sem cotar
- Substituir contador ou SPED
- Emissão de NF neste módulo
- Multi-empresa sem arquitetura multi-tenant
- App mobile nativo no MVP

---

## Escopo técnico sugerido (MVP)

| Bloco | Entregável |
|-------|------------|
| Lançamentos | Entrada/saída, valor, data, descrição, categoria |
| Categorias | Receita e despesa configuráveis |
| Dashboard | Saldo do período, gráfico por categoria |
| Relatório | Export CSV/PDF mensal |
| Auth | Login, 1–2 usuários |
| Caixa loja | Visão rápida do dia (opcional) |

**Stack:** Supabase + painel web (mesmo stack do CRM para integrar depois)

**Evolução:** importação OFX, vínculo com NF, alertas de meta de gasto

---

## Estimativa interna

| Cenário | Horas | Valor |
|---------|------:|------:|
| MVP lançamentos + categorias + relatório | 70h | R$ 7.000 |
| MVP + dashboard + export + 2 usuários | 85h | R$ 8.500 |
| Completo (+ metas, multi-conta, preparação NF) | 100h | R$ 10.000 |

---

## Como falar o preço

> "O financeiro básico fica entre **R$ 7 mil e R$ 10 mil**, conforme relatórios e quantidade de usuários. Resolve a dor das planilhas antes de entrar em NF, que é mais complexa e regulada."

---

## Objeções comuns

| Objeção | Resposta |
|---------|----------|
| "Planilha basta" | "Planilha não alerta quando gasto de material estourou. Sistema mostra tendência." |
| "Contador já cuida" | "Contador fecha mês. Isso é pro dia a dia da loja e das obras." |
| "Quero NF primeiro" | "NF sem organização financeira gera mais confusão. Ordem: enxergar → emitir." |

---

## Melhorias futuras / upsell

1. Importação de extrato OFX
2. Vínculo lançamento ↔ nota fiscal emitida
3. Alertas: gasto acima da média, saldo baixo
4. Previsão de fluxo de caixa (IA)
5. Integração com maquininha ou PIX automático (fase avançada)

---

## Integração painel + IA

- Widget "fluxo do mês" no dashboard unificado
- **IA:** categorizar lançamento pela descrição; alertar anomalia; resumo semanal por WhatsApp/e-mail

---

## Replicável para outros clientes

Pequenos comércios e prestadores que misturam **caixa físico + PJ + material**. Sempre perguntar conciliação bancária antes de prometer.
