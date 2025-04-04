var element = document.getElementById("officerAboutContainer");

const officerInfo25 = {
    "officers": [
        {
            "title": "Co-Presidents",
            "about": "Be a joint-leader of the club, contact others to plan service events, run club meetings, work with other service club presidents, make sure my fellow board members are staying on task, and delegate responsibilities.",
            "officers": [
                {
                    "name": "Tucker Henry",
                    "about": "Nothing for now..."
                },
                {
                    "name": "Brody Whiteside",
                    "about": "Hi! :3"
                }
            ]
        },
        {
            "title": "VP of Service",
            "about": "Organizes service opportunities and a lot more!",
            "officers": [
                {
                    "name": "Ava Masi",
                    "about": "Hiii!"
                }
            ]
        },
        {
            "title": "VP of Social",
            "about": "VP of Social is responsible for any and all social events! This entails planning, and executing our amazing events like; inductions, tapping, and senior celebration. VP of Social also helps support other board members in planning events. Organization, leadership, and communication are KEY aspects of this position.",
            "officers": [
                {
                    "name": "Savannah Walker",
                    "about": "Hello!! My name is Savannah Walker and I am your 24-25 VP Social!!! A little key history about me, I joined my sophomore year and served as Sergeant-At-Arms and HKNA Committee Chair last year. I am so excited to spend my senior year creating the best social events possible and help grow our club! Other than Key I spend my time in theater working on and off stage, reading, listening to music, spending too much time building Legos, and ranting about Chipotle!"
                }
            ]
        },
        {
            "title": "Secretary",
            "about": "Maintain, make, and update point log; take meeting minutes during board/general club meetings; submit OIF forms; and submit monthly club service hours to Keymmunity.",
            "officers": [
                {
                    "name": "Jocelyne Lioe",
                    "about": "Service hours? Many! Point log? Updated!! Hotel? Trivago!!! business business business. 🤝 business? S P R E A D S H E E T . . . SECRETARY!!!! wahoo!!"
                }
            ]
        },
        {
            "title": "Treasurer",
            "about": "The treasurer is in charge of collecting dues, money for t- shirts, and even organizing fundraising opportunities. The treasurer will be maintaining the clubs financial records as well as working hand the club's secretary to keep track of who has paid dues or not.",
            "officers": [
                {
                    "name": "Lily Cuddy",
                    "about": "My name is Lily Cuddy and I am your new treasurer! This is my second year on the board and I cannot wait to continue the great work that we did last school year. Outside of Key you can find me playing soccer, running track or even in the corner of room reading. I cannot wait to work as the treasurer of our school as I believe it will allow me to make a greater impact on this club than I have in previous years by organizing service fundraisers and even club fundraisers as well as making sure we get our dues in early."
                }
            ]
        },
        {
            "title": "Sergeant-At-Arms",
            "about": "To regulate the membership status of all members, have open and smooth communication with everyone, and keep track of everybody's contact information.",
            "officers": [
                {
                    "name": "Maya Daly",
                    "about": "I love talking to people, minions, bananas, Bridgerton book 3, and all things music. I'm ecstatic to be on the board of a club which has done so much for me. Find me or give me a text so we can become the bestest of friends! （ ´∀｀）"
                }
            ]
        },
        {
            "title": "Historian",
            "about": "Managing key social media, creating and maintaining a scrapbook, keeping record of important key events, promoting Key Club, providing up to date information about events, and taking pictures at events.",
            "officers": [
                {
                    "name": "Joy Santiago",
                    "about": "Feel free to send me any pictures you want posted! Looking forward to helping key grow :D"
                }
            ]
        },
        {
            "title": "Webmaster",
            "about": "Manages the SPHS Key Club website, Google Calendar, linktr.ee, and creates Google Forms for the club.",
            "officers": [
                {
                    "name": "Zachary Ratkiewicz",
                    "about": "Hiii!!! I'm so excited to be SPHS' Key Club's webmaster for the 2024-25 school year! Thanks for checking out my website :3"
                }
            ]
        },
        {
            "title": "Editor",
            "about": "Creating and sending out the weekly newsletter, making graphics/posters for events, and contacting St. Pete Kiwanis members.",
            "officers": [
                {
                    "name": "Anna Wei",
                    "about": "Very pleased to be here to help everyone stay in the know about point opps and new fun events :) Lets Keyp it hype!!"
                }
            ]
        },
        {
            "title": "Homeless Meals Chairs",
            "about": "Organize our Friday homeless meal events and make sure we have people+supplies, as well as delivering it all to the homeless shelter!",
            "officers": [
                {
                    "name": "Sage Summers (Lead)",
                    "about": "Excited to be your Homeless Meals Chair for the 2024-25 year!! Feel free to reach out with any questions"
                },
                {
                    "name": "Sally Rozelle (Mini)",
                    "about": "If you have any Homeless Meals related questions, please don't hesitate to contact me or Sage!"
                }
            ]
        },
        {
            "title": "Blood Drive<br>Committee",
            "about": "Organize and run the blood drives (through Oneblood) for SPHS.",
            "officers": [
                {
                    "name": "Anna Hewett",
                    "about": "Hey I'm Anna and I've been in Key since my sophomore year. I'm also heavily involved in Environmental Club and SHH at the school. In my free time, I like to go on long runs and sew. I'm so excited to be your blood drive chair for the 2024/2025 school year!"
                }
            ]
        },
        {
            "title": "Adopt-A-Block<br>Committee",
            "about": "Facilitate meetings and service opportunities with the Adopt-A-Block foundation for SPHS Key Club. Adopt-A-Block is a food pantry that we assist with the Clearview United Methodist Church. Through the pantry, we provide food to locals who don't have access to a grocery store within a mile to 5 mile radius. The bulk of the work is preparing food boxes and then giving them out to those in need (to their car or other mode of transportation). As of recently we've also been working with the church to do yard clean-ups. So, if you're 17 years old or older, every other month that you do Adopt-A-Block you'll either end up with Tylea Calhoun or Isabella Angulo mowing lawns!",
            "officers": [
                {
                    "name": "Isabella Angulo",
                    "about": "Adopt-A-Block is so fun and everyone should do it!"
                },
                {
                    "name": "Tylea Calhoun",
                    "about": "Hello Keyple 🔑🔑 Let's get this year going and volunteering rolling!!"
                }
            ]
        },
        {
            "title": "Creative<br>Committee",
            "about": "Creative Committee Chair is involved with pretty much all creative aspects and branding of the club (e.g., creating the club T-shirts and some DCON awards). The position plays a major role in the inductions ceremony, <a aria-label='Go to our Goldfever page' href='https://www.sphskeyclub.org/About/Social-Events#GOLDFEVER'>Goldfever</a>, and ensuring events are put together/arranged nicely.",
            "officers": [
                {
                    "name": "Alison Ashley",
                    "about": "Some things about me are that I'm on swim team, I'm also in SPHS' marching and jazz band! I love cats, Ryan Gosling, and Ghibli movies!! I'm really into old rock/jazz music and pop culture from the 1940s-60s, so that's a huge influence on my art style and general things I like!"
                }
            ]
        }
    ]
};

