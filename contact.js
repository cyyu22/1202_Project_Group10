document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const errorMsg = document.getElementById('errorMsg');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Required field check
      if (!name || !email || !message) {
        errorMsg.textContent = 'Please fill in all required fields.';
        return;
      }
  
      // ✅ Email format check (RFC-standard but simple)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errorMsg.textContent = 'Please enter a valid email address.';
        return;
      }
  
      // ✅ Canadian phone number check
      // ✅ Canadian phone number format + length check
const phoneDigits = phone.replace(/\D/g, ''); // remove non-digits

    if (phone) {
        if (!/^\+?1?[\s\-\.]?\(?\d{3}\)?[\s\-\.]?\d{3}[\s\-\.]?\d{4}$/.test(phone)) {
            errorMsg.textContent = 'Please enter a valid Canadian phone number format.';
            return;
        }
        if (phoneDigits.length !== 10 && phoneDigits.length !== 11) {
            errorMsg.textContent = 'Phone number must be 10 digits (or 11 with country code).';
            return;
        }
    }

  
      // ✅ All passed
      errorMsg.textContent = '';
      alert('Message sent successfully!');
      form.reset();
    });
  });
  
