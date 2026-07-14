const profile = {
  name: 'Paulo Dias',
  username: '@paulodiascontador',
  usernameIcon: 'fab fa-instagram',
  photo: '/assets/foto.png.jpg',
  photoAlt: 'Paulo Dias - Êxito Contabilidade'
};

const links = [
  {
    id: 'link-instagram',
    href: 'https://www.instagram.com/paulodiascontador',
    icon: 'fab fa-instagram',
    label: 'INSTAGRAM'
  },
  {
    id: 'link-whatsapp',
    href: 'https://wa.me/556196994273?text=Ol%C3%A1%2C%20Paulo%21%20Vim%20pelo%20seu%20link%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20%C3%89xito%20Contabilidade.',
    icon: 'fab fa-whatsapp',
    label: 'WHATSAPP'
  },
  {
    id: 'link-contabilidade',
    href: 'https://www.exitocon.com.br/importacao',
    icon: 'fas fa-file-invoice-dollar',
    label: 'CONSULTORIA'
  },
  {
    id: 'link-contabilidade-ampla',
    href: 'https://www.exitocon.com.br',
    icon: 'fas fa-building',
    label: 'ÊXITO'
  }
];

const socialLinks = [
  {
    id: 'social-instagram',
    href: 'https://www.instagram.com/paulodiascontador',
    icon: 'fab fa-instagram',
    label: 'Instagram'
  },
  {
    id: 'social-whatsapp',
    href: 'https://wa.me/556196994273?text=Ol%C3%A1%2C%20Paulo%21%20Vim%20pelo%20seu%20link%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20%C3%89xito%20Contabilidade.',
    icon: 'fab fa-whatsapp',
    label: 'WhatsApp'
  },
  {
    id: 'social-contabilidade',
    href: 'https://www.exitocon.com.br/importacao',
    icon: 'fas fa-file-invoice-dollar',
    label: 'Contabilidade'
  },
  {
    id: 'social-exitocon',
    href: 'https://www.exitocon.com.br',
    icon: 'fas fa-globe',
    label: 'Êxito Contabilidade'
  }
];

function renderIndex(req, res) {
  res.render('index', { profile, links, socialLinks });
}

module.exports = { renderIndex };
