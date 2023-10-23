const fs = require('fs');
const metagen = require('meta-generator');

const boilerplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- {% metagen %} -->
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;

const head = metagen({
  title: 'Book.js',
  desc: 'Reusable 3D Book Component with GSAP animation',
  url: 'https://extraordinary-kheer-4bd56b.netlify.app',
  img: 'https://user-images.githubusercontent.com/48612525/273147153-54f1c51c-120a-487f-a023-d1394354ddd5.png',
  img_alt: 'Demo image of book component displaying Hitchiker\' Guide to the Galaxy',
  twitter_card_type: 'summary_large_image',
  twitter_handle: 'tannerdolby',
  name: 'Tanner Dolby',
  comments: true,
}).join('\n');

const content = boilerplate.replace('<!-- {% metagen %} -->', head);

fs.writeFile('./public/index.html', (content.trim()), (err) => {
  if (err) throw err;
});
