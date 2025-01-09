let characters = [
    ...'abcdefghijklmnopqrstuvwxyz', 
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ...'0123456789',                 
    ...'!@#$%^&*()-_=+[]{}|;:\'",.<>?/`~'
  ]
 let pass1El = document.getElementById("pass1-el")
 let pass2El = document.getElementById("pass2-el")
 let pass3El = document.getElementById("pass3-el")
 let pass4El = document.getElementById("pass4-el")
 let copyEl = document.getElementById("copy-el")
 let generated = false

function generate() {
   pass1El.textContent = '';
   pass2El.textContent = '';
   pass3El.textContent = '';
   pass4El.textContent = '';

  for (let i=0; i<15; i++) {
    pass1El.textContent += characters[Math.floor(Math.random()*characters.length)]
    pass2El.textContent += characters[Math.floor(Math.random()*characters.length)]
    pass3El.textContent += characters[Math.floor(Math.random()*characters.length)]
    pass4El.textContent += characters[Math.floor(Math.random()*characters.length)]
  }
  copyEl.textContent = 'Click any of the passwords below to copy it:'
}


function copyToClipboard(element) {
  navigator.clipboard.writeText(element.textContent)
    .then(() => {
      alert("Copied!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

// Add event listeners to the password elements
pass1El.addEventListener("click", () => copyToClipboard(pass1El));
pass2El.addEventListener("click", () => copyToClipboard(pass2El));
pass3El.addEventListener("click", () => copyToClipboard(pass3El));
pass4El.addEventListener("click", () => copyToClipboard(pass4El));