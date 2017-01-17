var bio = {
  "name" : "Hasan Khalid",
  "age" : 22,
  "role" : "Front end Web Developer",
  "contacts" : {
    "mobile" : "92-335-4204403",
    "email" : "hasankhalid940@gmail.com",
    "github" : "hasankhalid",
    "twitter" : "@hasankhalid94",
    "location" : "Lahore"
  },
  "welcomeMessage" : "I am one lazy bum",
  "skills" : ["Awesomeness", "Music Production" , "Web Devlopment", "Audio Engineering", "Saving the universe"],
  "biopic" : "images/fry.jpg"
};

var work = {
  "jobs" : [{
    "employer" : "Punjab Information Technology Board",
    "title" : "PHP Development intern",
    "location" : "Arfa Karim Tower Lahore",
    "dates" : "18 June 2016 - 24 July 2016",
    "description" : "Worked as a development intern with the PHP team at PITB, was responsible for website design and application for various government tenders"
  },
  {
    "employer" : "The Citizens Foundation",
    "title" : "Teacher",
    "location" : "Institute of Business Administration Karachi",
    "dates" : "January 2015 - June 2015",
    "description" : "Volunteered as a teacher in the TCF ADP program to train children from TCF schools for entry tests of IBA, LUMS and Habib University"
  }
]
};

var projects = {
  "projects" : [{
    "title" : "The Leap Motion Controller Instrument",
    "dates" : "25th Sept 2016 - Present ",
    "description" : "An ambient drone musical instrument that will be played by inputting MIDI infromation through the leap motion controller. The end user will be able to play the instrument through the movement of his hands. The interface will generate dynamic visuals the intensity of which will be correlated to the energy of the sound being played. The project is my Final Year Project at IBA, the idea is inspired by a similar project implemented by Boolanger Labs.",
    "images" : ["images/Leap.png", "images/Leap2.png"]
  },
  {
    "title" : "On the narratives of education (Research Paper)",
    "dates" : "1 Feb 2016 - 4 June 2016",
    "description" : "A research paper written for the Introduction to Social and Cultural Anthroplogy course to trace the narratives on the educated man through the course of human history",
    "images" : ["Education.png"]
  },
  {
    "title" : "Movements for Self determination today: Problems, Prospects (Research Paper)",
    "dates" : "1 Feb 2016 - 4 June 2016",
    "description" : "A research paper written for the Major Themes in World History course exploring the challanges created by self determination movements today. The movement in question was the 1971 struggle for independence by Bangladesh",
    "images" : ["Self.png"]
  }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "Lahore Grammer School",
      "location" : "Lahore",
      "degree" : "A Levels",
      "majors" : ["Chemistry", "Physics", "Mathematics", "Sociology"],
      "dates" : "August 2011 to June 2013",
      "url" : "https://www.lgsjt.com/"
    },
    {
      "name" : "Institute of Business Administration",
      "location" : "Karachi",
      "degree" : "BS",
      "majors" : ["Computer Science"],
      "dates" : "August 2013 to June 2017",
      "url" : "https://iba.edu.pk/"
    }
  ],
  "onlineCourses" : [
    {
      "school" : "Udacity",
      "title" : "Front end Web Developer NanoDegree",
      "dates" : "February 2016 to November 2016",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "school" : "Coursera",
      "title" : "Introduction to Music production",
      "dates" : "February 2014 to March 2014",
      "url" : "https://www.coursera.org/learn/music-production/home/info"
    }
  ]
};

projects.display = function() {
  projects.projects.forEach(function(project){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDate = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedDate);
    var formattedDesc = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedDesc);

    if (project.images.length>0){
      project.images.forEach(function(image){
        var formattedImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedImage);
      });
    }
  });
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts,#footerContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts, #footerContacts").append(formattedEmail);
  var formattedGHub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts, #footerContacts").append(formattedGHub);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts, #footerContacts").append(formattedTwitter);
  var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts, #footerContacts").append(formattedLoc);

  var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedImage);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);

  $("#header").append(HTMLskillsStart);

  bio.skills.forEach(function(skill){
    var formattedSkills = HTMLskills.replace("%data%",skill);
    $("#skills").append(formattedSkills);
  });
};

work.display = function() {
  work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmp = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmpTitle = formattedEmp + formattedTitle;
    $(".work-entry:last").append(formattedEmpTitle);
    var formattedDate = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDate);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDesc = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDesc);

  });
};

education.display = function(){
  education.schools.forEach(function(school){
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", school.name);
    $(".education-entry:last").append(formattedName);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    $(".education-entry:last").append(formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLoc = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formattedLoc);
    $("a[href='#']").attr('href', school.url);

    school.majors.forEach(function(major){
      var formattedMajor = HTMLschoolMajor.replace("%data%", major);
      $(".education-entry:last").append(formattedMajor);
    });
  });

  $(".education-entry:last").append(HTMLonlineClasses);

  education.onlineCourses.forEach(function(course){
    var formattedName = HTMLonlineTitle.replace("%data%", course.title);
    $(".education-entry:last").append(formattedName);
    var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
    $(".education-entry:last").append(formattedDates);
    var formattedURL = HTMLonlineURL.replace("%data%", course.url);
    $(".education-entry:last").append(formattedURL);

  });
};

bio.display();
projects.display();
education.display();
work.display();

$(document).click(function(loc) {
  logClicks(event.pageX , event.pageY);
  // your code goes here!
});
invokeMap = function(){
    $("#mapDiv").append(googleMap);
};
invokeMap();
