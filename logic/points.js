const data = {
    "logs": [
        {
            "name": "2024-25 Semester 2 Point Log",
            "shorthand": "2024-25 S2",
            "url": "https://docs.google.com/spreadsheets/d/1lzmD1roUn6V-HHibVzdtIVGYB9V8efnnEX9MGuU6wsU/edit?usp=sharing"
        },
        {
            "name": "2024-25 Semester 1 Point Log",
            "shorthand": "2024-25 S1",
            "url": "https://docs.google.com/spreadsheets/d/1XXv6HC7Cm5N_tLMy6FRfc0tWfklTOneFjNbvr8Sn8pA/edit?gid=1705831881#gid=1705831881"
        },
        {
            "name": "2024-25 Summer Point Log",
            "shorthand": "2024-25 Summer",
            "url": "https://docs.google.com/spreadsheets/d/1XXv6HC7Cm5N_tLMy6FRfc0tWfklTOneFjNbvr8Sn8pA/edit?gid=1705831881#gid=1705831881"
        },
        {
            "name": "2023-24 Semester 2 Point Log",
            "shorthand": "2023-24 S2",
            "url": "https://docs.google.com/spreadsheets/d/1XXv6HC7Cm5N_tLMy6FRfc0tWfklTOneFjNbvr8Sn8pA/edit?gid=1705831881#gid=1705831881"
        },
        {
            "name": "2023-24 Semester 1 Point Log",
            "shorthand": "2023-24 S1",
            "url": "https://docs.google.com/spreadsheets/d/1XXv6HC7Cm5N_tLMy6FRfc0tWfklTOneFjNbvr8Sn8pA/edit?gid=1705831881#gid=1705831881"
        },
    ]
};

function toggleArchive() {
    const pointsListWeb = document.getElementById("pointsListWeb");
    const pointsListMobile = document.getElementById("pointsListMobile");

    for (i=0; i<data.logs.length; i++) {
        let link = document.createElement("a");
        if (i == 0) {
            link.textContent = `${data.logs[i].name} (ACTIVE)`;
        } else {
            link.textContent = data.logs[i].name;
        }
        link.href = data.logs[i].url;
        link.setAttribute("aria-label", `See the ${data.logs[i].name}`);

        // append the link to the list
        pointsListMobile.appendChild(link);
        pointsListWeb.appendChild(link.cloneNode(true));
        // Add a line break after each link
        pointsListWeb.appendChild(document.createElement("br"));
        pointsListMobile.appendChild(document.createElement("br"));
    }
}

function togglePoints() {
    const tableWeb = document.getElementById("pointsUrlWeb");
    const shorthandWeb = document.getElementById("pointsShorthandWeb");
    const nameWeb = document.getElementById("pointsNameWeb");
    const tableMobile = document.getElementById("pointsUrlMobile");
    const shorthandMobile = document.getElementById("pointsShorthandMobile");
    const nameMobile = document.getElementById("pointsNameMobile");

    tableWeb.setAttribute("onclick", `location.href='${data.logs[0].url}'`);
    shorthandWeb.textContent = data.logs[0].shorthand;
    nameWeb.textContent = `Click here for the ${data.logs[0].name}.`;
    tableMobile.setAttribute("onclick", `location.href='${data.logs[0].url}'`);
    shorthandMobile.textContent = data.logs[0].shorthand;
    nameMobile.textContent = `Click here for the ${data.logs[0].name}.`;
}