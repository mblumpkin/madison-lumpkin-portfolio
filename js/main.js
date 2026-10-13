
/* =========================================
   MADISON LUMPKIN PORTFOLIO
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   01. SOFTWARE ICON PATHS
========================================= */

const softwareIcons = {
    maya: "./img/logos/autodesk-maya-icon.webp",
    procreate: "./img/logos/Procreate-Logo.png",
    unreal: "./img/logos/unreal.webp",
    illustrator: "./img/logos/illustrator.png",
    photoshop: "./img/logos/Adobe_Photoshop_CC_icon.svg.png",
    github: "./img/logos/github-icon-2.svg",
    vscode: "./img/logos/Visual_Studio_Code_1.35_icon.svg.png",
    nuke: "./img/logos/nukeFixed.png",
    spine: "./img/logos/spine_badge.png",
    godot: "./img/logos/Godot_icon.svg.png",
    arnold: "./img/logos/arnold.webp",
    blender: "./img/logos/Blender.webp",
    substance: "./img/logos/substance.webp"
};


/* =========================================
   02. PROJECT DATA

   Categories:
   animation
   modeling
   games
   concept
   graphic design
   traditional
   web
   digital humans
========================================= */

const projects = [


    /* =====================================
       ANIMATION
    ====================================== */

    {
        title: "Lip Sync Practice",
        category: "animation",
        type: "Character Animation · Lip Sync",
        context: "Intro to 3D Animation",

        description:
            "To better understand the importance of emotion in animation, I filmed my own reference video going along with a line from Disney's Emperor's New Groove. With that reference, I created an animation focused on facial expressions and lip syncing movements.",

        media: [
            "https://www.youtube.com/embed/UHr7Ilf0d8k"
        ],

        software: ["maya", "nuke"]
    },

    {
        title: "Foxtail Short",
        category: "animation",
        type: "3D Animation · Body Mechanics",
        context: "Intro to 3D Animation",

        description:
            "My first 3D animation project focused on understanding the basics of movement, timing, squash and stretch, and primary and secondary motion.",

        media: [
            "https://www.youtube.com/embed/wtKNF4VRl_8"
        ],

        software: ["maya"]
    },

    {
        title: "Intro to 3D Animation Final Project",
        category: "animation",
        type: "Character Animation · Performance",
        context: "Intro to 3D Animation",

        description:
            "Using what I learned during the semester on body mechanics and lip sync, I wanted to practice those together to create a short scene using a clip from Disney's Up. My goal was to detach the audio from such a popular movie to create an entirely different scene.",

        media: [
            "https://www.youtube.com/embed/oJmjMJjs59M"
        ],

        software: ["maya"]
    },


    /* =====================================
       3D MODELING & ENVIRONMENTS
    ====================================== */

    {
        title: "Isometric Room - Abandoned Writer Room",
        category: "modeling",
        type: "3D Modeling · Environment Design",
        context: "Virtual Space Course",

        description:
            "This project was an isometric room design inspired by the concept of a writing room that had been left behind by a fleeing author. Around the room, there are photos of his own inspiration as well as the last piece he ever wrote. This project got me really immersed in creating a story through details.",

        media: [
            "./img/virtualSpace/ML_Isometric_View.jpg",
            "./img/virtualSpace/ML_Bookshelf_View.jpg",
            "./img/virtualSpace/ML_Ground_View.jpg",
            "./img/virtualSpace/ML_Desk_View.jpg",
            "./img/virtualSpace/ML_Typewriter_View.jpg"
        ],

        software: ["maya", "photoshop", "arnold"]
    },

    {
        title: "Environmental Design - Foggy Fishing Port",
        category: "modeling",
        type: "Environment Modeling · Rendering",
        context: "Virtual Space Course",

        description:
            "This project was my first attempt at environmental modeling in Maya for my Virtual Space course at LSU. I aimed to create a small fishing town with a foggy, mysterious atmosphere.",

        media: [
            "./img/virtualSpace/overview_image.jpg",
            "./img/virtualSpace/main_shop_image.jpg",
            "./img/virtualSpace/boat_image.jpg",
            "./img/virtualSpace/right_hut_image.jpg",
            "./img/virtualSpace/IslandSketch.jpeg",
            "./img/virtualSpace/BoatSketch.jpeg"
        ],

        software: ["maya", "arnold"]
    },

    {
        title: "Ice Cream Truck",
        category: "modeling",
        type: "Tech Art · Materials",
        context: "Digital Surfaces & Lighting Course",

        description:
            "This project focused on creating a custom-painted ice cream truck that communicates a clear visual identity while showcasing creativity, context, and a sense of age. The goal was to develop a unique, eye-catching design that balances playful aesthetics with realistic weathering and wear, giving the truck a distinct personality and a believable history.",

        media: [
            "./img/PLACEHOLDER"
        ],

        software: ["substance", "maya", "arnold"]
    },


    /* =====================================
       GAME DEVELOPMENT
    ====================================== */

    {
        title: "FPS Design - The Factory Prototype",
        category: "games",
        type: "Game Development · Unreal Engine",
        context: "Intro to Unreal Course",

        description:
            "For this project, we created an FPS template from scratch. I used that template in order to create an immersive experience for Halloween using the Unreal provided assets.",

        media: [
            "https://www.youtube.com/embed/w0mLZMao0-w"
        ],

        software: ["unreal"]
    },

    {
        title: "Mouse Clicker Puzzle Prototype",
        category: "games",
        type: "Gameplay Programming · Puzzle Design",
        context: "Intro to Unreal Course",

        description:
            "To better understand mouse and cursor game interactions, our goal was to create a puzzle game using the mouse-clicker template we created from scratch. We also used this project to understand the basics of using and utilizing an animation tree. Textures were imported from Fab, and animations and the character model were imported from Mixamo.",

        media: [
            "https://www.youtube.com/embed/AKsFfHYbukY"
        ],

        software: ["unreal"]
    },

    {
        title: "The Light Between Prototype",
        category: "games",
        type: "Game Development · 3D Modeling",
        context: "Intro to Unreal Course",

        description:
            "For our final project, I created a prototype for a platformer-puzzle game called The Light Between with the main mechanic being that the player is able to use their shadow to solve puzzles and explore the area. I fully programmed the mechanics and modeled the character in Autodesk Maya. I am currently using this prototype as a base for a personal project and continuing development of the game.",

        media: [
            "https://www.youtube.com/embed/jKFuuUzCans"
        ],

        software: ["unreal", "maya"]
    },


    /* =====================================
       ILLUSTRATION & CONCEPT ART
    ====================================== */

    {
        title: "The Light Between Game Concept Art",
        category: "concept",
        type: "Game Concept Art · Visual Development",
        context: "Personal Project",

        description:
            "For my Intro to Unreal class, I started a prototype for a light and shadow themed game. After the class, I took it on as a personal project and have been creating concept art to figure out the style, color palette, environment, and overall visual direction.",

        media: [
            "./img/illustrations/LightBeanConceptArt.png"
        ],

        software: ["procreate", "photoshop"]
    },

    {
        title: "Kingfisher Dock",
        category: "concept",
        type: "Digital Illustration · Color Design",
        context: "Personal Project",

        description:
            "As I got more into creating concept art, I found myself especially drawn to working from color palettes. For this illustration, I developed the palette first, using it to guide the scene, mood, and overall visual direction.",

        media: [
            "./img/illustrations/Kingfisher.PNG"
        ],

        software: ["procreate", "photoshop"]
    },

    {
        title: "Mourice Character Concept Art",
        category: "concept",
        type: "Character Design · Concept Art",
        context: "Personal Project",

        description:
            "A character design I created when considering a more sketchy style than I usually go for. I wanted to play around with how the shape and coloring of an animal can be reflected in a human design.",

        media: [
            "./img/illustrations/mourice.png"
        ],

        software: ["procreate"]
    },

    {
        title: "Madi Bee Icon",
        category: "concept",
        type: "Illustration · Branding",
        context: "Profile Design",

        description:
            "A profile icon I designed for my art and jewelry branding under the name of Madi Bee.",

        media: [
            "./img/illustrations/MadiBee.png"
        ],

        software: ["procreate"]
    },

    {
        title: "X-Emplar - Female Main Character",
        category: "concept",
        type: "Character Design · Game Development",
        context: "Game Dev Assistantship Work",

        description:
            "As part of my assistantship with Pennington Biomedical and the LSU DMAE Center, one of my tasks was to create the main character designs as well as examples of the possible character customizations. This is an example of the main super female character and how she can be customized. The project is to create a game that encourages preteens to be healthy, mindful, and active through a fun and engaging superhero storyline.",

        media: [
            "./img/illustrations/FemaleMain.png",
            "./img/illustrations/dynamicpose.png",
            "./img/illustrations/FemalePossibleDesigns.jpeg"
        ],

        software: ["procreate"]
    },

    {
        title: "X-Emplar - Male Main Character",
        category: "concept",
        type: "Character Design · Game Development",
        context: "Game Dev Assistantship Work",

        description:
            "As part of my assistantship with Pennington Biomedical and the LSU DMAE Center, one of my tasks was to create the main character designs as well as examples of the possible character customizations. This is an example of the main super male character and how he can be customized. The project is to create a game that encourages preteens to be healthy, mindful, and active through a fun and engaging superhero storyline.",

        media: [
            "./img/illustrations/MaleMain.png"
        ],

        software: ["procreate"]
    },

    {
        title: "Cypress Corporation Book Cover",
        category: "concept",
        type: "Book Cover · Illustration",
        context: "Freelance Commission - Book Cover Design",

        description:
            "I was commissioned by a new author to create the artwork for her book cover. The story follows a young girl surviving and exploring an apocalyptic world with a sense of hope, and I wanted to reflect her emotional state — loneliness and isolation — through the composition. A dying cypress tree serves as the central visual element beside the main character, emphasizing that sense of solitude within the environment.",

        media: [
            "./img/illustrations/CypressCorpCover.png",
            "./img/illustrations/FullCoverCypress.png"
        ],

        software: ["procreate", "photoshop", "illustrator"]
    },

    {
        title: "Arenea Archer Character Concept Art",
        category: "concept",
        type: "Character Design · Fantasy Concept Art",
        context: "Personal Project",

        description:
            "A character design inspired by a regal jumping spider and centaurs. I originally tested a more human-like character, but enjoyed playing more into the centaur-spider details instead. This character was created to be an archer, her bow handcarved and her own webbing as the string.",

        media: [
            "./img/illustrations/AreneaCharacterConcept.png"
        ],

        software: ["procreate"]
    },

    {
        title: "Stylized Portrait Practice",
        category: "concept",
        type: "Digital Illustration · Portrait",
        context: "Personal Project",

        description:
            "An illustration I did for practice with cooler tones and a more geometric style.",

        media: [
            "./img/illustrations/LightingPracticePortrait.png"
        ],

        software: ["procreate"]
    },


    /* =====================================
       GRAPHIC DESIGN
    ====================================== */

    {
        title: "Color Systems Storybook",
        category: "design",
        type: "Graphic Design · Color Theory",
        context: "Color Design Course",

        description:
            "Using a limited color palette, my goal for this project was to create a series of children's book covers that felt cohesive in composition, style, and palette.",

        media: [
            "./img/graphic design/colorsystemsall.png",
            "./img/graphic design/pelican.png",
            "./img/graphic design/penguin.png",
            "./img/graphic design/flamingo.png",
            "./img/graphic design/sanderling.png",
            "./img/graphic design/pelicanmockup.png"
        ],

        software: ["procreate", "illustrator"]
    },

    {
        title: "Color Schemes",
        category: "design",
        type: "Graphic Design · Color Studies",
        context: "Color Design Course",

        description:
            "With the theme of drinks, each of these compositions reflects a type of color scheme such as analogous, complementary, triadic, and more.",

        media: [
            "./img/graphic design/ColorSchemesAll.png"
        ],

        software: ["illustrator"]
    },

    {
        title: "Minimalist Self Portrait",
        category: "design",
        type: "Graphic Design · Vector Illustration",
        context: "Digital Art 1",

        description:
            "An introductory project to better understand how to utilize the tools of Illustrator.",

        media: [
            "./img/graphic design/1776527387695-d33e002f-4a03-4c06-b653-42dc64a9b167_1.jpg"
        ],

        software: ["illustrator"]
    },


    /* =====================================
       TRADITIONAL ART
    ====================================== */

    {
        title: "Ragdoll Kitten",
        category: "traditional",
        type: "Gouache Painting",
        context: "2026 · Personal",

        description:
            "2026, Gouache Painting on Watercolor Paper, Personal.",

        media: [
            "./img/traditional/RagdollKitty.jpeg"
        ],

        software: []
    },

    {
        title: "Lost and Found to Nature",
        category: "traditional",
        type: "Acrylic Painting",
        context: "2025 · Personal",

        description:
            "2025, Acrylic Painting on Canvas, Personal.",

        media: [
            "./img/traditional/Manatees.jpeg"
        ],

        software: []
    },

    {
        title: "Signs of Growth",
        category: "traditional",
        type: "Acrylic Painting",
        context: "2026 · Personal",

        description:
            "2026, Acrylic Painting on Canvas, Personal.",

        media: [
            "./img/traditional/Flowers.jpeg"
        ],

        software: []
    },

    {
        title: "Beach Scene",
        category: "traditional",
        type: "Acrylic Painting",
        context: "2025 · Personal",

        description:
            "2025, Acrylic Painting on Canvas, Personal.",

        media: [
            "./img/traditional/Beach.jpeg"
        ],

        software: []
    },

    {
        title: "Bridal Party",
        category: "traditional",
        type: "Acrylic Painting",
        context: "2025 · Uncanny Gallery for LSU",

        description:
            "2025, Acrylic Painting on Canvas, Uncanny Gallery for LSU.",

        media: [
            "./img/traditional/BridalPartyPainting.PNG"
        ],

        software: []
    },

    {
        title: "Jazzland",
        category: "traditional",
        type: "Acrylic Painting",
        context: "2024 · Commission",

        description:
            "2024, Acrylic Painting on Canvas, Commission.",

        media: [
            "./img/traditional/Jazzland.jpg"
        ],

        software: []
    },

    {
        title: "Glass, Wood, & Metal",
        category: "traditional",
        type: "Graphite Drawing",
        context: "2024 · Drawing Composition Course",

        description:
            "2024, Lead Pencil on Paper, Drawing Composition Course Project.",

        media: [
            "./img/traditional/DRAWING COMP. - Glass, Wood, Metal.jpeg"
        ],

        software: []
    },

    {
        title: "Texture Still Life",
        category: "traditional",
        type: "Graphite Drawing",
        context: "2024 · Drawing Composition Course",

        description:
            "2024, Lead Pencil on Paper, Drawing Composition Course Project.",

        media: [
            "./img/traditional/DRAWING COMP. - Texture Still Life.jpeg"
        ],

        software: []
    },

    {
        title: "Transformation",
        category: "traditional",
        type: "Charcoal & Colored Pencil",
        context: "2024 · Drawing Composition Course",

        description:
            "2024, Charcoal & Colored Pencil on Paper, Drawing Composition Project.",

        media: [
            "./img/traditional/DRAWING COMP. - Transformation.jpeg"
        ],

        software: []
    },

    {
        title: "Bone Still Life",
        category: "traditional",
        type: "Charcoal Drawing",
        context: "2024 · Drawing Composition Course",

        description:
            "2024, Charcoal on Paper, Drawing Composition Project.",

        media: [
            "./img/traditional/IMG_6783.jpg"
        ],

        software: []
    },


    /* =====================================
       WEBSITE DESIGN
    ====================================== */

    {
        title: "Find Your Honey Bee",
        category: "web",
        type: "Website Design · CSS",
        context: "Web Design Course",

        description:
            "A Web Design Course project aimed to learn basic CSS styling in a fun, interactive way.",

        media: [
            "./img/web/honeybeesite.png"
        ],

        link:
            "https://mblumpkin.github.io/madi-project-one/",

        software: ["vscode", "github"]
    },

    {
        title: "The Light Between Website",
        category: "web",
        type: "Website Design · Interactive",
        context: "Web Design Course",

        description:
            "A faux site that acts as a sign-up page for The Light Between updates and community membership.",

        media: [
            "./img/web/beyondthelightsite.png"
        ],

        link:
            "https://mblumpkin.github.io/madi-project-two/",

        software: ["vscode", "github"]
    },

    {
        title: "Beach Sand Art",
        category: "web",
        type: "Creative Coding · Interactive Design",
        context: "Web Design Course",

        description:
            "A calming and interactive site that serves more as a simple visual experience than a traditional website.",

        media: [
            "./img/web/sandart.png"
        ],

        link:
            "https://mblumpkin.github.io/madi-project-3/",

        software: ["vscode", "github"]
    },

    {
        title: "Grant Penton Portfolio",
        category: "web",
        type: "Website Design · Portfolio",
        context: "Commission Project",

        description:
            "A website designed for an LSU undergraduate in Film & Telvision. He envisioned an organized, simple portfolio that reflects film/production.",

        media: [
            "./img/web/grantpenton.png"
        ],

        link:
            "https://mblumpkin.github.io/grantpentonportfolio/",

        software: ["vscode", "github"]
    },

    /* =====================================
       DIGITAL HUMANS
    ====================================== */

    {
        title: "Roller Coaster",
        category: "digitalhumans",
        type: "Human Response · Theme Park Design",
        context: "Digital Humans Course",

        description:
            "To better understand the reactions of the human body to different levels of G-Force, I was tasked with designing and testing a roller coaster to alter in response to whiplash, risks, intensity, etc. This coaster when through multiple trials to reach its end product.",

        media: [
            ""
        ],

        software: ["unreal"]

    },

];


