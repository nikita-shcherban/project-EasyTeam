const headerMenuButton = document.querySelector('.header-burger-btn');
const headerMenuButtonIconUse = document.querySelector(
  '.header-menu-icon > use'
);
const header = document.querySelector('.header');

const toggleMenu = () => {
  const isMobileMenuOpen = header.classList.toggle('mobile-menu-open');
  headerMenuButton.ariaLabel = isMobileMenuOpen
    ? 'Close navigation menu'
    : 'Open navigation menu';
  const useHref = headerMenuButtonIconUse.getAttribute('href');
  const [basePath, id] = useHref.split('#');
  headerMenuButtonIconUse.setAttribute(
    'href',
    [basePath, isMobileMenuOpen ? 'icon-close' : 'icon-burger'].join('#')
  );
};

headerMenuButton.addEventListener('click', () => {
  toggleMenu();
});

header.addEventListener('click', e => {
  const isMobileMenuOpen = header.classList.contains('mobile-menu-open');
  if (isMobileMenuOpen && e.target.classList.contains('header-nav-link')) {
    toggleMenu();
  }
});
