export const projectData = [
 {
  name: 'Imagine Learning - Math',
  description: `
      Imagine Learning bought a couple math Products and there was a need
      to establish a common ui across the Imagine Learning Suite of Products
      available.  The core of all the data resided in a ruby monolith
      repository and I was tasked to lead the direction of the UI as it was
      separated from the ruby app.  The ruby app hosted all Math Learning
      Content, Report Data, Content Pathway Services and server-side html view
      rendering written in HAML. Because of the size of the size of the Ruby
      app, making any small changes took approximately 9 hours to deploy because
      that is how long all  the ruby unit tests and e2e tests ran.  There was a
      big need to break down the application into smaller pieces.  I lead the
      initiative of re-writing  the reports from HAML to Angular. On this project
      I lead a team of  developers and QA engineers and collaborated directly
      with the Product Owner and Project Manager.  Everything was done in
      Scrum using JIRA.
    `,
  thumbnailUrl: 'assets/projects/math-imaginelearning-com-200.png',
  link: 'https://math.imaginelearning.com'
 },
 {
  name: 'Imagine Learning - English',
  description: `
      Imagine Learning at the time had their application provided via
      server machines that were delivered directly to Schools in person
      and content was broad-casted over the School wifi.  The way Teachers
      or Administrators will interact with the application is by connecting
      to the server machine which provided interaction via Siverlight. I
      joined the 3 man team that rewrote that siverlight application in
      angularJS and hosted it in the cloud.  I wrote hundreds of unit tests,
      added many features to the application to allow educators to view and
      manage all students, schools or organizations within their
      jurisdiction.
    `,
  thumbnailUrl: 'assets/projects/my-imaginelearning-com-200.png',
  link: 'https://my.imaginelearning.com'
 },
 {
  name: 'Hawaii Medical Service Association',
  description: '' +
    'My involvement with this project allowed me ' +
    'to work with an amazing team of developers, ' +
    'designers, ux designers, project manager ' +
    'and project owner.  The collaboration tool of ' +
    'choice was TFS and development work was all done ' +
    'in visual studio.  The methodology chosen for the ' +
    'project is Agile.',
  thumbnailUrl: 'assets/projects/www-hmsa-com-200.png',
  link: 'http://www.hmsa.com'
 },
 {
  name: 'Bank of Hawaii - Website',
  description: '' +
    'For the Bank of Hawaii project they use RedDot as a ' +
    'CMS.  My role involved learning how to use the CMS ' +
    'from both perspectives as a backend developer and ' +
    'frontend developer.  RedDot has its own customized ' +
    'version of Classic ASP.  My job was to reconfigure ' +
    'RedDot to allow non-tech savvy users to update content ' +
    'without duplicate entries.',
  thumbnailUrl: 'assets/projects/www-boh-com-200.png',
  link: 'http://www.boh.com'
 },
 {
  name: 'Hawaii Community Foundation',
  description: '' +
    'For the Hawaii Community Foundation, my job was to ' +
    'merge design with Drupal 6.  From ground up, I built a ' +
    'custom theme and custom content types to allow easy, ' +
    'non-tech employees to enter data flawlessly.',
  thumbnailUrl: 'assets/projects/www-hawaiicommunityfoundation-org-200.png',
  link: 'http://www.hawaiicommunityfoundation.org/'
 },
 {
  name: 'Talentwise',
  description: '' +
    'Talentwise is a Drupal 6 project where design meets code. ' +
    'Theme was custom built with numerous counts of custom ' +
    'content types to allow easy data entry for at least those ' +
    'who cannot code. One unique feature of the site, required ' +
    'that the site capture data via forms hosted locally on the ' +
    'site itself or any other external sites.  One of the ' +
    'requirements for this capturing form is that the form ' +
    'be able to validate with or without JavaScript post data ' +
    'to various third party services api.',
  thumbnailUrl: 'assets/projects/corp-talentwise-com-200.png',
  link: 'http://corp.talentwise.com/'
 },
 {
  name: 'Hawaii Gas',
  description: '' +
    'This project was acquired by me as a surprise.  The requirements ' +
    'where that I build this site using Umbraco, a CMS I have never ' +
    'used, and it had to be delivered in a week!  Boy was I glad all ' +
    'programming languages have a lot in common.  With the guide of ' +
    'Google and word of advice from co-workers who have used umbraco, ' +
    'I was able to deliver this site on time.',
  thumbnailUrl: 'assets/projects/www-hawaiigas-com-200.png',
  link: 'http://www.hawaiigas.com/'
 },
 {
  name: 'Bank of Hawaii - Location Search',
  description: '' +
    'This project involved me using RedDot as an application generator. ' +
    'To save on cost, the CMS, RedDot had to be used, to keep a list of all ' +
    'Bank of Hawaii Branch offices and ATMs on the islands of Hawaii, which ' +
    'is pretty easy to setup on any regular CMS.' +
    'The only problem was that RedDot was build with the idea that direct ' +
    'query to the database is forbidden, so therefore RedDot is a mere ' +
    'html generator which spits out html files that are accessible to ' +
    'the web.  When I was introduced to the problem, the first thing I ' +
    'thought of was JavaScript.  What you see in this project is all ' +
    'JavaScript with no ties to a database directly as used.  I did not ' +
    'have much time to learn something like backbone.js so I built a ' +
    'simple MVC Javascript library that handles everything you see.',
  thumbnailUrl: 'assets/projects/www-boh-com-search-200.png',
  link: 'https://www.boh.com/apps/findus/locations/index.asp'
 },
 {
  name: 'Catholic Hawaii - Google Map',
  description: '' +
    'The Bank of Hawaii - Location Search project lead to the birth ' +
    'of my involvement with this project.  There was a need to search ' +
    'various parishes on parameters, something I have already tackled ' +
    'with the Bank of Hawaii - Location Search.  The only gist to this ' +
    'project was, there were more search scenarios with completely ' +
    'different parameters on each search parameters.  My code was not ' +
    'build for re-usability so I wrote a updated my JavaScript MVC Library ' +
    'to handle the project.  What you see in the project is a ' +
    'result of my work.',
  thumbnailUrl: 'assets/projects/www-catholichawaii-org-search-200.png',
  link: 'http://www.catholichawaii.org/search/parishes.aspx'
 },
 {
  name: 'Kenworth - Search',
  description: '' +
    'I got involved with the Kenworth project while I was building ' +
    'Bank of Hawaii - Location Search project.  It features the ' +
    'ability to search kenworth dealership locations all around the ' +
    'US utilizing Google Maps API.  The search map is tied to data ' +
    'provided a JSON feed.',
  thumbnailUrl: 'assets/projects/www-kenworth-com-search-200.png',
  link: 'http://www.kenworth.com/dealers'
 }
];
