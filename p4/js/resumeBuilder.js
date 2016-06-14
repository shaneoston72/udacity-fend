var bio = {
  "name": "Shane Oston Stowe",
  "role": "Junior Front End Developer",
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
      for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        if(education.schools.hasOwnProperty(school)) {
          var name = HTMLschoolName.replace("%data%", education.schools[school].name);
          var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
          var dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
          var location = HTMLschoolLocation.replace("%data%", education.schools[school].location);
          var major = HTMLschoolMajor.replace("%data%", education.schools[school].majors.join(" "));
          var schoolEntry = name + degree + location + dates + major ;

          $(".education-entry:last").append(schoolEntry);
        }
      }
    }
    if (education.onlineCourses.length > 0) {
      for (var course in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        if(education.onlineCourses.hasOwnProperty(course)) {
          var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
          var place = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
          var date = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
          var url = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
          var onlineEntry = title + place + date + url;

          $("#online").after(onlineEntry);
        }
      }
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
    for (var job in work.jobs) {
      if (work.jobs.hasOwnProperty(job)) {
        $("#workExperience").append(HTMLworkStart);

        var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var location = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var employerEntry = employer + title + dates + location + description;

        $(".work-entry:last").append(employerEntry);
      }
    }
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
      for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        if(projects.projects.hasOwnProperty(project)) {
          var title        = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
          var dates        = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
          var description  = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
          var projectEntry = title + dates + description;

          $(".project-entry:last").append(projectEntry);

          if (projects.projects[project].images.length > 0) {
            for(var image in projects.projects[project].images) {
              var image      = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
              $(".project-entry:last").append(image);
            }
          }
        }
      }
    }
  }
};


// functions
function displayContact() {
  var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var email = HTMLemail.replace("%data%", bio.contacts.email);
  var github = HTMLgithub.replace("%data%", bio.contacts.github);
  var location = HTMLlocation.replace("%data%", bio.contacts.location);
  var contact = mobile + email + github + location;
  return contact;
}

function displayTopContact() {
  $("#topContacts").append(displayContact());
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

bio.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
$("#footerContacts").append(displayContact());
work.display();
