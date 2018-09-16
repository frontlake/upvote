window.Seed = (function () {
  const submissions = [{
    tag: 'vuejs',
    title: 'Vue',
    description: 'Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.',
    url: 'https://vuejs.org',
    submissionImage: 'https://hollowtree.gallerycdn.vsassets.io/extensions/hollowtree/vue-snippets/0.1.9/1536163208133/Microsoft.VisualStudio.Services.Icons.Default',
    votes: 10,
    avatar: 'https://randomuser.me/api/portraits/thumb/men/47.jpg',
    submitter: 'John Denver'
  }, {
    tag: 'reactjs',
    title: 'React',
    description: 'React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.',
    url: 'https://reactjs.org',
    submissionImage: 'https://www.shareicon.net/data/128x128/2016/07/08/117367_logo_512x512.png',
    votes: 15,
    avatar: 'https://randomuser.me/api/portraits/thumb/women/26.jpg',
    submitter: 'Regina Perez'
  }, {
    tag: 'angularjs',
    title: 'Angular',
    description: 'Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop',
    url: 'https://angular.io',
    submissionImage: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/square_128/angular2.png',
    votes: 14,
    avatar: 'https://randomuser.me/api/portraits/thumb/men/55.jpg',
    submitter: 'Jim Snow'
  }, {
    tag: 'svelte',
    title: 'Svelte',
    description: 'The magical disappearing UI framework. Svelte turns your templates into tiny, framework-less vanilla JavaScript.',
    url: 'https://svelte.technology',
    submissionImage: 'https://storage.googleapis.com/pwa-directory.appspot.com/128_5701736371585024.png',
    votes: 6,
    avatar: 'https://randomuser.me/api/portraits/thumb/women/12.jpg',
    submitter: 'Mia Davis'
  }];
  return { submissions: submissions }
}());