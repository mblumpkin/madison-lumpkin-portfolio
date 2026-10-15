
    /* =========================================
    MADISON LUMPKIN PORTFOLIO
    MAIN JAVASCRIPT
    ========================================= */


    /* =========================================
    01. SOFTWARE ICONS
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

    To add a project:
    Copy an object inside this array.
    Set the title, category, media,
    description, and software.

    Available categories:
    animation, modeling, games, concept,
    design, traditional, web, digitalhumans
    ========================================= */

    const projects = [

        /* ===== ANIMATION ===== */

        {
            title: "Lip Sync Practice",
            category: "animation",
            type: "3D Character Animation · Lip Sync",
            context: "Intro to 3D Animation",
            description: "To better understand the importance of emotion in animation, I filmed my own reference video going along with a line from Disney's Emperor's New Groove. With that reference, I created an animation focused on facial expressions and lip syncing movements.",
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
            description: "My first 3D animation project focused on understanding the basics of movement, timing, squash and stretch, and primary and secondary motion.",
            media: [
                "https://www.youtube.com/embed/wtKNF4VRl_8"
            ],
            software: ["maya"]
        },

        {
            title: "Intro to 3D Animation Final Project",
            category: "animation",
            type: "3D Character Animation · Performance",
            context: "Intro to 3D Animation",
            description: "Using what I learned during the semester on body mechanics and lip sync, I wanted to practice those together to create a short scene using a clip from Disney's Up. My goal was to detach the audio from such a popular movie to create an entirely different scene.",
            media: [
                "https://www.youtube.com/embed/oJmjMJjs59M"
            ],
            software: ["maya"]
        },

        {
            title: "X-Emplar Player Character Animations Demo",
            category: "animation",
            type: "2D Character Animation · Game Development",
            context: "Game Dev Assistantship Work",
            description: "As part of my role for developing the X-Emplar game for LSU DMAE & Pennington, I designed, rigged, animated, and programmed 8 heroes that players can choose to be. Each character is broken into 3 views - side, front, and back. They also are all started with three main animations - idle, walking, and jumping. These characters were rigged and animated in Spine2D and then put together in Photoshop for custom spritesheets.",
            media: [
                "https://www.youtube.com/embed/NNI2yjJUCu8?si=IDcO869Q5p0Jqp-v"
            ],
            software: ["procreate", "spine", "photoshop"]
        },


        /* ===== 3D MODELING ===== */

        {
            title: "Isometric Room - Abandoned Writer Room",
            category: "modeling",
            type: "3D Modeling · Environment Design",
            context: "Virtual Space Course",
            description: "This project was an isometric room design inspired by the concept of a writing room that had been left behind by a fleeing author. Around the room, there are photos of his own inspiration as well as the last piece he ever wrote. This project got me really immersed in creating a story through details.",
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
            description: "This project was my first attempt at environmental modeling in Maya for my Virtual Space course at LSU. I aimed to create a small fishing town with a foggy, mysterious atmosphere.",
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
            description: "This project focused on creating a custom-painted ice cream truck that communicates a clear visual identity while showcasing creativity, context, and a sense of age. The goal was to develop a unique, eye-catching design that balances playful aesthetics with realistic weathering and wear, giving the truck a distinct personality and a believable history.",
            media: [],
            software: ["substance", "maya", "arnold"]
        },


        /* ===== GAME DEVELOPMENT ===== */

        {
            title: "FPS Design - The Factory Prototype",
            category: "games",
            type: "Game Development · Unreal Engine",
            context: "Intro to Unreal Course",
            description: "For this project, we created an FPS template from scratch. I used that template in order to create an immersive experience for Halloween using the Unreal provided assets.",
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
            description: "To better understand mouse and cursor game interactions, our goal was to create a puzzle game using the mouse-clicker template we created from scratch. We also used this project to understand the basics of using and utilizing an animation tree. Textures were imported from Fab, and animations and the character model were imported from Mixamo.",
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
            description: "For our final project, I created a prototype for a platformer-puzzle game called The Light Between with the main mechanic being that the player is able to use their shadow to solve puzzles and explore the area. I fully programmed the mechanics and modeled the character in Autodesk Maya. I am currently using this prototype as a base for a personal project and continuing development of the game.",
            media: [
                "https://www.youtube.com/embed/jKFuuUzCans"
            ],
            software: ["unreal", "maya"]
        },


        /* ===== ILLUSTRATION ===== */

        {
            title: "The Light Between Game Concept Art",
            category: "concept",
            type: "Game Concept Art · Visual Development",
            context: "Personal Project",
            description: "For my Intro to Unreal class, I started a prototype for a light and shadow themed game. After the class, I took it on as a personal project and have been creating concept art to figure out the style, color palette, environment, and overall visual direction.",
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
            description: "As I got more into creating concept art, I found myself especially drawn to working from color palettes. For this illustration, I developed the palette first, using it to guide the scene, mood, and overall visual direction.",
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
            description: "A character design I created when considering a more sketchy style than I usually go for. I wanted to play around with how the shape and coloring of an animal can be reflected in a human design.",
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
            description: "A profile icon I designed for my art and jewelry branding under the name of Madi Bee.",
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
            description: "As part of my assistantship with Pennington Biomedical and the LSU DMAE Center, one of my tasks was to create the main character designs as well as examples of the possible character customizations. This is an example of the main super female character and how she can be customized. The project is to create a game that encourages preteens to be healthy, mindful, and active through a fun and engaging superhero storyline.",
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
            description: "As part of my assistantship with Pennington Biomedical and the LSU DMAE Center, one of my tasks was to create the main character designs as well as examples of the possible character customizations. This is an example of the main super male character and how he can be customized. The project is to create a game that encourages preteens to be healthy, mindful, and active through a fun and engaging superhero storyline.",
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
            description: "I was commissioned by a new author to create the artwork for her book cover. The story follows a young girl surviving and exploring an apocalyptic world with a sense of hope, and I wanted to reflect her emotional state — loneliness and isolation — through the composition. A dying cypress tree serves as the central visual element beside the main character, emphasizing that sense of solitude within the environment.",
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
            description: "A character design inspired by a regal jumping spider and centaurs. I originally tested a more human-like character, but enjoyed playing more into the centaur-spider details instead. This character was created to be an archer, her bow handcarved and her own webbing as the string.",
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
            description: "An illustration I did for practice with cooler tones and a more geometric style.",
            media: [
                "./img/illustrations/LightingPracticePortrait.png"
            ],
            software: ["procreate"]
        },


        /* ===== GRAPHIC DESIGN ===== */

        {
            title: "Color Systems Storybook",
            category: "design",
            type: "Graphic Design · Color Theory",
            context: "Color Design Course",
            description: "Using a limited color palette, my goal for this project was to create a series of children's book covers that felt cohesive in composition, style, and palette.",
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
            description: "With the theme of drinks, each of these compositions reflects a type of color scheme such as analogous, complementary, triadic, and more.",
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
            description: "An introductory project to better understand how to utilize the tools of Illustrator.",
            media: [
                "./img/graphic design/1776527387695-d33e002f-4a03-4c06-b653-42dc64a9b167_1.jpg"
            ],
            software: ["illustrator"]
        },


        /* ===== TRADITIONAL ART ===== */

        {
            title: "Ragdoll Kitten",
            category: "traditional",
            type: "Gouache Painting",
            context: "2026 · Personal",
            description: "2026, Gouache Painting on Watercolor Paper, Personal.",
            media: ["./img/traditional/RagdollKitty.jpeg"],
            software: []
        },

        {
            title: "Lost and Found to Nature",
            category: "traditional",
            type: "Acrylic Painting",
            context: "2025 · Personal",
            description: "2025, Acrylic Painting on Canvas, Personal.",
            media: ["./img/traditional/Manatees.jpeg"],
            software: []
        },

        {
            title: "Signs of Growth",
            category: "traditional",
            type: "Acrylic Painting",
            context: "2026 · Personal",
            description: "2026, Acrylic Painting on Canvas, Personal.",
            media: ["./img/traditional/Flowers.jpeg"],
            software: []
        },

        {
            title: "Beach Scene",
            category: "traditional",
            type: "Acrylic Painting",
            context: "2025 · Personal",
            description: "2025, Acrylic Painting on Canvas, Personal.",
            media: ["./img/traditional/Beach.jpeg"],
            software: []
        },

        {
            title: "Bridal Party",
            category: "traditional",
            type: "Acrylic Painting",
            context: "2025 · Uncanny Gallery for LSU",
            description: "2025, Acrylic Painting on Canvas, Uncanny Gallery for LSU.",
            media: ["./img/traditional/BridalPartyPainting.PNG"],
            software: []
        },

        {
            title: "Jazzland",
            category: "traditional",
            type: "Acrylic Painting",
            context: "2024 · Commission",
            description: "2024, Acrylic Painting on Canvas, Commission.",
            media: ["./img/traditional/Jazzland.jpg"],
            software: []
        },

        {
            title: "Glass, Wood, & Metal",
            category: "traditional",
            type: "Graphite Drawing",
            context: "2024 · Drawing Composition Course",
            description: "2024, Lead Pencil on Paper, Drawing Composition Course Project.",
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
            description: "2024, Lead Pencil on Paper, Drawing Composition Course Project.",
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
            description: "2024, Charcoal & Colored Pencil on Paper, Drawing Composition Project.",
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
            description: "2024, Charcoal on Paper, Drawing Composition Project.",
            media: ["./img/traditional/IMG_6783.jpg"],
            software: []
        },

        {
            title: "Painted Gown",
            category: "traditional",
            type: "3D Wearable Piece",
            context: "2024 · 3D Design Course",
            description: "2024, 3D Wearable for LSU School of Art Fall Fashion Show. This dress was inspired by the feeling of passion I have while painting and how the objects that are usually left behind (like dirty, used paint palettes and crusted, broken brushes) can also become works of art.",
            media: ["./img/traditional/PaintedDress.jpeg"],
            software: []
        },


        /* ===== WEBSITES ===== */

        {
            title: "Find Your Honey Bee",
            category: "web",
            type: "Website Design · CSS",
            context: "Web Design Course",
            description: "A Web Design Course project aimed to learn basic CSS styling in a fun, interactive way.",
            media: ["./img/web/honeybeesite.png"],
            link: "https://mblumpkin.github.io/madi-project-one/",
            software: ["vscode", "github"]
        },

        {
            title: "The Light Between Website",
            category: "web",
            type: "Website Design · Interactive",
            context: "Web Design Course",
            description: "A faux site that acts as a sign-up page for The Light Between updates and community membership.",
            media: ["./img/web/beyondthelightsite.png"],
            link: "https://mblumpkin.github.io/madi-project-two/",
            software: ["vscode", "github"]
        },

        {
            title: "Beach Sand Art",
            category: "web",
            type: "Creative Coding · Interactive Design",
            context: "Web Design Course",
            description: "A calming and interactive site that serves more as a simple visual experience than a traditional website.",
            media: ["./img/web/sandart.png"],
            link: "https://mblumpkin.github.io/madi-project-3/",
            software: ["vscode", "github"]
        },

        {
            title: "Grant Penton Portfolio",
            category: "web",
            type: "Website Design · Portfolio",
            context: "Commission Project",
            description: "A website designed for an LSU undergraduate in Film & Telvision. He envisioned an organized, simple portfolio that reflects film/production.",
            media: ["./img/web/grantpenton.png"],
            link: "https://mblumpkin.github.io/grantpentonportfolio/",
            software: ["vscode", "github"]
        },


        /* ===== DIGITAL HUMANS ===== */

        {
            title: "Roller Coaster",
            category: "digitalhumans",
            type: "Human Response · Theme Park Design",
            context: "Digital Humans Course",
            description: "To better understand the reactions of the human body to different levels of G-Force, I was tasked with designing and testing a roller coaster to alter in response to whiplash, risks, intensity, etc. This coaster when through multiple trials to reach its end product.",
            media: [],
            software: ["unreal"]
        },

        {
            title: "Body Modification",
            category: "digitalhumans",
            type: "Human Body Relationship · 3D Modeling · 3D Printing",
            context: "Digital Humans Course",
            description: "",
            media: [],
            software: ["blender"]
        },

        /* ===== DIGITAL TWINS ===== */

        {
            title: "",
            category: "digitaltwins",
            type: "",
            context: "Digital Twins Course",
            description: "",
            media: [],
            software: [""]
        },

    ];


    /* =========================================
    03. GRID CONTAINERS
    ========================================= */

    const gridContainers = {
        animation: "animation-grid",
        modeling: "modeling-grid",
        games: "games-grid",
        concept: "concept-grid",
        design: "design-grid",
        traditional: "traditional-grid",
        web: "web-grid",
        digitalhumans: "digitalhuman-grid",
        digitaltwins: "digitaltwin-grid"
    };


    /* =========================================
    04. HELPERS
    ========================================= */

    const $ = selector => document.querySelector(selector);

    const isVideo = url =>
        /youtube(?:-nocookie)?\.com\/embed\//.test(url || "");

    function youtubeThumb(url) {
        try {
            const videoId = new URL(url)
                .pathname.split("/embed/")[1]
                .split("/")[0];

            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        } catch {
            return "";
        }
    }

    const placeholder =
        "data:image/svg+xml," +
        encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg"
                width="900" height="550">
                <rect width="100%" height="100%"
                    fill="#dbe2f4"/>
                <text x="50%" y="50%"
                    text-anchor="middle"
                    fill="#293b60"
                    font-family="sans-serif"
                    font-size="28">
                    Image coming soon
                </text>
            </svg>
        `);

    function mediaFor(project) {
        return (project.media || []).filter(
            media =>
                typeof media === "string" &&
                media.trim() !== "" &&
                !media.includes("PLACEHOLDER")
        );
    }


    /* =========================================
    05. PROJECT CARDS
    ========================================= */

    function createProjectCard(project) {

        const card = document.createElement("article");
        card.className = "card";

        const media = mediaFor(project);
        const first = media[0] || "";

        // Preview button
        const preview = document.createElement("button");

        preview.type = "button";

        preview.className =
            "card-preview" +
            (isVideo(first) ? " video-preview" : "");

        preview.setAttribute(
            "aria-label",
            `Open ${project.title} gallery`
        );

        // Preview image
        const image = document.createElement("img");

        image.src = first
            ? (isVideo(first) ? youtubeThumb(first) : first)
            : placeholder;

        image.alt = project.title;
        image.loading = "lazy";

        image.addEventListener("error", () => {
            image.src = placeholder;
        }, { once: true });

        image.addEventListener("load", () => {
            requestAnimationFrame(resizeAll);
        });

        preview.appendChild(image);

        // Preview hint
        const hint = document.createElement("span");
        hint.className = "preview-hint";

        hint.textContent = media.length
            ? "View project ↗"
            : "Coming soon";

        preview.appendChild(hint);

        preview.disabled = media.length === 0;

        if (media.length) {
            preview.addEventListener("click", () => {
                openModal(project);
            });
        }

        // Card information
        const info = document.createElement("div");
        info.className = "card-info";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const type = document.createElement("p");
        type.className = "project-category";
        type.textContent = project.type || "";

        info.append(title, type);

        // Description dropdown
        if (project.description || project.context) {

            const details = document.createElement("details");
            details.className = "project-details";

            const summary = document.createElement("summary");
            summary.textContent = "Project Description";

            const content = document.createElement("div");
            content.className = "description-content";

            if (project.description) {
                const paragraph = document.createElement("p");
                paragraph.textContent = project.description;
                content.appendChild(paragraph);
            }

            if (project.context) {
                const context = document.createElement("p");
                context.className = "project-context";
                context.textContent = project.context;
                content.appendChild(context);
            }

            details.append(summary, content);
            info.appendChild(details);

            details.addEventListener("toggle", () => {
                requestAnimationFrame(resizeAll);
            });
        }

        card.appendChild(preview);

        // External website link
        const website =
            project.link ||
            project.website ||
            project.url;

        if (website) {

            const link = document.createElement("a");

            link.className = "project-link";
            link.href = website;
            link.textContent = "Visit website ↗";

            link.target = "_blank";
            link.rel = "noopener noreferrer";

            card.appendChild(link);
        }

        card.appendChild(info);

        return card;
    }


    /* =========================================
    06. RENDER PROJECTS
    ========================================= */

    function renderProjects() {

        // Clear existing grids
        Object.values(gridContainers).forEach(id => {
            const grid = document.getElementById(id);

            if (grid) {
                grid.replaceChildren();
            }
        });

        // Add cards
        projects.forEach(project => {

            const gridId = gridContainers[project.category];

            if (!gridId) {
                console.warn(
                    "Unknown category:",
                    project.category
                );
                return;
            }

            const grid = document.getElementById(gridId);

            if (!grid) {
                console.warn("Missing grid:", gridId);
                return;
            }

            grid.appendChild(createProjectCard(project));
        });

        requestAnimationFrame(resizeAll);
    }


    /* =========================================
    07. MASONRY GRID RESIZING
    ========================================= */

    function resizeAll() {

        document.querySelectorAll(".grid").forEach(grid => {

            const styles = getComputedStyle(grid);

            const rowHeight =
                parseFloat(styles.gridAutoRows) || 10;

            const rowGap =
                parseFloat(styles.rowGap) || 0;

            grid.querySelectorAll(".card").forEach(card => {

                // Reset before measuring
                card.style.gridRowEnd = "span 1";

                const height =
                    card.getBoundingClientRect().height;

                const span = Math.ceil(
                    (height + rowGap) /
                    (rowHeight + rowGap)
                );

                card.style.gridRowEnd =
                    `span ${Math.max(1, span)}`;
            });
        });
    }


    /* =========================================
    08. PROJECT MODAL
    ========================================= */

    let activeMedia = [];
    let activeSlide = 0;
    let lastFocus = null;

    function openModal(project) {

        const modal = $("#modal");

        if (!modal) return;

        lastFocus = document.activeElement;

        activeMedia = mediaFor(project);
        activeSlide = 0;

        $("#modalTitle").textContent = project.title;

        $("#modalClass").textContent =
            [project.type, project.context]
                .filter(Boolean)
                .join(" · ");

        $("#modalText").textContent =
            project.description || "";

        // Software icons
        const icons = $("#modalSoftwares");

        icons.replaceChildren();

        (project.software || []).forEach(key => {

            const path = softwareIcons[key];

            if (!path) return;

            const image = document.createElement("img");

            image.src = path;
            image.alt = key;
            image.title = key;

            icons.appendChild(image);
        });

        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("modal-open");

        showSlide(0);

        $(".close")?.focus();

        updateFloatingNext();
    }


    /* =========================================
    09. CAROUSEL
    ========================================= */

    function showSlide(index) {

        if (!activeMedia.length) return;

        activeSlide =
            (index + activeMedia.length) %
            activeMedia.length;

        const track = $("#carouselTrack");

        track.replaceChildren();

        const source = activeMedia[activeSlide];

        let element;

        if (isVideo(source)) {

            element = document.createElement("iframe");

            element.src = source;
            element.title = "Project video";

            element.allow =
                "accelerometer; autoplay; clipboard-write; " +
                "encrypted-media; gyroscope; picture-in-picture";

            element.allowFullscreen = true;

        } else {

            element = document.createElement("img");

            element.src = source;

            element.alt =
                `Project image ${activeSlide + 1}`;
        }

        element.className = "active";

        track.appendChild(element);

        // Hide arrows for single-image projects
        document.querySelectorAll(".arrow").forEach(arrow => {
            arrow.hidden = activeMedia.length < 2;
        });
    }

    function nextSlide() {
        showSlide(activeSlide + 1);
    }

    function prevSlide() {
        showSlide(activeSlide - 1);
    }

    function closeModal() {

        const modal = $("#modal");

        if (!modal) return;

        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modal-open");

        // Stops video playback
        $("#carouselTrack")?.replaceChildren();

        if (lastFocus) {
            lastFocus.focus();
        }

        updateFloatingNext();
    }


    /* =========================================
    10. MOBILE NAVIGATION
    ========================================= */

    function toggleMenu() {

        const nav = $("#navMenu");
        const button = $(".hamburger");

        if (!nav) return;

        const isOpen = nav.classList.toggle("open");

        if (button) {

            button.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            button.textContent = isOpen ? "×" : "☰";
        }
    }

    function setupNavigation() {

        // Close mobile menu after choosing a link
        document.querySelectorAll("#navMenu a").forEach(link => {

            link.addEventListener("click", () => {

                const nav = $("#navMenu");
                const button = $(".hamburger");

                nav?.classList.remove("open");

                if (button) {
                    button.setAttribute("aria-expanded", "false");
                    button.textContent = "☰";
                }
            });
        });

        // Escape key and carousel keyboard controls
        document.addEventListener("keydown", event => {

            if (!document.body.classList.contains("modal-open")) {
                return;
            }

            if (event.key === "Escape") {
                closeModal();
            }

            if (event.key === "ArrowLeft") {
                prevSlide();
            }

            if (event.key === "ArrowRight") {
                nextSlide();
            }
        });
    }


    /* =========================================
    11. DEMO REEL SOUND
    ========================================= */

    function setupReelSound() {

        const video = $("#landingReel");
        const button = $("#reelSound");

        if (!video || !button) return;

        // Autoplay starts muted
        video.muted = true;

        button.addEventListener("click", () => {

            video.muted = !video.muted;

            const soundOn = !video.muted;

            button.textContent = soundOn
                ? "Sound On"
                : "Sound Off";

            button.setAttribute(
                "aria-pressed",
                String(soundOn)
            );

            button.setAttribute(
                "aria-label",
                soundOn
                    ? "Mute demo reel"
                    : "Turn on demo reel sound"
            );
        });
    }


    /* =========================================
    12. FLOATING SECTION NAVIGATION

    Each item contains:
    - Current section ID
    - Label for the NEXT section

    The final section has no next destination.
    ========================================= */

    const sectionOrder = [

        ["demo", "About"],

        ["about", "Animation"],

        ["animation", "3D Art"],

        ["3d", "Games"],

        ["games", "Illustration"],

        ["concept", "Graphic Design"],

        ["design", "Traditional Art"],

        ["traditional", "Websites"],

        ["websites", "Digital Humans"],

        ["digitalhumans", "Digital Twins"],

        ["digitaltwins", "Contact"],

        ["contact", null]

    ];


    /* =========================================
    13. UPDATE FLOATING BUTTON
    ========================================= */

    function updateFloatingNext() {

        const button = $("#floatingNext");
        const label = $("#floatingNextLabel");

        if (!button || !label) return;

        // Hide during project modal
        if (document.body.classList.contains("modal-open")) {
            button.hidden = true;
            return;
        }

        /*
        Check a point about 38% down the viewport.

        This makes the button update as a new
        section moves into the viewing area,
        instead of waiting for its bottom.
        */

        const probe = window.innerHeight * 0.38;

        let currentIndex = -1;

        sectionOrder.forEach(([sectionId], index) => {

            const section =
                document.getElementById(sectionId);

            if (!section) return;

            const top =
                section.getBoundingClientRect().top;

            if (top <= probe) {
                currentIndex = index;
            }
        });

        // At the top of the page
        if (currentIndex < 0) {
            currentIndex = 0;
        }

        const nextName =
            sectionOrder[currentIndex]?.[1];

        // No next section: hide at Contact
        if (!nextName) {
            button.hidden = true;
            return;
        }

        const nextSection =
            sectionOrder[currentIndex + 1];

        if (!nextSection) {
            button.hidden = true;
            return;
        }

        const nextId = nextSection[0];

        // Update button destination
        button.href = "#" + nextId;

        // Update displayed text
        label.textContent = "Continue to " + nextName;

        button.hidden = false;
    }


    /* =========================================
    14. INITIALIZE WEBSITE
    ========================================= */

    function initializePortfolio() {

        // Create all project cards
        renderProjects();

        // Navigation
        setupNavigation();

        // Demo reel
        setupReelSound();

        // Floating next button
        updateFloatingNext();

        // Update button while scrolling
        window.addEventListener(
            "scroll",
            updateFloatingNext,
            { passive: true }
        );

        // Recalculate masonry and floating button
        window.addEventListener("resize", () => {

            requestAnimationFrame(resizeAll);

            updateFloatingNext();

        }, { passive: true });

        // Recalculate masonry when images load
        document.querySelectorAll(".card img").forEach(image => {

            image.addEventListener("load", () => {
                requestAnimationFrame(resizeAll);
            });

        });

        // Final layout update after assets load
        window.addEventListener("load", () => {

            resizeAll();

            updateFloatingNext();

        }, { once: true });
    }


    /* =========================================
    15. START
    ========================================= */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initializePortfolio
        );

    } else {

        initializePortfolio();

    }
