# Proposta Comercial — LH Portas | Fase 3: Sistema financeiro

**Cliente:** LH Portas  
**Data:** 06/07/2026  
**Validade da proposta:** 15 dias  
**Fase:** 3 de 5

---

## Suposições adotadas nesta proposta

| Item | Suposição |
|------|-----------|
| Escopo | Controle de entradas e saídas, categorias, dashboard mensal |
| Usuários | Até 2 logins (dono + loja) |
| Lançamentos | Manuais (sem conciliação bancária automática no MVP) |
| Relatório | Export CSV/PDF mensal |
| Integração NF | Preparação de estrutura; vínculo automático na Fase 5 |

**Perguntas em aberto:** quantas contas (caixa loja, PJ)? categorias desejadas? separar por obra/cliente?

---

## 1. Resumo do Projeto

**Nome do projeto:** LH Portas — Sistema financeiro (entrada e saída)

**Objetivo de negócio:** Substituir as **planilhas** por um painel onde o cliente enxerga **para onde vai o dinheiro** — entradas de serviços, saídas de material, saldo do período. Não substitui o contador; organiza o dia a dia da loja e das obras.

**Tipo de sistema:** Aplicação web com login, banco de dados e dashboard.

**Contexto:** Proposta **exclusiva da Fase 3**. Recomendada antes da emissão de NF (Fase 5). CRM (Fase 4) pode integrar depois.

---

## 2. Escopo Funcional

### Módulo A — Lançamentos

| Entregável | Detalhe |
|------------|---------|
| CRUD lançamentos | Entrada/saída, valor, data, descrição |
| Categorias | Receita e despesa configuráveis pelo admin |
| Filtros | Por período, categoria, tipo |

### Módulo B — Dashboard e relatórios

| Entregável | Detalhe |
|------------|---------|
| Dashboard | Saldo do período, gráfico por categoria |
| Caixa do dia | Visão rápida entradas/saídas (loja física) |
| Export | CSV e PDF mensal |

### Módulo C — Plataforma

| Entregável | Detalhe |
|------------|---------|
| Autenticação | Login seguro, até 2 usuários |
| Hospedagem | Deploy em nuvem (Supabase + painel web) |
| Layout | Painel responsivo mobile para consulta |

### Dentro do escopo

MVP financeiro + dashboard + export + 2 usuários + 1 rodada ajustes + 30 dias garantia + treinamento básico (1h)

### Fora do escopo

Conciliação OFX/Open Finance, emissão NF, multi-empresa, app nativo, SPED, substituir contador

---

## 3. Stack Técnica

**Supabase** (Postgres + Auth) · **Next.js ou React** (painel) · **Chart.js ou Recharts** (gráficos) · hospedagem Vercel/Railway

Justificativa: mesma base do CRM futuro (Fase 4) para integração sem refazer stack.

---

## 4. Estimativa de Tempo

| Atividade | Horas |
|-----------|------:|
| Modelagem dados + categorias | 8h |
| CRUD lançamentos | 20h |
| Dashboard + gráficos | 16h |
| Auth + 2 perfis usuário | 10h |
| Export CSV/PDF | 8h |
| Caixa do dia (visão loja) | 8h |
| Testes + ajustes | 10h |
| Deploy + treinamento | 5h |
| **Total** | **85h** |

---

## 5. Precificação

| Item | Valor |
|------|------:|
| Desenvolvimento (85h × R$ 100/h) | **R$ 8.500,00** |
| Manutenção mensal (opcional) | **R$ 350,00/mês** — hospedagem, backups, suporte, até 4h ajustes/mês |

---

## 6. Prazo de Entrega

**25 a 35 dias úteis** após aprovação, sinal e alinhamento de categorias com o cliente.

---

## 7. Condições Comerciais

- Pagamento: 40% aprovação + 40% MVP demonstrável + 20% entrega final
- Migração de planilha histórica: cotada à parte (estimativa 8–16h)
- Garantia 30 dias
- Dados financeiros: responsabilidade de backup informada ao cliente
- Alterações de escopo após aprovação = aditivo contratual

---

## 8. Observações, Riscos e Melhorias

| Risco | Mitigação |
|-------|-----------|
| Cliente quer NF antes do financeiro | Explicar ordem: enxergar → emitir |
| Categorias mal definidas | Workshop de 1h no início |

**Melhorias recomendadas:** importação OFX; vínculo com NF (Fase 5); alertas de gasto; IA para categorizar lançamentos; previsão de fluxo de caixa.

---

*Proposta válida por 15 dias.*