/* =========================================
   03. GRID CONTAINER REFERENCES
========================================= */

const gridContainers = {
    animation: "animation-grid",
    modeling: "modeling-grid",
    games: "games-grid",
    concept: "concept-grid",
    design: "design-grid",
    traditional: "traditional-grid",
    web: "web-grid",
    digitalhumans: "digitalhuman-grid"
};


/* =========================================
   04. HELPER FUNCTIONS
========================================= */

// Check if a media URL is a YouTube video.

function isYouTubeVideo(url) {
    return (
        url.includes("youtube.com/embed/") ||
        url.includes("youtube-nocookie.com/embed/")
    );
}


// Extract the YouTube video ID.

function getYouTubeId(url) {

    try {
        const parsed = new URL(url);

        return parsed.pathname.split("/embed/")[1]
            ?.split("/")[0] || "";

    } catch (error) {
        return "";
    }

}


// Generate a YouTube thumbnail URL.

function getYouTubeThumbnail(url) {

    const videoId = getYouTubeId(url);

    if (!videoId) {
        return "";
    }

    return (
        "https://img.youtube.com/vi/" +
        videoId +
        "/hqdefault.jpg"
    );

}


/* =========================================
   05. GENERATE PROJECT CARDS
========================================= */

function createProjectCard(project) {

    const card = document.createElement("article");

    card.className = "card";


    /* -------------------------------------
       PROJECT PREVIEW
    ------------------------------------- */

    const preview = document.createElement("button");

    preview.className = "card-preview";
    preview.type = "button";

    preview.setAttribute(
        "aria-label",
        "View " + project.title + " project gallery"
    );


    const firstMedia = project.media[0];

    const isVideo = isYouTubeVideo(firstMedia);


    if (isVideo) {
        preview.classList.add("video-preview");
    }


    const previewImage = document.createElement("img");

    previewImage.src = isVideo
        ? getYouTubeThumbnail(firstMedia)
        : firstMedia;

    previewImage.alt = project.title;

    previewImage.loading = "lazy";


    const previewHint = document.createElement("span");

    previewHint.className = "preview-hint";

    previewHint.textContent = isVideo
        ? "Watch Video ↗"
        : "View Project ↗";


    preview.appendChild(previewImage);
    preview.appendChild(previewHint);

        /* -------------------------------------
        WEBSITE LINK UNDER PREVIEW
        ------------------------------------- */

        let websiteLink = null;

        if (project.link) {

            websiteLink = document.createElement("a");

            websiteLink.className = "project-link";

            websiteLink.href = project.link;
            websiteLink.target = "_blank";
            websiteLink.rel = "noopener noreferrer";

            websiteLink.textContent = "Visit Website ↗";

        }


    preview.addEventListener("click", () => {

        openModal(
            project.title,
            project.description,
            project.media,
            project.context,
            project.software
        );

    });


    /* -------------------------------------
       CARD INFORMATION
    ------------------------------------- */

    const cardInfo = document.createElement("div");

    cardInfo.className = "card-info";


    const title = document.createElement("h3");

    title.textContent = project.title;


    const category = document.createElement("p");

    category.className = "project-category";

    category.textContent = project.type;


    cardInfo.appendChild(title);
    cardInfo.appendChild(category);


    /* -------------------------------------
       DESCRIPTION DROPDOWN
    ------------------------------------- */

    const details = document.createElement("details");

    details.className = "project-details";


    const summary = document.createElement("summary");

    summary.textContent = "Description";


    const descriptionContent = document.createElement("div");

    descriptionContent.className = "description-content";


    const descriptionText = document.createElement("p");

    descriptionText.textContent = project.description;


    const projectContext = document.createElement("p");

    projectContext.className = "project-context";

    projectContext.textContent = project.context;


    descriptionContent.appendChild(descriptionText);
    descriptionContent.appendChild(projectContext);


    /* -------------------------------------
       WEBSITE LINK
    ------------------------------------- */


    details.appendChild(summary);
    details.appendChild(descriptionContent);


    /* -------------------------------------
       BUILD COMPLETE CARD
    ------------------------------------- */

    cardInfo.appendChild(details);

    card.appendChild(preview);
    card.appendChild(cardInfo);

    card.appendChild(preview);

    if (websiteLink) {
        card.appendChild(websiteLink);
    }

    card.appendChild(cardInfo);


    /* -------------------------------------
       RECALCULATE GRID ON DROPDOWN
    ------------------------------------- */

    details.addEventListener("toggle", () => {

        requestAnimationFrame(() => {
            resizeAll();
        });

    });


    /* -------------------------------------
       RECALCULATE GRID ON IMAGE LOAD
    ------------------------------------- */

    previewImage.addEventListener("load", () => {
        resizeAll();
    });


    return card;

}


