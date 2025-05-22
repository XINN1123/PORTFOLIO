//const particleField = document.getElementById('particleField');
        //for (let i = 0; i < 50; i++) {
            //const particle = document.createElement('div');
           // particle.className = 'particle';
           // particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
          //  particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
          ///  particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
          //  particle.style.left = `${Math.random() * 100}%`;
          ///  particle.style.top = `${Math.random() * 100}%`;
           // particleField.appendChild(particle);
       // }*
const particleFields = document.querySelectorAll('.particles-field');
particleFields.forEach(particleField => {
  for (let i = 0; i < 50; i++) {
   const particle = document.createElement('div');
   particle.className = 'particle';
   particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
   particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
   particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
   particle.style.left = `${Math.random() * 100}%`;
   particle.style.top = `${Math.random() * 100}%`;
   particleField.appendChild(particle);
  }
});




    
  
  document.addEventListener('click', function(e) {
    const clickEffect = document.createElement('div');
    clickEffect.className = 'click-shadow';
    clickEffect.style.left = `${e.clientX}px`;
    clickEffect.style.top = `${e.clientY}px`;
    document.body.appendChild(clickEffect);

    setTimeout(() => {
      clickEffect.remove();
    }, 400); // match animation duration
  });

  const thumbs = document.querySelectorAll('.thumb li');
  const infoSlider = document.querySelectorAll('.info-slider');
  const imgSlider = document.querySelectorAll('.img-slider');
  const items = document.querySelectorAll('.item');
  

  let index = 0;

  thumbs.forEach((thumb, ind) => {
    thumb.addEventListener('click', () => {

        document.querySelector('.thumb .selected').classList.remove('selected');
        thumb.classList.add('selected');

        index = ind;

        infoSlider.forEach(slide => {
            slide.style.transform = `translateY(${index * -100}%)`;

        });

         imgSlider.forEach(slide => {
            slide.style.transform = `translateX(${index * -100}%)`;

        });

        document.querySelector('.item.active').classList.remove('active');
        items[index].classList.add('active');
      

    });
  });


