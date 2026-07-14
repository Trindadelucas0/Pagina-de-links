# Proposta Comercial — LH Portas | Fase 1: Mini site profissional para presença digital

**Cliente:** LH Portas  
**Data:** 06/07/2026  
**Validade da proposta:** 15 dias  
**Fase:** 1 de 5 (entrada do ecossistema digital)

---

## Suposições adotadas nesta proposta

Como o briefing ainda está incompleto, esta proposta foi elaborada com base nas informações capturadas e nas seguintes suposições explícitas:

| Item | Suposição |
|------|-----------|
| Links principais | Até 6 botões (WhatsApp, Instagram, catálogo, site, localização, telefone) |
| Identidade visual | Adaptação com logo, cores e foto fornecidos pelo cliente (sem criação de marca do zero) |
| Domínio | Subdomínio ou domínio dedicado, ex.: `links.lhportas.com.br` |
| Analytics | Google Analytics 4, conta criada pelo cliente |
| Edição de links | Alterações feitas pelo desenvolvedor (sem painel administrativo) |

**Perguntas em aberto para fechar o escopo antes da execução:**

- Quais links exatos entram na página? (redes sociais, catálogo, WhatsApp com qual número?)
- Existe referência visual ou manual de marca da LH Portas?
- O domínio já está registrado? Em qual registrador?
- A página será divulgada na loja física (QR Code)?

---

## 1. Resumo do Projeto

**Nome do projeto:** LH Portas — Mini site profissional para presença digital

**Objetivo de negócio:** Estabelecer a **presença digital profissional** da LH Portas na internet — identidade da marca, serviços em destaque e canais de contato (WhatsApp, redes sociais, catálogo, localização). O cliente informou que **não possui nenhum sistema digital hoje** — opera com planilhas —, tornando esta entrega o primeiro passo concreto da transformação digital da empresa.

**Tipo de sistema:** Mini site estático profissional — leve, rápido, otimizado para mobile, com identidade visual da marca (não é página genérica de links).

**Contexto estratégico:** O cliente solicitou cinco entregas distintas (CRM, presença digital, landing page, emissão de NF e sistema financeiro). Esta proposta cobre **somente a Fase 1 — Mini site profissional para presença digital**. Os demais módulos serão cotados separadamente quando houver briefing específico de cada um.

---

## 2. Escopo Funcional

### Módulo A — Identidade e perfil

| Entregável | Detalhe técnico |
|------------|-----------------|
| Adaptação visual | Paleta de cores, tipografia e layout personalizados para a LH Portas, baseados no template já validado em produção (referência: projeto Êxito Contabilidade) |
| Hero / perfil | Logo ou foto, nome comercial, subtítulo e proposta de valor em uma frase |
| Bloco serviços | 3–4 serviços em destaque (ex.: venda, instalação, manutenção) |
| Tema claro/escuro | Alternância automática com persistência no navegador do visitante (`localStorage`) |

### Módulo B — Contato e conversão

| Entregável | Detalhe técnico |
|------------|-----------------|
| Botões principais | Até 6 links com ícones, rótulos e URLs definidos pelo cliente |
| WhatsApp | Link `wa.me` com DDD correto e mensagem pré-preenchida (ex.: "Olá, vim pelo link da LH Portas") |
| Ícones sociais | Barra inferior com atalhos para os canais principais |
| Animações | Entrada suave dos elementos e feedback visual ao toque/clique (mobile-first) |

### Módulo C — SEO e métricas

| Entregável | Detalhe técnico |
|------------|-----------------|
| SEO básico | `title`, `meta description`, Open Graph (compartilhamento em redes), `lang="pt-BR"`, favicon |
| Sitemap / robots | Arquivos básicos para indexação |
| Google Analytics 4 | Instalação e configuração de eventos de clique nos botões principais |

### Módulo D — Publicação e entrega

| Entregável | Detalhe técnico |
|------------|-----------------|
| Deploy | Publicação em hospedagem estática (Netlify, Vercel ou equivalente) com SSL |
| Domínio | Orientação e configuração de DNS para apontar o domínio do cliente |
| Testes | Validação em dispositivos móveis, verificação de links, tema claro/escuro e performance básica |
| Ajustes | 1 rodada de revisão visual após preview enviado ao cliente |

