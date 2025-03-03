function removeSidebar() {
  try {
    const sidebar = document.getElementById('secondary');
    const related = document.getElementById('related');
    
    const url = window.location.href;
    const isPlaylist = url.includes('list');
    
    if (sidebar && !isPlaylist) {
      sidebar.remove();
      console.log('Sidebar removed successfully');
    }
    
    if (related) {
      related.remove();
      console.log('Related videos section removed successfully');
    }
  } catch (error) {
    console.error('Error removing elements:', error);
  }
}

window.addEventListener('load', removeSidebar);
document.addEventListener('yt-navigate-finish', removeSidebar);

removeSidebar();

const observer = new MutationObserver(() => {
  removeSidebar();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});