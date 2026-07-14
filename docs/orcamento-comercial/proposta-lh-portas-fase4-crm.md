# Proposta Comercial — LH Portas | Fase 4: CRM / Prontuário pós-venda

**Cliente:** LH Portas  
**Data:** 06/07/2026  
**Validade da proposta:** 15 dias  
**Fase:** 4 de 5

---

## Suposições adotadas nesta proposta

| Item | Suposição |
|------|-----------|
| Foco | **Pós-venda** — não deixar cliente esquecido após a venda |
| Prontuário | Timeline de contatos, notas e tarefas por cliente |
| Etapas | Venda → instalação → garantia → follow-up (configurável) |
| Usuários | Até 3 logins |
| WhatsApp | Registro **manual** de interações (API não inclusa no MVP) |
| Origem lead | Campo origem (mini site, QR loja, indicação, loja física) |

**Perguntas em aberto:** pós-venda cobre instalação + manutenção? quem usa o sistema? base atual em planilha?

---

## 1. Resumo do Projeto

**Nome do projeto:** LH Portas — CRM com prontuário comercial pós-venda

**Objetivo de negócio:** Centralizar o **histórico de cada cliente** — o que foi vendido, quando instalar, quando retornar na garantia, o que foi combinado. Este é o módulo que o cliente descreveu como prioridade estratégica no WhatsApp: **o CRM existe para o pós-venda**.

**Tipo de sistema:** Aplicação web com cadastro de clientes, prontuário, tarefas e dashboard de follow-up.

**Contexto:** Proposta **exclusiva da Fase 4**. Integra futuramente com mini site (origem), landing (leads), financeiro e NF.

---

## 2. Escopo Funcional

### Módulo A — Cadastro e prontuário

| Entregável | Detalhe |
|------------|---------|
| Ficha cliente | Nome, telefone, endereço, origem, observações |
| Timeline | Registro cronológico de contatos e notas |
| Busca | Por nome ou telefone |

### Módulo B — Pós-venda operacional

| Entregável | Detalhe |
|------------|---------|
| Tarefas | Data, responsável, status, vínculo ao cliente |
| Etapas | Pipeline pós-venda configurável |
| Alertas | Lista de clientes sem contato há X dias (dashboard) |

### Módulo C — Plataforma

| Entregável | Detalhe |
|------------|---------|
| Auth | Até 3 usuários |
| Importação | Até 200 registros de planilha CSV (1 importação inclusa) |
| Painel | Responsivo para consulta em mobile |

### Dentro do escopo

MVP CRM + importação básica + dashboard + treinamento 2h + 30 dias garantia

### Fora do escopo

WhatsApp Business API, app nativo, marketing em massa, ERP, NF, anexos ilimitados (cotar extra)

---

## 3. Stack Técnica

**Supabase** · **Next.js/React** · **Row Level Security** por usuário · deploy Vercel

---

## 4. Estimativa de Tempo

| Atividade | Horas |
|-----------|------:|
| Modelagem + etapas pós-venda | 12h |
| CRUD clientes + timeline | 28h |
| Tarefas + lembretes | 20h |
| Dashboard sem contato | 12h |
| Auth + 3 usuários | 12h |
| Importação CSV | 10h |
| Testes + ajustes | 14h |
| Deploy + treinamento | 12h |
| **Total** | **120h** |

---

## 5. Precificação

| Item | Valor |
|------|------:|
| Desenvolvimento (120h × R$ 100/h) | **R$ 12.000,00** |
| Manutenção mensal (opcional) | **R$ 450,00/mês** — hospedagem, suporte, até 6h evolução/mês |

---

## 6. Prazo de Entrega

**35 a 45 dias úteis** após aprovação, sinal e workshop de mapeamento do ciclo de pós-venda (obrigatório).

---

## 7. Condições Comerciais

- Pagamento: 40% + 40% MVP + 20% entrega
- Workshop de processo (2h) incluso no início — sem isso o prazo não inicia
- Importação acima de 200 registros: R$ 50/hora
- Garantia 30 dias
- WhatsApp API: proposta à parte se solicitado depois

---

## 8. Observações, Riscos e Melhorias

| Risco | Mitigação |
|-------|-----------|
| Processo de pós-venda indefinido | Workshop obrigatório |
| Expectativa de substituir planilha de vendas de uma vez | CRM focado em pós-venda no MVP |

**Melhorias recomendadas:** WhatsApp API; lembretes e-mail; pipeline pré-venda; IA para sugerir follow-up e resumir conversas; integração com leads da landing.

---

*Proposta válida por 15 dias.*