### Dentro do escopo

- Mini site profissional personalizado com hero, serviços e até 6 CTAs de contato
- SEO, analytics e deploy inclusos
- 1 rodada de ajustes pós-preview
- 30 dias de garantia para correção de bugs no escopo entregue

### Fora do escopo

| Módulo | Motivo |
|--------|--------|
| CRM / prontuário do cliente | Fase futura — requer mapeamento do ciclo de pós-venda |
| Landing page de campanha | Fase futura — requer briefing de público, oferta e CTA |
| Sistema de emissão de NF (incl. parceria MyCert) | Fase futura — complexidade fiscal e possível arquitetura multi-tenant |
| Sistema financeiro (entrada e saída) | Fase futura — requer definição de fluxo de caixa e conciliação |
| Painel administrativo | Não incluso — alterações de link via suporte mensal |
| Integração WhatsApp Business API | Não incluso — apenas link direto para conversa |
| Registro de domínio e taxas anuais | Custo do cliente; desenvolvedor orienta e configura DNS |
| Criação de logo ou identidade visual do zero | Cliente fornece materiais existentes |

### Fases futuras (referência — não cotadas nesta proposta)

| Fase | Módulo | Status do briefing |
|------|--------|-------------------|
| 2 | Landing page de campanha | Incompleto — ver `proposta-lh-portas-fase2-landing.md` |
| 3 | Sistema financeiro básico | Incompleto — ver `proposta-lh-portas-fase3-financeiro.md` |
| 4 | CRM / prontuário de pós-venda | Incompleto — ver `proposta-lh-portas-fase4-crm.md` |
| 5 | Emissão de NF (+ parceria MyCert) | Incompleto — ver `proposta-lh-portas-fase5-nf.md` |

---

## 3. Stack Técnica Sugerida

| Tecnologia | Justificativa |
|------------|---------------|
| **HTML5 semântico** | Estrutura acessível, sem dependência de build ou servidor de aplicação; ideal para cliente sem infraestrutura |
| **CSS3 com custom properties** | Temas claro/escuro e personalização visual sem framework pesado; manutenção simples |
| **JavaScript vanilla** | Toggle de tema, tracking de cliques e interações leves — zero overhead de bibliotecas |
| **Font Awesome + Google Fonts** | Ícones profissionais e tipografia consistente, já validados no template de referência |
| **Hospedagem estática (Netlify / Vercel)** | Deploy automático, SSL gratuito, CDN global e custo operacional mínimo |
| **Google Analytics 4** | Métricas de acesso e cliques sem custo; base para decisões futuras de marketing |

**Por que não usar WordPress, painel ou backend nesta fase:** o cliente não possui sistema algum hoje. Uma página estática entrega resultado imediato, performance superior em mobile e custo de manutenção previsível — alinhado ao objetivo de entrada rápida no ecossistema digital.

**Prova de conceito:** existe implementação funcional no repositório do desenvolvedor (página de links para Êxito Contabilidade), reduzindo risco técnico e prazo de entrega sem comprometer a qualidade.

---

## 4. Estimativa de Tempo

| Módulo | Atividade | Horas |
|--------|-----------|------:|
| A | Alinhamento de conteúdo e coleta de assets (logo, foto, URLs) | 2h |
| A | Adaptação visual (paleta LH Portas, tipografia, card) | 4h |
| B | Montagem de links e ícones (até 6 botões + sociais) | 2h |
| C | SEO (meta tags, Open Graph, favicon, sitemap/robots) | 2h |
| C | Google Analytics 4 + eventos de clique | 2h |
| D | Deploy + configuração DNS/domínio | 3h |
| D | Testes (mobile, links, tema, performance básica) | 2h |
| D | Ajustes pós-preview (1 rodada inclusa) | 3h |
| | **Total** | **20h** |

---

## 5. Precificação

| Item | Valor |
|------|------:|
| Desenvolvimento e publicação (20h × R$ 100/h) | **R$ 2.000,00** |
| **Total da Fase 1 (setup)** | **R$ 2.000,00** |

