const data = {
    "logs": [
        {
            "name": "2025-26 Semester 1 Point Log",
            "shorthand": "2025-26 S1",
            "url": "https://docs.google.com/spreadsheets/d/1y4gKhhuTDs3QlREOPssx-YRaHhvRj8hwxhOyIb5sez0/edit?usp=sharing"
        },
        {
            "name": "2025 Summer Point Log",
            "shorthand": "2025 Summer",
            "url": "https://docs.google.com/spreadsheets/d/12hsiQm-qjsmj8YeDwKVGtwh0l_a3QgfZ1uJQsr2V7Rs/edit?usp=drivesdk"
        },
        {
            "name": "2024-25 Semester 2 Point Log",
            "shorthand": "2024-25 S2",
            "url": "https://docs.google.com/spreadsheets/d/1lzmD1roUn6V-HHibVzdtIVGYB9V8efnnEX9MGuU6wsU/edit?usp=sharing"
        },
        {
            "name": "2024-25 Semester 1 Point Log",
            "shorthand": "2024-25 S1",
            "url": "https://docs.google.com/spreadsheets/d/1XXv6HC7Cm5N_tLMy6FRfc0tWfklTOneFjNbvr8Sn8pA/edit?usp=sharing"
        },
        {
            "name": "2024 Summer Point Log",
            "shorthand": "2024 Summer",
            "url": "https://docs.google.com/spreadsheets/d/1DmVF_PqrtLY9H2wfNsX58DKPOsdlG0XnX_czqZGta1E/edit?usp=sharing"
        },
        {
            "name": "2023-24 Semester 2 Point Log",
            "shorthand": "2023-24 S2",
            "url": "https://docs.google.com/spreadsheets/d/1B08cDx1TPqOLTpgwQuPJurtN1_LaRvaSyBlVOPZ5M2U/edit?usp=sharing"
        },
        {
            "name": "2023-24 Semester 1 Point Log",
            "shorthand": "2023-24 S1",
            "url": "https://docs.google.com/spreadsheets/d/15l3sazN2qAe7AmWfpzjTvZ-H34w4gnkrSUxccak_Ons/edit?usp=sharing"
        },
        {
            "name": "2023 Summer Point Log",
            "shorthand": "2023 Summer",
            "url": "https://docs.google.com/spreadsheets/d/1_CoOC-GJK2m5NbmrbvX2gIKBSR7g2ceB5rfQd93wR8k/edit?usp=sharing"
        },
        {
            "name": "2022-23 Semester 2 Point Log",
            "shorthand": "2022-23 S2",
            "url": "https://docs.google.com/spreadsheets/d/10bh5UE9Q40lQK1YyidLze5EgJH7rrwvdcbwdAMqO850/edit?usp=sharing"
        },
        {
            "name": "2022-23 Semester 1 Point Log",
            "shorthand": "2022-23 S1",
            "url": "https://docs.google.com/spreadsheets/d/19o9h7oKUKbVU9RbOpY3VXtCatF1xYN7k2YYRNGhkZug/edit?usp=sharing"
        },
        {
            "name": "2022 Summer Point Log",
            "shorthand": "2022 Summer",
            "url": "https://docs.google.com/spreadsheets/d/1kEOhXqwNTy0njh1nm6eXjeaqpnX2pMk7DKnNJunZ_P0/edit?usp=sharing"
        },
        {
            "name": "2021-22 Semester 2 Point Log",
            "shorthand": "2021-22 S2",
            "url": "https://docs.google.com/spreadsheets/d/1SC_GK1lWyPga7LSL1jMNsduoEWbBLclz-hiyiT1bjYc/edit?usp=sharing"
        },
        {
            "name": "2021-22 Semester 1 Point Log",
            "shorthand": "2021-22 S1",
            "url": "https://docs.google.com/spreadsheets/d/1d7A7_vE-aTdZVbvsJco7k9X6augW8IPduuySGJppxDM/edit?usp=sharing"
        }
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