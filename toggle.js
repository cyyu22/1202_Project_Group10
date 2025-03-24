document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const habitCards = document.getElementById('habitCards');
    const substituteCards = document.getElementById('substituteCards');
  
    // ========== TOGGLE FUNCTION ==========
    function toggleSections(showHabits) {
      habitCards.style.display = showHabits ? 'flex' : 'none';
      substituteCards.style.display = showHabits ? 'none' : 'flex';
  
      toggleBtn.textContent = showHabits
        ? 'Show Product Substitutes'
        : 'Show Habit Guide';
    }
  
    // ========== MANUAL TOGGLE BUTTON ==========
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const showingHabits = habitCards.style.display !== 'none';
        toggleSections(!showingHabits);
        console.log('Toggle button clicked');
      });
    }
  
    // ========== HOTKEY (E) TOGGLE ==========
    document.addEventListener('keydown', (e) => {
      if (e.key === 'e' || e.key === 'E') {
        const showingHabits = habitCards.style.display !== 'none';
        toggleSections(!showingHabits);
        console.log("Hotkey 'E' pressed: toggled view");
      }
    });
  
    // ========== AUTO HIGHLIGHT CARDS (Optional visual feedback) ==========
    const cards = document.querySelectorAll('.card');
    let activeIndex = 0;
  
    setInterval(() => {
      cards.forEach(card => card.classList.remove('highlight'));
      cards[activeIndex].classList.add('highlight');
      activeIndex = (activeIndex + 1) % cards.length;
    }, 4000);
  
    // ========== MOUSE EFFECTS FOR CARDS ==========
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
  
    // ========== SMOOTH SCROLL BUTTON (Optional) ==========
    const scrollBtn = document.getElementById('scrollBtn');
    const targetSection = document.getElementById('contactForm');
  
    if (scrollBtn && targetSection) {
      scrollBtn.addEventListener('click', () => {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    }
  
    // ========== AUTO TOGGLE ON IDLE ==========
    let idleTime = 0;
    const idleLimit = 10; // seconds
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
  
    setInterval(autoToggle, 1000); // check every second
  
    // ========== OPTIONAL: Mouse Button Logging ==========
    document.addEventListener('mousedown', (e) => {
      const buttons = ['Left Click', 'Middle Click', 'Right Click'];
      console.log('Mouse button:', buttons[e.button] || 'Unknown');
    });
  });
  
