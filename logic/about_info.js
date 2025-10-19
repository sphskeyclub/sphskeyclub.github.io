var element = document.getElementById("officerAboutContainer");

const officerInfo26 = {
    "officers": [
        {
            "title": "Co-President",
            "about": "Hi! I’m Maya, and I’m the new Co-President of KC along with Claire. I love meeting new people, reading books, and listening to music. I’m beyond ecstatic to be one of the people guiding Key to a successful school year.",
            "informalimgsrc": "./imgs/officers/25-26/informal/MayaD-700w.webp 700w",
            "multiple": "yes",
        },
        {
            "title": "Co-President",
            "about": "nothing yet :/",
            "multiple": "yes",
        },
        {
            "title": "VP of Service",
            "about": "Hey keyple! I'm Anna, your vp service, and I can't wait to introduce everyone to some new, fun, and meaningful service opportunities! Let's keyp this service train chugging!",
            "informalimgsrc": "./imgs/officers/25-26/informal/AnnaW-700w.webp 700w",
        },
        {
            "title": "VP of Social",
            "about": "nothing yet :/",
            "informalimgsrc": "./imgs/officers/25-26/informal/JoyS-700w.webp 700w",

        },
        {
            "title": "Secretary",
            "about": "My name is Gwendolyn Connors and I serve as the Secretary for St. Petersburg Senior High School's Key Club. I am going into my Junior year and I have been apart of Key Club since Freshman year. My job consists of keeping track of points and hours that each member serves as well as reporting to the district about what we have done as a club. Please feel free to contact me about any problem whether it be about your points, what I do, or a question about Key Club in general.",
            "informalimgsrc": "./imgs/officers/25-26/informal/GwenC-700w.webp 700w"
        },
        {
            "title": "Treasurer",
            "about": "nothing yet :/",
        },
        {
            "title": "Sergeant-At-Arms",
            "about": "Hi there! I’m Elise, the Sergeant at Arms or SAA! I manage the contact info and help the presidents communicate. You’ll be dealing with me if you forget dues, or don’t meet the point requirement. When I’m not kicking you out, I love running, learning new languages, and freaky music. Feel free to reach out with questions or anything else!",
            "informalimgsrc": "./imgs/officers/25-26/informal/EliseC-700w.webp 700w",
        },
        {
            "title": "Historian",
            "about": "nothing yet :/",
            "informalimgsrc": "./imgs/officers/25-26/informal/CaydenT-700w.webp 700w",
        },
        {
            "title": "Webmaster",
            "about": "Hey, I'm Julian and I'm the webmaster! I manage this website and all the SPHS Key Club accounts. You can ask me about any issues relating to SPHS Key Club that's online. Personally, I'm a programmer, I play Clarinet in Jazz Band, and I'm a chronic video game addict. I'm excited to be your webmaster for the 2025-2026 school year!",
        },
        {
            "title": "Editor",
            "about": "ABOUT: As Editor, I design, write, and send the weekly newsletters to the inboxes of the update-hungry Keyple :) As well as writing articles for the Key website and creating graphics/posters for events!<br>AURORA HENDERSON: Very excited to be Key’s editor for this school year! Renowned SPHS theatre lighting queen. I signed my life away to Canva and Mailchimp and now we are here…",
            "informalimgsrc": "./imgs/officers/25-26/informal/AuroraH-700w.webp 700w",
        },
        {
            "title": "Homeless Meals Chair",
            "about": "Hey! I am the Senior Homeless Meals Chair for the 2025/26 school year. I have been a member of Key for three years, and a board member for two. I love reading, cycling, and coffee shops. If you have any homeless meals  related questions, feel free to reach out to me or Victoria (HM mini chair). ",
            "informalimgsrc": "./imgs/officers/25-26/informal/SallyR-700w.webp 700w",
            "multiple": "yes",
        },
        {
            "title": "Homeless Meals Chair",
            "about": "Hi!! I'm Victoria Wirth, your new Co-Homeless Chair!! I'm super excited to be in this position!! I am in the IB program, and I am very organized, responsible, and I enjoy having fun with my friends and doing other extracurriculars. As your homeless meals chair, I will manage everything regarding homeless meals, including sending out the sign up sheet, managing donations, and sending the meals over to the shelter. If you have any questions regarding homeless meals, just ask Sally or me! I will be in this position for the next two years since I will be a junior next school year.",
            "multiple": "yes",
        },
        {
            "title": "Blood Drive Chair",
            "about": "nothing yet :/",
            "informalimgsrc": "./imgs/officers/25-26/informal/CaitlinW-700w.webp 700w",
        },
        {
            "title": "Adopt-A-Block Chair",
            "about": "Hello! I’m Nile & I will be serving as your Adopt-A-Block chair! I’ll mostly be arranging whenever we have our adopt-a-block events. Besides that I like cooking, drawing, and talking about Pokemon I guess",
            "informalimgsrc": "./imgs/officers/25-26/informal/NileY-700w.webp 700w",
        },
        {
            "title": "HKNA Chair",
            "about": "HKNA Chair: My role consists of contacting with the HKNA sponsors to plan and organize events within the Historic Kenwood Neighborhood that helps the community, such as house painting or backyard clean-ups!<br>Alison Calkins: I’m very grateful I get the honor of being HKNA Chair! I love lizards, possums, dogs, music, and food! Outside of Key, my alias is ‘Hungry Alison’ in theater…. I'm lowKEY really chill and nonchalant. 😎 ",
            "informalimgsrc": "./imgs/officers/25-26/informal/AlisonC-700w.webp 700w",
        },
        {
            "title": "Creative Committee Chair",
            "about": "Hi! My name is Katherine and I am the Creative Committee Chair. Creative Committee and I play an important role in many of the events and branding of the club. We design the T-shirts, plan inductions and goldfever, manage key club awards, and just in general make sure all these events go well! A bit about me: I love to run and love doing cross country in the fall! I mainly do 3D art and I practice pottery at the Clay Center of St. Petersburg. I love greek food, music, and all things outdoors! Including camping, paddle boarding, etc.",
        }
    ]
};

