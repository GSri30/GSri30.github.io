/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Harsha's Portfolio",
  description:
    "Moderately experienced full-stack developer and Competitive Programmer.",
  og: {
    title: "Sri Harsha Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "G Sri Harsha",
  logo_name: "SriHarsha",
  nickname: "GSri30",
  subTitle: "Full-Stack Developer.",
  // resumeLink: "",
  portfolio_repository: "https://github.com/GSri30/GSri30.github.io/tree/main",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/GSri30",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sri-harsha-g-15534a18a",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC-9s6ToxAoSufsoIHXWqzAQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Quora",
    link: "https://www.quora.com/profile/Sri-Harsha-G-2",
    fontAwesomeIcon: "fa-quora", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/SriHarshaG6",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100006387729055",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_gsri30_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating application backend in Node, Express & Django",
        "⚡ Building responsive website front end using React",
        "⚡ Developing basic mobile applications using Flutter",
      ],
      softwareSkills: [
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Experience working with multiple databases",
        // "⚡ Deploying deep learning models on cloud to use on mobile devices",
        // "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Experience working on multiple designing platforms",
        "⚡ Customizing logo designs and magazine designs from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        // {
        //   skillName: "Adobe XD",
        //   fontAwesomeClassname: "simple-icons:adobexd",
        //   style: {
        //     color: "#FF2BC2",
        //   },
        // },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#000000",
          },
        },
        // {
        //   skillName: "Inkscape",
        //   fontAwesomeClassname: "simple-icons:inkscape",
        //   style: {
        //     color: "#000000",
        //   },
        // },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/GSri30",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/gsri30",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/GSri30",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@GSri30",
    },
    // {
    //   siteName: "Devfolio",
    //   iconifyClassname: "simple-icons:devfolio",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "",
    // },
    // {
    //   siteName: "Prepbytes",
    //   iconifyClassname: "simple-icons:prepbytes",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "",
    // },
    {
      siteName: "Devpost",
      iconifyClassname: "simple-icons:devpost",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://devpost.com/GSri30",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/gsri30",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "International Institute of Information Technology Bangalore",
      subtitle: "IMTech in Computer Engineering",
      logo_path: "iiitb_logo-bg.png",
      alt_name: "IIITB",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms.",
        // , DBMS, OS, CA, AI etc.",
        // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Part of Zense - programming club of IIITB.",
        "⚡ Part of two committees, which include TEDxIIITB and 8BIT-magazine committee.",
      ],
      website_link: "https://iiitb.ac.in",
    },
    {
      title: "Nano Junior College, Hyderabad",
      subtitle: "Senior High School",
      logo_path: "nano_logo-bg.png",
      alt_name: "Nano",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ I studied basic Math, Physics and Chemistry.",
        "⚡ Secured 97% in boards.",
      ],
      website_link: "https://nanoeducation.co.in/",
    },
    {
      title: "Kendriya Vidyalaya, Hyderabad",
      subtitle: "School",
      logo_path: "kv_logo-bg.png",
      alt_name: "KV",
      duration: "2007 - 2017",
      descriptions: [
        "⚡ I did my primary and secondary schooling here.",
        "⚡ Secured 10 CGPA.",
      ],
      website_link: "https://no1uppal.kvs.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Clubs, Internship and Volunteership",
  description:
    "I am part of many clubs as well as also worked with many projects as a Developer, Designer and Software Architect, involving various tech-stacks. I love organizing events and that is why I am also involved with many volunteering many activities and communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Clubs",
      experiences: [
        {
          title: "Developer",
          company: "Zense-IIITB",
          company_url: "https://zense.co.in/",
          logo_path: "zense.jpeg",
          duration: "Jan 2020 - PRESENT",
          location: "Bangalore, Karnataka",
          description:
            "I have worked and contributed to various projects as part of this club. The projects involve various automation for process improvements and for significantly enhancing the traditional methods. Our goal is to organize events and promote open source culture at IIITB. I am currently working on an app called 'Dispatch' - Courier Management for our college, which includes a Web UI for security and a Mobile app for students to manage all their couriers and corresponding notifications from anywhere.",
          color: "#0879bf",
        },
        {
          title: "Designer",
          company: "TEDxIIITBangalore",
          company_url: "https://www.linkedin.com/company/tedxiiitbangalore/",
          logo_path: "tedx.jpeg",
          duration: "May 2021 - PRESENT",
          location: "Bangalore, Karnataka",
          description:
            "I work as a designer which include designing various posts for marketing purposes, designing posters and social media stories for various TEDxIIITB events as well as for the main TED talk. For this we use various tools including Adobe Illustrator, Figma, Canva and many other online tools depending upon the requirements.",
          color: "#9b1578",
        },
        {
          title: "Designer",
          company: "8BIT-IIITB",
          company_url: "https://www.instagram.com/8bit_iiitb/?hl=en",
          logo_path: "8bit.jpeg",
          duration: "Sep 2020 - PRESENT",
          location: "Bangalore, Karnataka",
          description:
            "I work as a designer which mainly includes designing our college magazine half-yearly editions and also other posters for marketing purposes. I also give technical support to the software requirements that persists.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "BackEnd Developer",
          company: "E-Health Research Center (EHRC)",
          company_url:
            "https://www.linkedin.com/company/e-health-research-center-ehrc/",
          logo_path: "ehrc.png",
          duration: "May 2021 - Jul 2021",
          location: "Virtual",
          description:
            "I have worked on project of establishing a telecommunication between a doctor and a patient. The project was a plugin to the main app, 'KSHEMA' which is already in its beta testing stage. My part involved implementing a signalling server which is a central point to establish P2P WebRTC connections. I have closely worked with socket programming, node server-side programming and also the core webRTC P2P connection and integrating it with an angular frontend.",
          color: "#ee3c26",
        },
        {
          title: "Content Creator/Developer",
          company: "FOSSEE IITBombay",
          company_url: "https://fossee.in/",
          logo_path: "fossee.jpeg",
          duration: "Apr 2020 - Jul 2020",
          location: "Work From Home",
          description:
            "We were given tasks to curate notes on complex math topics and finally explain the same concepts using some simulations and animations. For these, we used an open source software called 'Manim'. It was a python package using which we rendered and put up our understanding in form of animations. We have also used some other open source tools and packages such as numpy and matplotlib to visualize the complex data and patters involved.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "I-Stem Volunteer",
          company: "I-STEM",
          company_url: "https://www.inclusivestem.org/",
          logo_path: "istem.png",
          duration: "Jan 2020",
          location: "Bangalore, Karnataka",
          description:
            "I was a volunteer for I-STEM 2020 hackathon, which was specially focued for physically handicapped people in the coding community.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create WebDev or AppDev projects and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "blogs_image.svg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Django, Node JS, SQL, Firebase, basic React, Flutter, Cloud and Opensource Development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://ashutoshhathidara.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "Bharat Nagar Colony, Uppal, Hyderabad, Telangana - 500039",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/nqXrFXXsUGPRsLik8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7207895340",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