### Manutenção mensal (opcional, recomendada)

| Item | Valor |
|------|------:|
| Hospedagem gerenciada, monitoramento SSL e domínio | incluso |
| Até 2 alterações de link ou texto por mês | incluso |
| Suporte por WhatsApp/e-mail (horário comercial) | incluso |
| **Mensalidade** | **R$ 150,00/mês** |

### Custos do cliente (não inclusos)

- Registro de domínio: aproximadamente R$ 40/ano (Registro.br ou equivalente)
- Hospedagem premium: não necessária na maioria dos casos (plano gratuito suficiente)

---

## 6. Prazo de Entrega

**5 a 7 dias úteis** contados a partir de:

1. Aprovação formal desta proposta
2. Recebimento do sinal (50% do valor)
3. Envio pelo cliente de: logo, foto, lista de links com URLs e acesso ao domínio (se já existir)

Atraso no envio de materiais desloca o prazo na mesma proporção.

---

## 7. Condições Comerciais

### Forma de pagamento

- **50% (R$ 1.000,00)** na aprovação da proposta
- **50% (R$ 1.000,00)** na entrega e publicação da página
- Alternativa: **100% antecipado com 5% de desconto** (R$ 1.900,00)

### Política de alterações

- 1 rodada de ajustes visuais inclusa após preview
- Alterações fora do escopo aprovado (novos módulos, painel admin, integrações) serão cotadas à parte
- Pedidos adicionais de alteração de link além das 2 mensais inclusas na manutenção: R$ 50/alteração

### Garantia e suporte

- **30 dias** de garantia para correção de bugs visuais ou funcionais no escopo entregue
- Após garantia: suporte via plano de manutenção mensal ou avulso

### Proteção de escopo

- Esta proposta cobre **exclusivamente a Fase 1 — Mini site profissional para presença digital**
- Os módulos CRM, landing page, NF e financeiro **não fazem parte deste valor** e serão propostos separadamente
- Integrações de terceiros dependem de documentação e acesso fornecidos pelo cliente
- Conteúdo (textos, imagens, URLs e domínio) é responsabilidade do cliente, salvo acordo explícito em contrário
- O prazo de entrega conta após aprovação do escopo e recebimento do sinal

---

## 8. Observações Técnicas e Riscos

### Riscos identificados

| Risco | Mitigação |
|-------|-----------|
| Cliente pediu cinco sistemas de uma vez — risco de expectativa de pacote único | Proposta deixa explícito que é Fase 1; demais módulos com proposta própria |
| Briefing visual incompleto (sem lista de links nem referência de estilo) | Suposições documentadas; alinhamento obrigatório antes do desenvolvimento |
| Cliente sem infraestrutura digital (só planilhas) | Stack estática simples; baixa curva de adoção |
| Domínio não registrado | Desenvolvedor orienta; prazo depende da compra pelo cliente |
| Dependência de materiais do cliente | Lista de entregáveis definida; atraso desloca prazo |

### Observações técnicas

- Links externos abrem em nova aba com `rel="noopener noreferrer"` (segurança)
- Página otimizada para mobile (maioria do tráfego via WhatsApp e redes sociais)
- Tema claro/escuro persiste preferência do visitante no navegador
- Eventos GA4 permitem medir quais botões geram mais cliques (útil para otimizar conversão)

### Melhorias recomendadas

1. **QR Code para a loja física** — impresso e colado no balcão/porta da loja (contexto: cliente mencionou saída na loja física); visitante escaneia e acessa todos os canais
2. **UTM nos links** — parâmetros de rastreamento para medir origem de leads quando investir em anúncios pagos
3. **Landing page institucional (Fase 2)** — página com oferta, depoimentos e CTA para captar leads qualificados além do link único
4. **Botão WhatsApp com mensagem pré-preenchida** — reduz fricção e identifica origem do contato
5. **CRM de pós-venda (Fase 4)** — após validar a página de links, implementar histórico de cliente para não perder ninguém depois da venda (objetivo principal declarado pelo cliente)

---

*Proposta elaborada com base no levantamento preliminar do cliente LH Portas. Valores e prazos válidos por 15 dias a partir da data deste documento.*
