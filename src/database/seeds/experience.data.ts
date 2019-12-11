export const experienceData = [
  {
    title: 'Senior Software Engineer',
    company: 'Imagine Learning',
    location: 'Provo, UT',
    start: 'Nov 2014',
    end: 'Nov 2019',
    descriptions: [
      `Lead & Mentored a team of five in developing
        Imagine Math Educator Dashboard, separating
        front-end from monolith ruby app into Angular
        8 with at least 80% code coverage in unit tests
        and e2e test.`,
      `Built Imagine Language & Literacy Educator Dashboards
        in AngularJS & Angular which involved hundreds
        of modules, components, services, directives, unit
        and e2e tests.`,
      `One year worth of C# work building SSO initial setup
        for School Information Systems.`,
      `Worked in a Scrum environment with constant collaboration
        with Product Owner and Project Manager coupled with
        numerous cross team collaborations`,
    ],
  },
  {
    title: 'Web Developer',
    company: 'ALTRES',
    location: 'Honolulu, HI',
    start: 'Apr 2014',
    end: 'Oct 2014',
    descriptions: [
      `Built an in-house Potential Recruiting Application written
        in JavaScript jQuery Widgets, Backbone.js, Mustache, Java
        Maven and Tomcat with MariaDB.`,
      `Improved application memory leaks by introducing the use
        of Handlebars.`,
      `Worked as part of a team of 4 using scrum.`,
    ],
  },
  {
    title: 'Senior Developer',
    company: 'Tapterra',
    location: 'Honolulu, HI',
    start: 'Jun 2013',
    end: 'Apr 2014',
    descriptions: [
      `Built several customization for Umbraco 7 utilizing C#
          and AngularJS.`,
      `Worked on HMSA.COM (MVC 4 .Net) focus on responsive
          design, CSS3 and HTML5`,
    ],
  },
  {
    title: 'Web Developer',
    company: 'First Insurance Company of Hawaii',
    location: 'Honolulu, HI',
    start: 'Nov 2012',
    end: 'Jun 2013',
    descriptions: [
      `Customized Umbraco 7 which utilizes C# .Net MVC
          and AngularJS.`,
      `Built custom Umbraco plugins in angularJS`,
      `Worked on HMSA.COM (MVC 4 .Net) focus on
          responsive design, CSS3 and HTML5`,
    ],
  },
  {
    title: 'Senior Developer',
    company: 'Anthology Marketing Group',
    location: 'Honolulu, HI',
    start: 'Feb 2012',
    end: 'Nov 2012',
    descriptions: [
      `Built | Maintain | Troubleshoot several Window and
          Linux Servers from the ground up`,
      `Wrote customizations to enhance classic CMS (RedDot)
          ability`,
      `Lead Programmer for several of the agency’s largest
          clients such as Bank of Hawaii, Marriott, Talentwise,
          Farmers Insurance, WaikikiParc.`,
      `Built several projects from ground up utilizing Umbraco
          (.NET, C#), Drupal (PHP) and RedDot (Classic ASP and
          RedDot coding)`,
      `Custom built several CMS with custom Google Maps
          integrations`,
    ],
  },

  {
    title: 'Developer',
    company: 'Anthology Marketing Group',
    location: 'Honolulu, HI',
    start: 'Nov 2010',
    end: 'Feb 2012',
    descriptions: [
      `Performed server migration from FreeBSD to RedHat`,
      `Built | Configured backup solution for company client projects`,
      `Built front-end web interfaces utilizing RedDot and Drupal.`,
      `Did many Drupal custom development (module, theming), maintenance`,
    ],
  },

  {
    title: 'Systems Administrator',
    company: 'Brigham Young University Hawaii - Career & Alumni Services',
    location: 'Laie, HI',
    start: 'Mar 2010',
    end: 'Nov 2010',
    descriptions: [
      `Coordinated integration of Symplicity CSM with PeopleSoft with
          in house PeopleSoft`,
    ],
  },

  {
    title: 'Developer | IT Consultant',
    company: 'Learning Hale',
    location: 'Honolulu, HI',
    start: 'Sep 2009',
    end: 'Dec 2011',
    descriptions: [
      `Systems Administrator Lead programmer for Human
          Resource System`,
      `Automated computer imaging process for customers`,
      `Integrated custom PHP System with WordPress customers
          (LearningHale.com)`,
    ],
  },
].map(e => {
  return {
    title: e.title,
    company: e.company,
    location: e.location,
    start: e.start,
    end: e.end,
    description: e.descriptions.join(','),
    isPublished: true
  };
});
