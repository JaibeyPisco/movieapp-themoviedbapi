const ghpages = require('gh-pages')
ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/JaibeyPisco/movieapp-themoviedbapi.git', // Update to point to your repository
        user: {
          name: 'JaibeyPisco', // update to use your name
          email: 'jaibey.pisco@tecsup.edu.pe' // Update to use your email
        },
        dotfiles: true
      },
      () => {
        console.log('Deploy Complete!');
      }

)