/* =========================================
   06. RENDER ALL PROJECTS
========================================= */

function renderProjects() {

    // Clear each grid first.

    Object.values(gridContainers).forEach(id => {

        const grid = document.getElementById(id);

        if (grid) {
            grid.innerHTML = "";
        }

    });


    // Create and place every project card.

    projects.forEach(project => {

        const gridId = gridContainers[project.category];

        if (!gridId) {
            console.warn(
                "Unknown project category:",
                project.category
            );

            return;
        }

        const grid = document.getElementById(gridId);

        if (!grid) {
            console.warn(
                "Missing grid element:",
                gridId
            );

            return;
        }

        const card = createProjectCard(project);

        grid.appendChild(card);

    });


    // Update masonry positions after rendering.

    requestAnimationFrame(() => {
        resizeAll();
    });

}


/* =========================================
   07. MASONRY GRID RESIZING
========================================= */

function resizeGridItem(item) {

    const grid = item.parentElement;

    if (!grid) return;


    const styles = getComputedStyle(grid);

    const rowHeight = parseFloat(
        styles.getPropertyValue("grid-auto-rows")
    );

    const rowGap = parseFloat(
        styles.getPropertyValue("row-gap")
    );


    if (!rowHeight || Number.isNaN(rowGap)) {
        return;
    }


    const height = item.getBoundingClientRect().height;


    const rowSpan = Math.ceil(
        (height + rowGap) /
        (rowHeight + rowGap)
    );


    item.style.gridRowEnd = `span ${rowSpan}`;

}


