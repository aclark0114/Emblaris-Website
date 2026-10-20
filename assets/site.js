// Mobile navigation
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  // Contact form: opens the visitor's email client with the message pre-filled.
  // Replace with a server-side handler (e.g. contact.php) when the site moves to production.
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var d = new FormData(form);
      var body =
        'Name: ' + d.get('name') + '\n' +
        'Organization: ' + (d.get('organization') || '') + '\n' +
        'Email: ' + d.get('email') + '\n' +
        'Phone: ' + (d.get('phone') || '') + '\n' +
        'Topic: ' + d.get('topic') + '\n\n' +
        d.get('message');
      var to = form.getAttribute('data-to');
      window.location.href = 'mailto:' + to +
        '?subject=' + encodeURIComponent('Website enquiry: ' + d.get('topic')) +
        '&body=' + encodeURIComponent(body);
      var status = document.getElementById('form-status');
      if (status) status.classList.add('show');
    });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
