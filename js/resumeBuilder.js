var bio = {
	"name": "Swati Kamtar",
	"role": "Web Developer",
	"contacts": {
		"mobile": "+1 (234) 534-5063",
		"email": "email@email.com",
		"twitter": "@skamtar",
		"github": "swatilk",
		"location": "Dublin, California",
		"linkedin": "Swati Kamtar"
	},
	"welcomeMessage": "Hi, I am Swati. I am enthusiastic about developing websites, always seeking opportunities to learn new things about the web and implement them. I also have a hand in designing using Photoshop and animating using Flash. You can have a look at my projects on github.",
	"skills": [
	"HTML", "CSS", "Javascript", "AngularJS", "NodeJS", "Dreamweaver", "Photoshop", "Flash"
	]
}

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
	/*var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);*/
	var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header:last").append(formattedMsg);

	$("#topContacts:last").append(HTMLcontactGeneric);
	$("#topContacts:last").append(formattedMobile);
	$("#topContacts:last").append(formattedemail);
	/*$("#topContacts:last").append(formattedtwitter);*/
	$("#topContacts:last").append(formattedLinkedIn);
	$("#topContacts:last").append(formattedgithub);
	$("#topContacts:last").append(formattedLocation);
}
bio.display();

/*navigation menu */
var formattedNavWork = HTMLnavwork.replace("%data%","Work");
var formattedNavSkills = HTMLnavSkills.replace("%data%","Skills");
var formattedNavProjects = HTMLnavProjects.replace("%data%","Projects");
var formattedNavEducation = HTMLnavEducation.replace("%data%","Education");
var formattedNavMap = HTMLnavMap.replace("%data%","Locations");
var formattedNavContact = HTMLnavContact.replace("%data%","Contact");
var formattedNavProfile = HTMLnavProfile.replace("%data%","Profile");

$(".nav-list:last").append(formattedNavProfile);
$(".nav-list:last").append(formattedNavContact);
$(".nav-list:last").append(formattedNavWork);
$(".nav-list:last").append(formattedNavSkills);
$(".nav-list:last").append(formattedNavProjects);
$(".nav-list:last").append(formattedNavEducation);
$(".nav-list:last").append(formattedNavMap);

/*drop down navigation menu*/

var formattedDropWork = HTMLdropWork.replace("%data%","Work");
var formattedDropSkills = HTMLdropSkills.replace("%data%","Skills");
var formattedDropProjects = HTMLdropProjects.replace("%data%","Projects");
var formattedDropEducation = HTMLdropEducation.replace("%data%","Education");
var formattedDropMap = HTMLdropLocation.replace("%data%","Locations");
var formattedDropContact = HTMLdropContact.replace("%data%","Contact");
var formattedDropProfile = HTMLdropProfile.replace("%data%","Profile");

$(".dropdown-menu:last").append(formattedDropProfile);
$(".dropdown-menu:last").append(formattedDropContact);
$(".dropdown-menu:last").append(formattedDropWork);
$(".dropdown-menu:last").append(formattedDropSkills);
$(".dropdown-menu:last").append(formattedDropProjects);
$(".dropdown-menu:last").append(formattedDropEducation);
$(".dropdown-menu:last").append(formattedDropMap);

/*work object */
var work = {
	"jobs" : [
		{
			"employer": "Symphony Teleca (now 'Harman Connected Services')",
			"title": "Associate Engineer",
			"location": "Bengaluru, India",
			"dates": "2012 - 2013",
			"description": [ 
					{
						"details": "Developed a user interface using angular.js and HTML5 for a web application which analyses the point of sales data to develop a report.",
						"technology": [
							"HTML5", "AngularJS"
						]
					},
					{
						"details": "Tested SOAP services for the basic functioning. The tests were done to check if all the services of a company application were being called correctly and performing the tasks they are meant to do. The parameters required for each service was passed in the testing software and ran to see the result.",
						"technology": [
							"HP service test"
						]
					}
			]
		}
		/*{
			"employer": "Tech Mahindra",
			"title": "Junior Engineer",
			"location": "Bengaluru, India",
			"dates": "2009 - 2010",
			"description": "Service tested an application that predicts the sales based on the past sales data using HP Service Test tool"
		}*/
	]
}

work.display = function(){
	if (work.jobs.length > 0){
		for (job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			if (work.jobs[job].description.length > 0){
				for(desc in work.jobs[job].description){
					var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[desc].details);
					$(".work-entry:last").append(formattedDescription + HTMLprojectTechStart);
					if (work.jobs[job].description[desc].technology.length > 0){
						for(workTech in work.jobs[job].description[desc].technology){
							$(".project-tech:last").append(HTMLprojectTechnology.replace("%data%", work.jobs[job].description[desc].technology[workTech]));
						}
					}
					/*$(".project-tech:last").append(formattedWorkTech);*/
				}
			}
			$(".work-entry:last").prepend(formattedWorkTitle.concat(formattedWorkEmployer + formattedLocation));
			$(".work-entry:last").prepend(formattedDates);
			
		}
	}
	$("#skills").prepend(HTMLskillsStart);
}
work.display();

