$(() => {
  const myFullpage = new fullpage('#scroller', {
      /* Options */
      sectionsColor: ['#f39c12', '#8e44ad', '#7BAABE', '#2980b9'],
      navigationTooltips: ['Home', 'Skills', 'Portfolio', 'Contact'],
      anchors: ['home', 'skills', 'portfolio', 'contact'],

      dragAndMove: true,
      loopBottom: true,
      navigation: true,
	    showActiveTooltip: false
  });
})