function resizeAll() {

    document.querySelectorAll(".grid").forEach(grid => {

        const cards = grid.querySelectorAll(".card");

        cards.forEach(card => {

            // Reset the row span before measuring.

            card.style.gridRowEnd = "auto";

        });


        cards.forEach(card => {
            resizeGridItem(card);
        });

    });

}


/* =========================================
   08. MODAL STATE
========================================= */

let currentSlide = 0;

let slides = [];

let lastFocusedElement = null;


/* =========================================
   09. OPEN PROJECT MODAL
========================================= */

function openModal(
    title,
    description,
    mediaArray = [],
    className = "",
    softwares = []
) {

    const modal = document.getElementById("modal");

    const track = document.getElementById("carouselTrack");

    const softContainer = document.getElementById(
        "modalSoftwares"
    );

    const arrows = document.querySelectorAll(".arrow");


    if (!modal || !track || !softContainer) {
        return;
    }


    lastFocusedElement = document.activeElement;


    /* -------------------------------------
       RESET MODAL CONTENT
    ------------------------------------- */

    track.innerHTML = "";

    softContainer.innerHTML = "";

    slides = [];

    currentSlide = 0;


    /* -------------------------------------
       CREATE MEDIA SLIDES
    ------------------------------------- */

    mediaArray.forEach(media => {

        let element;


        if (isYouTubeVideo(media)) {

            element = document.createElement("iframe");

            element.src = media;

            element.title = title + " video";

            element.setAttribute(
                "allowfullscreen",
                ""
            );

            element.setAttribute(
                "allow",
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            );

            element.referrerPolicy =
                "strict-origin-when-cross-origin";

        } else {

            element = document.createElement("img");

            element.src = media;

            element.alt = title;

        }


        track.appendChild(element);

        slides.push(element);

    });


    /* -------------------------------------
       SET PROJECT INFORMATION
    ------------------------------------- */

    document.getElementById("modalTitle").textContent =
        title;

    document.getElementById("modalText").textContent =
        description;

    document.getElementById("modalClass").textContent =
        className;


    /* -------------------------------------
       ADD SOFTWARE ICONS
    ------------------------------------- */

    softwares.forEach(software => {

        const iconPath =
            softwareIcons[software] || software;


        const img = document.createElement("img");

        img.src = iconPath;

        img.alt = software + " software icon";

        img.title = software;

        softContainer.appendChild(img);

    });


    /* -------------------------------------
       SHOW OR HIDE CAROUSEL ARROWS
    ------------------------------------- */

    arrows.forEach(arrow => {

        arrow.style.display =
            slides.length <= 1
                ? "none"
                : "block";

    });


    /* -------------------------------------
       DISPLAY MODAL
    ------------------------------------- */

    modal.style.display = "flex";

    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");


    showSlide(0);


    /* -------------------------------------
       FOCUS CLOSE BUTTON
    ------------------------------------- */

    const closeButton = modal.querySelector(".close");

    if (closeButton) {
        closeButton.focus();
    }

}


