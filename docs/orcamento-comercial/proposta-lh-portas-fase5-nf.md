# Proposta Comercial — LH Portas | Fase 5: Emissão de nota fiscal

**Cliente:** LH Portas  
**Data:** 06/07/2026  
**Validade da proposta:** 15 dias  
**Fase:** 5 de 5

---

## Suposições adotadas nesta proposta

| Item | Suposição |
|------|-----------|
| Tipos de NF | **NFS-e** (serviços/instalação) + **NF-e** (produtos/portas) — 1 CNPJ LH Portas |
| Emissor | API homologada (Nuvem Fiscal ou Focus NFe) — custo mensal do emissor por conta do cliente |
| Certificado | Cliente fornece certificado digital A1 válido |
| Contador | Alinhamento prévio com contador do cliente (obrigatório) |
| MyCert | **Não incluso** neste valor — multi-tenant cotado à parte se parceria confirmar |
| Integração | Lançamento automático no financeiro (Fase 3) em entrega fase 2 da NF |

**Perguntas em aberto:** regime tributário? município NFS-e? volume mensal de notas? MyCert entra formalmente?

---

## 1. Resumo do Projeto

**Nome do projeto:** LH Portas — Módulo de emissão de NF-e e NFS-e

**Objetivo de negócio:** Permitir emissão de notas de **serviço** (instalação) e **produto** (portas) integrada ao ecossistema LH Portas, reduzindo a dificuldade atual com notas de serviço e compras de material. Módulo mais **regulado e complexo** — por isso é a última fase.

**Tipo de sistema:** Backend fiscal integrado a API emissora + painel web para emissão, histórico e download XML/PDF.

**Contexto:** Proposta **exclusiva da Fase 5**. Exige certificado digital, contador alinhado e Fases 1–3 recomendadas concluídas.

---

## 2. Escopo Funcional

### Módulo A — Cadastro fiscal

| Entregável | Detalhe |
|------------|---------|
| Emitente | CNPJ, IE, regime, certificado A1 |
| Produtos/serviços | Cadastro básico para emissão |
| Validações | Campos obrigatórios antes de enviar |

### Módulo B — Emissão

| Entregável | Detalhe |
|------------|---------|
| NFS-e | Emissão de serviços conforme município homologado |
| NF-e | Emissão de produtos via SEFAZ |
| Histórico | Emitidas, canceladas, rejeitadas |
| Download | XML + PDF (DANFE/DANFSE) |

### Módulo C — Integração ecossistema

| Entregável | Detalhe |
|------------|---------|
| Financeiro | Lançamento automático ao emitir nota |
| Painel | Widget notas do mês no dashboard unificado |
| Alertas | Certificado próximo do vencimento |

### Dentro do escopo

1 CNPJ · NFS-e + NF-e · painel emissão · integração financeiro · homologação assistida · 30 dias garantia correção bugs emissão

### Fora do escopo

Assessoria contábil · multi-tenant MyCert (proposta separada ~R$ 22.000) · importação NF compra fornecedor · SPED · NFC-e consumidor (cotar extra)

---

## 3. Stack Técnica

**API emissora** (Nuvem Fiscal / Focus NFe) · **Node.js ou Python** (backend) · **Supabase/Postgres** · **painel React/Next** · armazenamento seguro certificado A1

---

## 4. Estimativa de Tempo

| Atividade | Horas |
|-----------|------:|
| Levantamento fiscal + contador | 12h |
| Integração API NFS-e | 40h |
| Integração API NF-e | 35h |
| Painel emissão + histórico | 30h |
| Cadastro produtos/serviços | 15h |
| Integração financeiro | 20h |
| Homologação + testes reais | 20h |
| Ajustes pós-homologação | 8h |
| **Total** | **180h** |

---

## 5. Precificação

| Item | Valor |
|------|------:|
| Desenvolvimento (180h × R$ 100/h) | **R$ 18.000,00** |
| Manutenção mensal (opcional) | **R$ 500,00/mês** — monitoramento API, certificado, suporte emissão |

### Custos do cliente (não inclusos)

- Certificado digital A1: ~R$ 200–400/ano
- Mensalidade API emissora: variável por volume (~R$ 80–300/mês)
- Taxas SEFAZ/prefeitura conforme legislação

### Multi-tenant MyCert (opcional, proposta à parte)

**R$ 22.000,00** — segundo CNPJ isolado + arquitetura tenant desde o início

---

## 6. Prazo de Entrega

**50 a 70 dias úteis** após: aprovação, sinal, certificado digital, alinhamento com contador e homologação municipal/estadual.

Prazo depende de terceiros (prefeitura, SEFAZ) — fora do controle do desenvolvedor.

---

## 7. Condições Comerciais

- Pagamento: 30% aprovação + 40% homologação ambiente teste + 30% produção
- **Não iniciar** sem certificado e contato do contador
- Responsabilidade fiscal final: cliente e contador — sistema é ferramenta de emissão
- Rejeições por dados incorretos do cliente: correção sem custo na garantia; reenvio em massa cotado à parte
- Garantia 30 dias para bugs de integração no escopo

---

## 8. Observações, Riscos e Melhorias

| Risco | Mitigação |
|-------|-----------|
| Prefeitura com API instável | Escolher emissor com suporte ao município |
| Certificado vencido | Alerta no painel |
| Multa por erro fiscal | Validações + revisão contador antes de produção |

**Melhorias recomendadas:** emissão em lote; importação NF de compra; export contábil; IA para sugerir descrição de serviço e validar campos pré-envio.

---

*Proposta válida por 15 dias. Valor sujeito a revisão após reunião com contador e definição fiscal.*
