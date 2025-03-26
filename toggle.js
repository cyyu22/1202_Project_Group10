document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const habitCards = document.getElementById('habitCards');
    const substituteCards = document.getElementById('substituteCards');
  
    // ========== Toggle Function ==========
    function toggleSections(showHabits) {
      habitCards.style.display = showHabits ? 'flex' : 'none';
      substituteCards.style.display = showHabits ? 'none' : 'flex';
  
      toggleBtn.textContent = showHabits
        ? 'Show Product Substitutes'
        : 'Show Habit Guide';
    }
  
    // ========== Manual toggle button ==========
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const showingHabits = habitCards.style.display !== 'none';
        toggleSections(!showingHabits);
        console.log('Toggle button clicked');
      });
    }
  
    // ========== Implement hotkey (E) to toggle ==========
    document.addEventListener('keydown', (e) => {
      if (e.key === 'e' || e.key === 'E') {
        const showingHabits = habitCards.style.display !== 'none';
        toggleSections(!showingHabits);
        console.log("Hotkey 'E' pressed: toggled view");
      }
    });
  
    // ========== Mouse effect ==========
    cards.forEach(card => {
      card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#e6ffe6';
      });
  
      card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '';
      });
  
      card.addEventListener('click', (e) => {
        console.log('Clicked card:', e.currentTarget.querySelector('h3')?.textContent);
      });
    });
  
    // ========== Auto toggle when idle ==========
    let idleTime = 0;
    const idleLimit = 10;
    let currentMode = 'habit';
  
    const autoToggle = () => {
      if (idleTime >= idleLimit) {
        const showingHabits = habitCards.style.display !== 'none';
        toggleSections(!showingHabits);
        currentMode = showingHabits ? 'substitute' : 'habit';
        console.log(`Auto-toggle to: ${currentMode}`);
        idleTime = 0;
      } else {
        idleTime++;
      }
    };
  
    const resetIdle = () => {
      idleTime = 0;
    };
  
    ['mousemove', 'keydown', 'click', 'scroll'].forEach(event =>
      document.addEventListener(event, resetIdle)
    );
  
    setInterval(autoToggle, 1000);
});
