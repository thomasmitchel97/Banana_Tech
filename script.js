    document.getElementById('showSectionBtn').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('mainSection').style.display = 'none';
      document.getElementById('extraSection').style.display = 'block';
  document.getElementById('logoSmall').style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
