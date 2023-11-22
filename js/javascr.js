function updateDateTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const timeString = now.toLocaleTimeString();
    document.getElementById('date-time').textContent = `${dateString}, ${timeString}`;
  }
  
  setInterval(updateDateTime, 1000); // Update every second