element.onclick = function() {
    document.getElementById("officerAboutContainer").style.display = "none";
    document.getElementById("officerAboutInfoContainer").style.display = "none";

    document.getElementById(`infoOfficers`).style.display = "none";
}

//
//
//

function getInfo(num, web) {
    document.getElementById("officerAboutContainer").style.display = "block";
    document.getElementById("officerAboutInfoContainer").style.display = "block";

    let data = getOfficerInfo(num);

    if (web) {
        document.getElementById("officerTitleWeb").innerHTML = data.title;
        document.getElementById("officerAboutWeb").innerHTML = data.about;
        let i = 0;
        for (i=0; i < data.officers.length; i++) {
            document.getElementById(`officer${i}NameWeb`).innerHTML = data.officers[i].name;
            document.getElementById(`officer${i}AboutWeb`).innerHTML = data.officers[i].about;
        }
        if (i==1) {
            document.getElementById(`officer1NameWeb`).style.display = "none";
            document.getElementById(`officer1AboutWeb`).style.display = "none";
        } else {
            document.getElementById(`officer1NameWeb`).style.display = "block";
            document.getElementById(`officer1AboutWeb`).style.display = "block";
        }
    } else {
        document.getElementById("officerTitleMobile").innerHTML = data.title;
        document.getElementById("officerAboutMobile").innerHTML = data.about;
        let i = 0;
        for (i=0; i < data.officers.length; i++) {
            document.getElementById(`officer${i}NameMobile`).innerHTML = data.officers[i].name;
            document.getElementById(`officer${i}AboutMobile`).innerHTML = data.officers[i].about;
        }
        if (i==1) {
            document.getElementById(`officer1NameMobile`).style.display = "none";
            document.getElementById(`officer1AboutMobile`).style.display = "none";
        } else {
            document.getElementById(`officer1NameMobile`).style.display = "block";
            document.getElementById(`officer1AboutMobile`).style.display = "block";
        }
    }

    document.getElementById(`infoOfficers`).style.display = "block";
}

function getOfficerInfo(num) {
    return officerInfo25.officers[num];
}