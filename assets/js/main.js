$(() => {
  const myFullpage = new fullpage('#scroller', {
      /* Options */
      sectionsColor: ['#f39c12', '#ffffff', '#ffffff', '#ffffff'],
      navigationTooltips: ['Home', 'Skills', 'Portfolio', 'Contact'],
      anchors: ['home', 'skills', 'portfolio', 'contact'],

      dragAndMove: true,
      loopBottom: true,
      navigation: true,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
	    showActiveTooltip: false,

      controlArrows: true
  });

  const desired = "Full Stack Developer"
  let index = 0

  const skillLoop = () => {
    setTimeout(() => {
      $('#skill-text').text(desired.substring(0, index + 1))
      index++

      if (index < desired.length) {
        skillLoop()
      }
    }, 125)
  }

  skillLoop()

  $('.custom-prev').click(() => {
    fullpage_api.moveSlideLeft();
  })

  $('.custom-next').click(() => {
    fullpage_api.moveSlideRight();
  })

  /* Handling contact form submission */
  const form = document.getElementById('contact-form')

  async function handleSubmit(event) {
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

  form.addEventListener("submit", handleSubmit)

  $('#myToast').toast('show')
})
