window.onload = function() {
    document.getElementById('infoModal').style.display = 'block';
    
    document.querySelector('.close').onclick = function() {
      document.getElementById('infoModal').style.display = 'none';
      
      setTimeout(function() {
        document.getElementById('myIframe').classList.add('loaded');
        document.querySelector('.loader-container').style.display = 'none';
      }, 1500);
    }
  };