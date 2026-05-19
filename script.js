// Minimal form behavior: light client-side validation + channel toggle.
// Submission target is a placeholder ("action='#'") for the client to wire up.

(function () {
  const form = document.querySelector('.quote-form');
  if (!form) return;

  const email = form.querySelector('#email');
  const phone = form.querySelector('#telefoon');

  function syncChannel() {
    const channel = form.querySelector('input[name="kanaal"]:checked')?.value;
    if (channel === 'telefoon') {
      phone.required = true;
      email.required = false;
    } else {
      email.required = true;
      phone.required = false;
    }
  }

  form.querySelectorAll('input[name="kanaal"]').forEach(r =>
    r.addEventListener('change', syncChannel)
  );
  syncChannel();

  form.addEventListener('submit', function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      return;
    }
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Verzonden — we komen kijken.';
  });
})();
