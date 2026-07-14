# Módulo 01 — Mini site profissional para presença digital

**Cliente:** LH Portas · **Fase:** 1 de 5 · **Uso:** interno — preparação de reunião

---

## Dor do cliente

- Não possui **nenhum sistema digital** hoje — opera com planilhas
- Pediu "página de links" no WhatsApp, mas o que ele precisa é **credibilidade na internet**
- Loja física com saída de clientes — precisa de algo profissional para compartilhar (WhatsApp, Instagram, QR na porta)
- Mencionou cinco coisas de uma vez; este módulo é a **porta de entrada** sem assustar com CRM/NF

---

## Como apresentar (script completo)

**Abertura:**
> "O primeiro passo não é um sistema complexo. É um **mini site profissional** — a cara da LH Portas na internet. Quem pesquisar, receber seu WhatsApp ou escanear um QR na loja vê uma empresa séria: o que vocês fazem, como entrar em contato, onde ficam."

**Diferenciar de Linktree:**
> "Não é aquela página genérica de botões. É um site leve, com a identidade de vocês, pensado pra celular e pra quem chega pelo WhatsApp."

**Fechar a dor:**
> "Hoje vocês não têm presença digital nenhuma. Em uma semana isso muda — e já prepara o terreno pro CRM e pro financeiro depois."

**NÃO dizer:** "é tipo Linktree", "página de links", "só uns botões" — diminui valor percebido.

---

## Perguntas obrigatórias (antes de fechar escopo)

- [ ] Quais serviços destacar? (venda de portas, instalação, manutenção, garantia?)
- [ ] Logo, cores e fotos existem? Quem fornece?
- [ ] Quais canais de contato entram? (WhatsApp com qual número, Instagram, catálogo, Maps, telefone fixo?)
- [ ] Domínio já existe? (`lhportas.com.br`, subdomínio?)
- [ ] Vai usar QR Code na loja física?
- [ ] Tem textos prontos ou precisa de ajuda para redigir?

---

## O que NÃO prometer

- Painel para o cliente editar conteúdo sozinho (Fase 1 = você altera via manutenção)
- Blog, e-commerce, área logada
- Integração WhatsApp Business API
- Criação de logo/identidade do zero sem custo extra
- CRM, financeiro, NF neste valor

---

## Escopo técnico sugerido

### Dentro do escopo

| Bloco | Entregável |
|-------|------------|
| Identidade | Logo, cores LH Portas, tipografia, favicon |
| Hero | Nome, subtítulo, proposta de valor em uma frase |
| Serviços | 3–4 itens em destaque (ícone + título + linha) |
| Contato | Até 6 CTAs (WhatsApp wa.me, redes, catálogo, Maps, telefone) |
| Rodapé | Marca, ano, links sociais compactos |
| UX | Tema claro/escuro, animações leves, mobile-first |
| SEO | title, description, Open Graph, sitemap/robots |
| Analytics | GA4 + eventos de clique nos CTAs |
| Deploy | Netlify/Vercel + DNS + SSL |

### Fora do escopo

Landing de campanha, CRM, financeiro, NF, painel admin, blog

**Base técnica:** adaptar [index.html](../../../index.html) (Êxito Contabilidade) — prova de que o padrão visual já funciona.

---

## Stack recomendada

| Tech | Por quê |
|------|---------|
| HTML5 + CSS3 + JS vanilla | Sem build, barato de manter, rápido de entregar |
| CSS custom properties | Tema claro/escuro sem framework |
| Font Awesome + Google Fonts | Ícones e tipografia profissional |
| Netlify / Vercel | SSL, CDN, deploy simples |
| GA4 | Métricas sem custo |

---

## Estimativa interna

| Atividade | Horas |
|-----------|------:|
| Briefing e assets | 2h |
| Identidade + hero + serviços | 5h |
| CTAs e rodapé | 2h |
| SEO + GA4 | 2h |
| Deploy + DNS | 3h |
| Testes + 1 rodada ajustes | 4h |
| **Total** | **20h** |

**Valor cheio:** R$ 2.000 (R$ 100/h)  
**Manutenção sugerida:** R$ 150/mês

---

## Como falar o preço

> "O investimento da Fase 1 é **R$ 2.000** — valor fechado pro mini site completo, publicado, com SEO e acompanhamento de acessos. Depois, **R$ 150 por mês** cobre hospedagem, segurança e até duas alterações de texto ou link por mês."

**Ancoragem:** não mencionar os R$ 37k–52k do ecossistema inteiro nesta conversa.

**Alternativa à vista:** R$ 1.900 (5% desconto) se pagar 100% na aprovação.

---

## Objeções comuns

| Objeção | Resposta |
|---------|----------|
| "Tá caro, é só um site simples" | "É presença profissional publicada, com domínio, SSL, SEO e suporte. Linktree genérico não passa a mesma confiança pra quem vai comprar porta e instalação." |
| "Quero tudo junto" | "Dá pra fazer tudo, mas sem escopo fechado vira retrabalho. Começamos pelo mini site — em uma semana você já usa — e cotamos cada fase com briefing." |
| "Minha sobrinha faz" | "Ótimo pra redes. Aqui entra domínio, analytics, performance mobile e base pra conectar CRM e financeiro depois sem refazer." |
| "Não preciso de site, só WhatsApp" | "O mini site manda pro WhatsApp com mensagem pronta e passa profissionalismo antes da primeira conversa." |

---

## Melhorias futuras / upsell

1. QR Code impresso para balcão e porta da loja
2. UTM nos links para medir origem (QR vs Instagram vs indicação)
3. Seção de depoimentos ou fotos de obras
4. Integração com landing de campanha (Fase 2)
5. Widget de chat ou botão flutuante WhatsApp
6. Versão em inglês se atender região turística

---

## Integração painel + IA

| Dado | Onde aparece no painel futuro |
|------|------------------------------|
| Pageviews, cliques por CTA | Dashboard "Presença digital" |
| Origem (UTM, QR, rede) | Gráfico "De onde veio" |
| Dispositivo mobile/desktop | Insight de comportamento |

**IA (fase posterior):** sugerir texto de serviços com base em cliques; alertar queda de acessos; recomendar melhor horário de postagem com base em picos.

---

## Replicável para outros clientes

Use este módulo como **Fase 1 padrão** para qualquer negócio local sem presença digital: oficina, clínica, loja, prestador de serviço. Troque dor (planilhas → sem site), serviços em destaque e identidade visual. Mantenha o posicionamento **mini site profissional**, nunca "Linktree".
