// Setting global variables
let form

$(() => {
  // Initializing Fullpage.js
  const myFullpage = new fullpage('#scroller', {
      /* Options */
      sectionsColor: ['#f39c12', '#ffffff', '#ffffff', '#ffffff'],
      navigationTooltips: ['Home', 'Skills', 'Portfolio', 'Contact'],
      anchors: ['home', 'skills', 'portfolio', 'contact'],

      dragAndMove: true,
      loopBottom: true,
      loopTop: true,
      navigation: true,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
	    showActiveTooltip: false,

      controlArrows: false
  });

  // Initializing Text Typer On Homepage
  skillContainer('Full Stack Developer')

  // Managing click events for slider buttons
  $('.prev').click(() => {
    fullpage_api.moveSlideLeft();
  })

  $('.next').click(() => {
    fullpage_api.moveSlideRight();
  })

  /* Handling contact form submission */
  form = document.getElementById('contact-form')
  form.addEventListener("submit", handleSubmit)
})

const skillContainer = text => {
  let index = 0

  const skillLoop = () => {
    setTimeout(() => {
      $('#skill-text').text(text.substring(0, index + 1))
      index++

      if (index < text.length) {
        skillLoop()
      }
    }, 125)
  }

  skillLoop()
}

const handleSubmit = async event => {
  event.preventDefault()

  const data = new FormData(event.target)

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    const newToast = `
    <div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
          Thanks for your submission!
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
    `
    $('.toast-container').html(newToast)
    $('.toast').toast('show')
    form.reset()
  })
  .catch(error => {
    alert('Did not send!')
  })
}
