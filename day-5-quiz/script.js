
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
