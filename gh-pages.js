var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/florianpfleiderer/florianpfleiderer.github.io.git', // Update to point to your repository  
        user: {
            name: 'Florian Pfleiderer', // update to use your name
            email: 'florian@pfleiderer.at' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)