/* =========================================
   10. CLOSE PROJECT MODAL
========================================= */

function closeModal() {

    const modal = document.getElementById("modal");

    if (!modal) return;


    modal.style.display = "none";

    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");


    /* -------------------------------------
       STOP YOUTUBE PLAYBACK
    ------------------------------------- */

    const track = document.getElementById("carouselTrack");

    if (track) {
        track.innerHTML = "";
    }

    slides = [];

    currentSlide = 0;


    /* -------------------------------------
       RESTORE FOCUS
    ------------------------------------- */

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }

}


/* =========================================
   11. DISPLAY CAROUSEL SLIDE
========================================= */

function showSlide(index) {

    slides.forEach((slide, i) => {

        const active = i === index;

        slide.classList.toggle("active", active);


        // Stop videos when switching slides.

        if (!active && slide.tagName === "IFRAME") {

            const src = slide.src;

            slide.src = src;

        }

    });

}


/* =========================================
   12. NEXT / PREVIOUS SLIDES
========================================= */

function nextSlide() {

    if (slides.length === 0) return;


    currentSlide =
        (currentSlide + 1) % slides.length;


    showSlide(currentSlide);

}


function prevSlide() {

    if (slides.length === 0) return;


    currentSlide =
        (currentSlide - 1 + slides.length) %
        slides.length;


    showSlide(currentSlide);

}


