# Módulo 05 — Emissão de NF (+ parceria MyCert)

**Cliente:** LH Portas · **Fase:** 5 · **Uso:** interno

---

## Dor do cliente

- Dificuldade com NF de **serviço** (instalação) e **compra de material** (fornecedor nem sempre emite)
- Possível **parceria com MyCert** — módulo reaproveitado entre LH Portas e outro cliente → exige **multi-tenant desde o início**
- Sem certificado digital e regime definidos, escopo é indefinido

---

## Como apresentar (script completo)

> "Emissão de nota fiscal é o módulo mais **delicado** — envolve contador, certificado digital, SEFAZ ou prefeitura, e tipo de nota diferente pra produto e serviço. Por isso é a **última fase**, quando mini site, financeiro e processo já estiverem organizados."

> "Se a MyCert entrar como parceira, o sistema precisa separar dados de cada empresa desde o começo — isso aumenta complexidade e valor, mas permite reaproveitar o produto."

**Nunca prometer prazo ou preço fechado sem:** tipo de NF, regime tributário, certificado A1/A3, contador alinhado.

---

## Perguntas obrigatórias

- [ ] NF-e (produto), NFS-e (serviço) ou NFC-e (consumidor)? Quais dos três?
- [ ] Regime: MEI, Simples, Lucro Presumido?
- [ ] Certificado digital A1 ou A3? Já possui?
- [ ] Município de emissão NFS-e (cada prefeitura é diferente)?
- [ ] Contador aprova integração com qual emissor? (Focus, Nuvem Fiscal, etc.)
- [ ] MyCert entra formalmente? Contrato entre as partes?
- [ ] Volume mensal de notas (ordem de grandeza)?

---

## O que NÃO prometer

- Emitir nota sem certificado válido do cliente
- Assessoria fiscal/contábil inclusa
- Garantir aceitação em qualquer prefeitura sem validar município
- Multi-tenant barato — custo sobe significativamente
- Substituir software do contador sem alinhamento

---

## Escopo técnico sugerido

| Bloco | Entregável |
|-------|------------|
| Cadastro emitente | CNPJ, IE, certificado, regime |
| Emissão | NFS-e e/ou NF-e conforme briefing |
| Histórico | Notas emitidas, canceladas, rejeitadas |
| Download | XML + PDF DANFE/DANFSE |
| Multi-tenant | Se MyCert: isolamento por empresa (tenant) |
| Integração financeiro | Lançamento automático ao emitir (fase 2) |

**Stack:** API emissor homologada (Focus NFe, Nuvem Fiscal, Tecnospeed) + backend Node/Python + Postgres multi-tenant

---

## Estimativa interna

| Cenário | Horas | Valor |
|---------|------:|------:|
| NFS-e apenas, 1 empresa | 150h | R$ 15.000 |
| NF-e + NFS-e, 1 empresa | 180h | R$ 18.000 |
| Multi-tenant (LH + MyCert) | 220h | R$ 22.000 |

**+ custos:** certificado, API emissor (mensalidade por CNPJ), homologação

---

## Como falar o preço

> "NF fica entre **R$ 15 mil e R$ 22 mil**, dependendo dos tipos de nota e se teremos mais de uma empresa no sistema. Antes disso, uma conversa com seu contador e definição do certificado digital."

---

## Objeções comuns

| Objeção | Resposta |
|---------|----------|
| "App X emite por R$ 30/mês" | "Apps genéricos não integram com seu CRM e financeiro. Aqui é ecossistema único." |
| "Contador emite" | "Contador fecha obrigação. Sistema emite no dia da venda na loja, sem esperar." |
| "Faz junto com o resto" | "NF mal implementada dá multa. Fase por fase protege você e protege a gente." |

---

## Melhorias futuras / upsell

1. Emissão em lote
2. Importação de compras (entrada de NF de fornecedor)
3. Integração contábil (export pro contador)
4. IA: sugerir descrição de serviço conforme padrão aprovado
5. IA: validar campos antes de enviar à SEFAZ (reduzir rejeição)

---

## Integração painel + IA

- Widget notas do mês, pendentes, erros
- Alerta certificado vencendo
- **IA:** pré-preenchimento, detecção de inconsistência fiscal (sempre com revisão humana)

---

## Replicável para outros clientes

Prestadores de serviço + pequeno comércio com emissão frequente. **Sempre** última fase. **Sempre** exigir contador. Multi-tenant só se houver segundo cliente real (não especular).
