
// Programme load
document.addEventListener('DOMContentLoaded', function() {
  changeText();
});

// Texte TIM

function changeText() {
  var div = document.getElementById('descriptionField');
  div.innerHTML = '<h3>TIM</h3> <br> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!Lorem ipsum dolor. dolor ah';
  
  // CSS 
  div.style.paddingLeft = '3.5%';
  div.style.fontWeight = 'lighter';
  div.style.fontSize = '20px';
  div.style.lineHeight = '20px';
  div.style.display = 'flex';
  div.style.letterSpacing = '0.02em';
  div.style.overflow = 'hidden';
  div.style.color = '#DBDBDD';

  
  // Mettre en gris
  var itemTIM = document.getElementById('itemTIM')
  var itemTI = document.getElementById('itemTI');
  var itemA3D = document.getElementById('itemA3D');

  itemTIM.style.filter = 'grayscale(0%)';
  itemTI.style.filter = 'grayscale(100%)';
  itemA3D.style.filter = 'grayscale(100%)';

  // Slide up
  var itemA3D = document.getElementById('itemA3D');
  itemA3D.classList.remove('animate-slideup');

  var itemTIM = document.getElementById('itemTIM');
  itemTIM.classList.add('animate-slideup');

  var itemTI = document.getElementById('itemTI');
  itemTI.classList.remove('animate-slideup');

}


// Texte TI

function changeText1() {
  var div = document.getElementById('descriptionField');
  div.innerHTML = '<h3>TI</h3> <br> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!Lorem ipsum dolor. dolor ah';
  
  // CSS 
  div.style.paddingLeft = '3.5%';
  div.style.fontWeight = 'lighter';
  div.style.fontSize = '20px';
  div.style.lineHeight = '20px';
  div.style.display = 'flex';
  div.style.letterSpacing = '0.02em';
  div.style.overflow = 'hidden';
  div.style.color = '#DBDBDD';

  
  // Mettre en gris
  var itemTIM = document.getElementById('itemTIM')
  var itemTI = document.getElementById('itemTI');
  var itemA3D = document.getElementById('itemA3D');

  itemTIM.style.filter = 'grayscale(100%)';
  itemTI.style.filter = 'grayscale(0%)';
  itemA3D.style.filter = 'grayscale(100%)';

  // Slide up
  var itemA3D = document.getElementById('itemA3D');
  itemA3D.classList.remove('animate-slideup');
  
  var itemTIM = document.getElementById('itemTIM');
  itemTIM.classList.remove('animate-slideup');
  
  var itemTI = document.getElementById('itemTI');
  itemTI.classList.add('animate-slideup');
  

}


// Texte A3D

function changeText2() {
  var div = document.getElementById('descriptionField');
  div.innerHTML = '<h3>A3D</h3> <br> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!Lorem ipsum dolor. dolor ah';
  
  // CSS 
  div.style.paddingLeft = '3.5%';
  div.style.fontWeight = 'lighter';
  div.style.fontSize = '20px';
  div.style.lineHeight = '20px';
  div.style.display = 'flex';
  div.style.letterSpacing = '0.02em';
  div.style.overflow = 'hidden';
  div.style.color = '#DBDBDD';

  // Mettre en gris
  var itemTIM = document.getElementById('itemTIM')
  var itemTI = document.getElementById('itemTI');
  var itemA3D = document.getElementById('itemA3D');

  itemTIM.style.filter = 'grayscale(100%)';
  itemTI.style.filter = 'grayscale(100%)';
  itemA3D.style.filter = 'grayscale(0%)';

  // Slide up
  var itemA3D = document.getElementById('itemA3D');
  itemA3D.classList.add('animate-slideup');

  var itemTIM = document.getElementById('itemTIM');
  itemTIM.classList.remove('animate-slideup');

  var itemTI = document.getElementById('itemTI');
  itemTI.classList.remove('animate-slideup');


}
// scroll down

function scrollToSection() {
  // Find the section to scroll to
  var section = document.getElementById('section');

  // Scroll the page to the section
  if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}



