document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const errorMsg = document.getElementById('errorMsg');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      // Canadian phone number format + length
      const phoneRegex = /^(\+1\s?)?(\(?\d{3}\)?[\s\-]?)\d{3}[\s\-]?\d{4}$/;
      const phoneDigits = phone.replace(/\D/g, '');
  
      // Validate required fields
      if (!name || !email || !message) {
        errorMsg.style.color = 'red';
        errorMsg.textContent = 'Please fill in all required fields.';
        return;
      }
  
      // Validate email
      if (!emailRegex.test(email)) {
        errorMsg.style.color = 'red';
        errorMsg.textContent = 'Please enter a valid email address.';
        return;
      }
  
      // Validate phone number if provided
      if (phone) {
        const phoneFormatRegex = /^(\+?1\s*[-.]?)?(\(?\d{3}\)?)[\s.-]?\d{3}[\s.-]?\d{4}$/;
      
        if (!phoneFormatRegex.test(phone)) {
          errorMsg.style.color = 'red';
          errorMsg.textContent = 'Please enter a valid Canadian phone number.';
          return;
        }
      
        if (phoneDigits.length !== 10 && phoneDigits.length !== 11) {
          errorMsg.style.color = 'red';
          errorMsg.textContent = 'Phone number must be 10 digits (or 11 with country code).';
          return;
        }
      
        if (phoneDigits.length === 11 && !phone.startsWith('+1') && !phone.startsWith('1')) {
          errorMsg.style.color = 'red';
          errorMsg.textContent = 'If using 11 digits, number must start with +1 or 1.';
          return;
        }
      }
  
      // checks pass
      errorMsg.style.color = 'green';
      errorMsg.textContent = 'Message sent successfully!';
  
      // Auto-hide message
      setTimeout(() => {
        errorMsg.textContent = '';
      }, 3000);
  
      form.reset();
    });
  
