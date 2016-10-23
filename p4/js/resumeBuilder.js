var bio = {
  "name": "Shane Oston Stowe",
  "role": "Not Your Typical Front End Developer",
  "contacts": {
    "mobile": "+44 (0)7498 108082",
    "email": "shane@shaneoston.com",
    "github": "shaneoston72",
    "location": "London"
  },
  "welcomeMessage": "Passionate, intelligent, and eager",
  "skills": [
    "Application Design", "Project management", "HTML", "CSS", "Ruby", "Rails", "JavaScript", "AngularJS", "Angular 2", "OOD", "TDD", "XP"
  ],
  "biopic": "images/shane.jpg",
  "display": function displayHeader() {
    var name = HTMLheaderName.replace("%data%", bio.name);
    var role = HTMLheaderRole.replace("%data%", bio.role);
    var image = HTMLbioPic.replace("%data%", bio.biopic);
    var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    $("#header").prepend(name, role);
    $("#header").append(displayTopContact(), image, welcome);
    $("#header").append(displaySkills());
    $("#footerContacts").append(displayContact());

    function displayTopContact() {
      $("#topContacts").append(displayContact());
    }

    function displayContact() {
      var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var email = HTMLemail.replace("%data%", bio.contacts.email);
      var github = HTMLgithub.replace("%data%", bio.contacts.github);
      var location = HTMLlocation.replace("%data%", bio.contacts.location);
      var contact = mobile + email + github + location;
      return contact;
    }

    function displaySkills() {
      $("#header").append(HTMLskillsStart);
      if (bio.skills.length > 0 ) {
        for (var skill in bio.skills) {
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
          $("#skills").append(formattedSkill);
        }
      }
    }
  }
};

var education = {
  "schools": [
    {
      "name": "Makers Academy",
      "location": "London, UK",
      "degree": "none",
      "majors": [
        "Full stack web development"
      ],
      "dates": "2016",
      "url": "http://makersacademy.com"

    },
    {
      "name": "Southern New Hampshire University",
      "location": "Manchester, NH",
      "degree": "Bachelor of Arts",
      "majors": [
        "Mathematics"
      ],
      "dates": "2016",
      "url": "http://snhu.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Developer Nanondegree",
      "school": "Udacity",
      "date": "2016",
      "url": "http://www.udacity.com"
    }
  ],
  "display": function() {
    if (education.schools.length > 0) {
      education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var name = HTMLschoolName.replace("%data%", school.name);
        var degree = HTMLschoolDegree.replace("%data%", school.degree);
        var dates = HTMLschoolDates.replace("%data%", school.dates);
        var location = HTMLschoolLocation.replace("%data%", school.location);
        var major = HTMLschoolMajor.replace("%data%", school.majors.join(" "));
        var schoolEntry = name + degree + location + dates + major ;

        $(".education-entry:last").append(schoolEntry);
      });
    }
    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      education.onlineCourses.forEach(function(course) {
        var title = HTMLonlineTitle.replace("%data%", course.title);
        var place = HTMLonlineSchool.replace("%data%", course.school);
        var date = HTMLonlineDates.replace("%data%", course.date);
        var url = HTMLonlineURL.replace("%data%", course.url);
        var onlineEntry = title + place + date + url;

        $("#online").after(onlineEntry);
      });
    }
  }
};

var work = {
  "jobs": [
    {
      "employer": "OctoClean",
      "title": "IT Manager",
      "location": "Riverside, California",
      "dates": "2006-2016",
      "description": "Headed development of 3 integrated, web­-based systems, leading to10X growth for this building maintenance franchisor."
    },
    {
      "employer": "The Oston Group",
      "title": "Principal/Consultant",
      "location": "San Francisco, California",
      "dates": "2001-2006",
      "description": "Implemented technology­ driven solutions to boost profit margins and productivity for a broad range of business clients."
    },
    {
      "employer": "eLoyalty",
      "title": "Senior Consultant",
      "location": "Chicago, Illinois",
      "dates": "2000-2001",
      "description": "Joined forces with team known for salvaging failed multi-million­ dollar enterprise CRM projects halted mid­stream."
    },
    {
      "employer": "Saba",
      "title": "Senior Technical Support Engineer",
      "location": "Redwood Shores, California",
      "dates": "1999-2000",
      "description": "Led internal technology implementations and development initiatives for a thriving management consulting firm."
    }
  ],
  "display": function() {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);

      var employer = HTMLworkEmployer.replace("%data%", job.employer);
      var title = HTMLworkTitle.replace("%data%", job.title);
      var dates = HTMLworkDates.replace("%data%", job.dates);
      var location = HTMLworkLocation.replace("%data%", job.location);
      var description = HTMLworkDescription.replace("%data%", job.description);
      var employerEntry = employer + title + dates + location + description;

      $(".work-entry:last").append(employerEntry);
    });
  }
};

var projects = {
  "projects": [
    {
      "title": "Leave - a smart London Transport alarm",
      "dates": "May 2016",
      "description": "An intelligent alarm for the London tube",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    },
    {
      "title": "Post A Goat - a sily text app",
      "dates": "April 2016",
      "description": "A silly app designed to learn APIs and AngularJS.",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    }
  ],
  "display": function() {
    if (projects.projects.length > 0) {
      projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var title        = HTMLprojectTitle.replace("%data%", project.title);
        var dates        = HTMLprojectDates.replace("%data%", project.dates);
        var description  = HTMLprojectDescription.replace("%data%", project.description);
        var projectEntry = title + dates + description;

        $(".project-entry:last").append(projectEntry);

        if (project.images.length > 0) {
          for(var i = 0; i < project.images.length; i++) {
            var image      = HTMLprojectImage.replace("%data%", project.images[i]);
            $(".project-entry:last").append(image);
          }
        }
      });
    }
  }
};



bio.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
work.display();
