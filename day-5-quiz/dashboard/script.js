
function toggleDropdown(id){
  const menu = document.getElementById(id);
  // close other menus
  document.querySelectorAll('[id$="Menu"]').forEach(m => { if(m.id!==id) m.classList.add('hidden'); });
  menu.classList.toggle('hidden');
}
// Close when click outside
document.addEventListener('click', function(e){
  if(!e.target.closest('button')) {
    document.querySelectorAll('[id$="Menu"]').forEach(m => m.classList.add('hidden'));
  }
});
const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
  });

  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    });
  });
