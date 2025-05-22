const texts = [
    "Web Developer",
    "Developer",
    "Web Designer",
    "Creator",
    "Script Writer"
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedTextSpan = document.getElementById("typed-text");
  
  function type() {
    const currentText = texts[textIndex];
    const visibleText = isDeleting
      ? currentText.substring(0, charIndex--)
      : currentText.substring(0, charIndex++);
  
    typedTextSpan.innerHTML = visibleText + '<span class="cursor">|</span>';
  
    if (!isDeleting && charIndex === currentText.length + 1) {
      isDeleting = true;
      setTimeout(type, 1200); // pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500); // pause before next word
    } else {
      setTimeout(type, isDeleting ? 50 : 120);
    }
  }
  
  document.addEventListener("DOMContentLoaded", type);

    document.addEventListener("DOMContentLoaded", function () {
          const menuIcon = document.getElementById("menu-icon");
          const nav = document.getElementById("nav-menu");
        
          menuIcon.addEventListener("click", () => {
            nav.classList.toggle("active");
          });
        });
  