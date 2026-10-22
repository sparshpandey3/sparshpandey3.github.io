// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-joined-sage-lab-as-an-undergraduate-researcher",
          title: 'Joined SAGE Lab as an undergraduate researcher!',
          description: "",
          section: "News",},{id: "news-started-my-honors-undergraduate-thesis-at-ucf",
          title: 'Started my Honors Undergraduate Thesis at UCF!',
          description: "",
          section: "News",},{id: "news-one-of-four-recipients-of-the-honors-undergraduate-thesis-scholarship-from-the-college-of-engineering-and-computer-science-in-fall-2025",
          title: 'One of four recipients of The Honors Undergraduate Thesis Scholarship from the College...',
          description: "",
          section: "News",},{id: "news-one-second-author-paper-automated-program-repair-for-ui-centric-android-bugs-how-far-are-we-was-accepted-to-issta-26",
          title: 'One second author paper “Automated Program Repair for UI-centric Android Bugs: How Far...',
          description: "",
          section: "News",},{id: "news-co-presented-automated-program-repair-for-ui-centric-android-bugs-how-far-are-we-at-issta-26",
          title: 'Co-presented “Automated Program Repair for UI-centric Android Bugs: How Far are We?” at...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%70%61%72%73%68.%70%61%6E%64%65%79@%75%63%66.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=CixszacAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sparsh-pandey-309183293", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0007-2882-0886", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
