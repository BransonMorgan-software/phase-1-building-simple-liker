// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const likeButton = document.querySelector('.like-glyph');
  const modal = document.getElementById('modal');

  function showError(cb) {
    modal.removeAttribute('class');
    setTimeout(function() {
      modal.setAttribute('class', 'hidden');
      cb();
    }, 3000);
  };
  function likeMe(button) {
    button.addEventListener('click', (e) => {
      if (e.target.innerHTML === EMPTY_HEART) {
        mimicServerCall()
        .then(() => {e.target.innerHTML = FULL_HEART;
        e.target.setAttribute('class', 'like-glyph activated-heart');
      })
      .catch(() => {
        showError(function() {
          e.target.innerHTML = FULL_HEART;
          e.target.setAttribute('class', 'like-glyph activated-heart');
        });
      });
      } else {
        e.target.innerHTML = EMPTY_HEART
        e.target.setAttribute('class', 'like-glyph')
      }
    });
  };
  likeButton.forEach(button => {
    likeMe(button)
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