var projects = {
	"projects" : [
		{
			"title": "Static Website Design - \'Be There Cook That\'",
			"dates": "2015",
			"description": "This projects includes a static website designed using Adobe Dreamweaver and Photoshop to manipulate images where needed. The website includes several pages and all of them linked appropriately. This is not responsive yet. This was developed as part of Ohlone college course.",
			"technology":[
				"HTML5", "CSS", "Javascript"
			],
			"software": "Dreamweaver",
			"images": [
				"images/website-screenshot.png"
			]
		},
		{
			"title": "Mobile Application - \'Bargain Hunter\'",
			"dates": "2015",
			"description": "A basic mobile app was developed with jQuery mobile to fully utilize the features of a mobile device. This was a beginner project which includes just two pages of the app. Not all the envisioned features were implemented in this project.",
			"technology": [
				"HTML5", "Javascript", "jQuery Mobile"
			],
			"software":"NetBeans",
			"images": [
				"images/mobile-app-screenshot.jpg"
			]
		}
	]
}

projects.display = function (){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		if (projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images)
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		}	
	
		if(projects.projects[project].technology.length > 0){
			$(".project-entry:last").append(HTMLprojectTechStart);
			for(tech in projects.projects[project].technology){
				var formattedProjectTechnology = HTMLprojectTechnology.replace("%data%", projects.projects[project].technology[tech]);
				$(".project-tech:last").append(formattedProjectTechnology);
			}
		}
		var formattedProjectSoftware = HTMLprojectSoftware.replace("%data%",projects.projects[project].software);
		$(".project-entry:last").append(formattedProjectSoftware + formattedProjectImage);	
		$(".project-entry:last").prepend(formattedProjectTitle + formattedProjectDates + formattedProjectDescription);
	}
}
projects.display();
/*education object*/
var education = {
	"schools": [
		{
			"name": "Ohlone College",
			"location": "Fremont, California",
			"degree": "Web Design",
			"majors": ["Javascript", "HTML", "CSS", "Photoshop", "Flash", "Dreamweaver"],
			"dates": 2015,
			"url": "www.ohlone.edu"
		},
		{
			"name": "PES College of Engineering",
			"location": "Mandya, India",
			"degree": "Master of Technology",
			"majors": ["Computer Science", "Software Engineering", "Web Development"],
			"dates": 2012,
			"url": "www.pesce.org"
		},
		{
			"name": "PES College of Engineering",
			"location": "Mandya, India",
			"degree": "Bachelor of Engineering",
			"majors": ["Computer Science", "C Programming", "C++ Programming"],
			"dates": 2010,
			"url": "www.pesce.org"
		}
	],

	"onlineCourse": [
		{
			"title": "Front End Developer Nano Degree (in progress)",
			"school": "Udacity",
			"dates": 2016,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},

		{
			"title": "Mobile Application Development",
			"school": "Ohlone College",
			"dates": 2015,
			"url": "http://www.ohlone.edu/instr/multimedia/courses.html"
		},

		{
			"title": "Shaping up with Angular.js",
			"school": "Code School",
			"dates": 2014,
			"url": "https://www.codeschool.com/courses/shaping-up-with-angular-js"
		}
		
	]
}
/*filling the data for education div and appending them to the appropriate div*/
education.display = function(){
	if(education.schools.length > 0){
		for (school in education.schools){
			$("#education:last").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedSchoolName + formattedDegree + formattedSchoolDates + formattedSchoolMajor);
		}
	}
	if(education.onlineCourse.length > 0){
		$("#education:last").append(HTMLonlineClasses);
		for(online in education.onlineCourse){
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[online].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[online].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourse[online].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourse[online].url);
			/*var formattedLinkOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourse[online].url);*/
			$("#education:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
		}
	}
}
education.display();

/*Internationalizing the name and displaying it on the console*/
function inName(fullName){
	var names = fullName.split(" ");
	firstName = names[0].toLowerCase();
	firstName = (firstName.charAt(0).toUpperCase()).concat(firstName.slice(1));
	
	lastName = names[1].toUpperCase();
	console.log(firstName + " " + lastName);
}
inName("swati Kamtar");

/*google map*/
$("#map-div").append(mapHeader);
$("#map-div:last").append(googleMap);

/*interest object*/
var interests = ["Cooking and Trying out new recipes", "Music", "Travelling"];
$("#interests:last").append(HTMLinterestStart);

for(interest in interests){
	$(".interest-list:last").append(HTMLinterests.replace("%data%", interests[interest]));
}

/*skills chart data*/
	var barChartData = {
			labels : [bio.skills[0],bio.skills[1],bio.skills[2],bio.skills[3],bio.skills[4], bio.skills[5],bio.skills[6], bio.skills[7]],
			datasets : [
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,0.8)",
					highlightFill: "rgba(151,187,205,0.75)",
					highlightStroke: "rgba(151,187,205,1)",
					data : [21,21,13,8,9,18,14,16]
				}
			]
		}

/* skills chart */
var ctx = document.getElementById("skillsCanvas").getContext("2d");
window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true,
			showScale: true,
			scaleShowLabels: true,
			segmentStrokeColor : "#337ab7",
			tooltipFontFamily: "'PT Sans', 'sans-serif'",
			scaleFontFamily:  "'PT Sans', 'sans-serif'",
			scaleFontSize: 16,
			tooltipFontSize: 16
		});
myBar.datasets[0].bars[0].fillColor = "#f7464a";
myBar.datasets[0].bars[1].fillColor = "#46bfbd";
myBar.datasets[0].bars[2].fillColor = "#fdb45c";
myBar.datasets[0].bars[3].fillColor = "#7d85cc";
myBar.datasets[0].bars[4].fillColor = "#4d5360";
myBar.datasets[0].bars[5].fillColor = "#cc6bab";
myBar.datasets[0].bars[6].fillColor = "#949fb1";
myBar.datasets[0].bars[7].fillColor = "#226599";
myBar.update();








