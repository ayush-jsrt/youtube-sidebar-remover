function removeSidebar() {
  const sidebar = document.getElementById('secondary');
  if (sidebar) {
    sidebar.remove();
  }
}

removeSidebar();

const observer = new MutationObserver(() => {
  removeSidebar();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});