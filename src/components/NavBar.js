import React from "react";

function NavBar() {
    const links = ["home",
        "about", "project"
    ];
    return ( < nav > { /* display an <a> tag for each link here */ } <
        a href = "#home" > { links[0] } < /a>
    }