element.onclick = function() {
    document.getElementById("officerAboutContainer").style.display = "none";
    document.getElementById("officerAboutInfoContainer").style.display = "none";

    document.getElementById(`infoOfficers`).style.display = "none";
}

function getInfo(num, web) {
    //TODO: UPDATE THIS TO INCLUDE *ALL* OFFICER INFO
    document.getElementById("officerAboutContainer").style.display = "block";
    document.getElementById("officerAboutInfoContainer").style.display = "block";

    let data = getOfficerInfo(num);

    if (web) {
        document.getElementById("officerTitleWeb").innerHTML = data.title;
        document.getElementById("officerAboutWeb").innerHTML = data.about;
        if (data.hasOwnProperty("informalimgsrc")) {
            document.getElementById("officerImageWeb").srcset = data.informalimgsrc;
        }
        else {
            document.getElementById("officerImageWeb").srcset = "./imgs/logos/SPHSlogo-600w.webp 600w";
        }
        if (data.hasOwnProperty("multiple")) {
            document.getElementById("infoContainerWebHeader").innerHTML = "Meet a";
        }
        else {
            document.getElementById("infoContainerWebHeader").innerHTML = "Meet the";
        }
        if (num >= 10) {
            document.getElementById("officerTitleWeb").style.fontSize = "3.0vw";
        }
        else {
            document.getElementById("officerTitleWeb").style.fontSize = "3.5vw";
        }
    } else {
        document.getElementById("infoContainerMobileHeader").innerHTML = "Oops!";
        document.getElementById("officerTitleMobile").innerHTML = data.title;
        document.getElementById("officerAboutMobile").innerHTML = data.about;
        if (data.hasOwnProperty("informalimgsrc")) {
            document.getElementById("officerImageMobile").srcset = data.informalimgsrc;
        }
        else {
            document.getElementById("officerImageMobile").srcset = "./imgs/logos/SPHSlogo-600w.webp 600w";
        }
        if (data.hasOwnProperty("multiple")) {
            document.getElementById("infoContainerMobileHeader").innerHTML = "Meet a";
        }
        else {
            document.getElementById("infoContainerMobileHeader").innerHTML = "Meet the";
        }
        if (num >= 10) {
            document.getElementById("officerTitleMobile").style.fontSize = "6vw";
        }
        else {
            document.getElementById("officerTitleMobile").style.fontSize = "7vw";
        }
    }

    document.getElementById(`infoOfficers`).style.display = "block";
}

function getOfficerInfo(num) {
    return officerInfo26.officers[num];
}