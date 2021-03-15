setInterval(async () => {
  await fetch('http://localhost:5000')
    .then((response) => response.json())
    .then((id) => {
      if (id === '') return
      if (localStorage.getItem('lastVideoId') !== id) {
        localStorage.setItem('lastVideoId', id)
        Push.create('yeni video', {
          body: 'Mert akpınar kanalından yeni video!',
          timeout: 3000,
          onClick: function () {
            window.open(
              'https://www.youtube.com/channel/UC7lxUNscyoyAbfVy7snosKQ'
            )
          },
        })
      }
    })
    .catch((err) => console.log(err))
}, 4000)