/* =========================================
   13. MOBILE NAVIGATION
========================================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    const hamburger = document.querySelector(".hamburger");


    if (!nav) return;


    const isOpen = nav.classList.toggle("open");


    if (hamburger) {

        hamburger.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        hamburger.textContent = isOpen ? "×" : "☰";

    }

}


/* =========================================
   14. CLOSE MOBILE NAV ON LINK CLICK
========================================= */

function setupNavigation() {

    const nav = document.getElementById("navMenu");

    const hamburger = document.querySelector(".hamburger");


    if (!nav) return;


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");


            if (hamburger) {

                hamburger.setAttribute(
                    "aria-expanded",
                    "false"
                );

                hamburger.textContent = "☰";

            }

        });

    });

}


/* =========================================
   15. STICKY HEADER SCROLL EFFECT
========================================= */

function updateHeaderOnScroll() {

    const header = document.querySelector(".site-header");

    if (!header) return;


    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


/* =========================================
   16. KEYBOARD CONTROLS
========================================= */

function setupKeyboardControls() {

    document.addEventListener("keydown", event => {

        const modal = document.getElementById("modal");

        const modalIsOpen =
            modal &&
            modal.style.display === "flex";


        if (!modalIsOpen) return;


        /* ESCAPE: CLOSE MODAL */

        if (event.key === "Escape") {

            closeModal();

        }


        /* RIGHT ARROW: NEXT SLIDE */

        if (event.key === "ArrowRight") {

            nextSlide();

        }


        /* LEFT ARROW: PREVIOUS SLIDE */

        if (event.key === "ArrowLeft") {

            prevSlide();

        }


        /* KEEP KEYBOARD FOCUS IN MODAL */

        if (event.key === "Tab") {

            const focusable = Array.from(
                modal.querySelectorAll(
                    'button:not([disabled]), a[href], iframe'
                )
            ).filter(element => {
                return element.getClientRects().length > 0;
            });


            if (focusable.length === 0) return;


            const first = focusable[0];

            const last = focusable[focusable.length - 1];


            if (
                event.shiftKey &&
                document.activeElement === first
            ) {

                event.preventDefault();

                last.focus();

            } else if (
                !event.shiftKey &&
                document.activeElement === last
            ) {

                event.preventDefault();

                first.focus();

            }

        }

    });

}


/* =========================================
   17. RESPONSIVE GRID UPDATES
========================================= */

function setupResizeHandling() {

    let resizeFrame = null;


    window.addEventListener("resize", () => {

        if (resizeFrame !== null) {
            cancelAnimationFrame(resizeFrame);
        }


        resizeFrame = requestAnimationFrame(() => {

            resizeAll();

            resizeFrame = null;

        });

    });


    // Recalculate once all page assets have loaded.

    window.addEventListener("load", () => {

        resizeAll();

    });


    // Handle late-loading fonts.

    if (document.fonts) {

        document.fonts.ready.then(() => {

            resizeAll();

        });

    }

}


/* =========================================
   18. IMAGE LOAD OBSERVATION
========================================= */

function setupImageObservation() {

    document.querySelectorAll(".card img").forEach(img => {

        if (!img.complete) {

            img.addEventListener("load", () => {
                resizeAll();
            });

        }

    });

}


/* =========================================
   19. INITIALIZE PORTFOLIO
========================================= */

function initializePortfolio() {

    // Generate all project cards.

    renderProjects();


    // Set up navigation.

    setupNavigation();


    // Enable keyboard controls.

    setupKeyboardControls();


    // Set up responsive masonry resizing.

    setupResizeHandling();


    // Observe project images.

    setupImageObservation();


    // Initial header appearance.

    updateHeaderOnScroll();


    // Initial masonry layout.

    requestAnimationFrame(() => {
        resizeAll();
    });

}


/* =========================================
   20. SCROLL LISTENER
========================================= */

window.addEventListener(
    "scroll",
    updateHeaderOnScroll,
    { passive: true }
);


/* =========================================
   21. START WEBSITE
========================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializePortfolio
    );

} else {

    initializePortfolio();

}
