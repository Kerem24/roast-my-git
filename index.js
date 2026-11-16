// initial
const username = document.querySelector('#username');
const button = document.querySelector('#submit');
const container = document.querySelector('.container');

// inside .card
const verdict = document.createElement('p');
const title = document.createElement('p');

button.addEventListener('click', submit);
// if button is clicked, execute the function

username.value = username.value.trim(); // trim this

let displayName; // we will use this just right now
function submit() {
    displayName = username.value || "Anonymous";
    // if username.value.trim() is falsy, set it to Anonymous.
    // if not, remain it like that

    console.log("Display name was set to: " + displayName)
    // just a little developer check

    // style changes below here
    container.classList.add('expanded');
    // turn it to '.container expanded' see style.css for styles

    if (!document.querySelector('.card')) {
        // if button was clicked for the first time, then do:


        // expanding our div
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.flexDirection = 'column';
        container.append(card); // turn .card into .container's child

        // title
        title.setAttribute('id', 'title')
        card.appendChild(title)
        title.textContent = `VERDICT FOR ${displayName.toUpperCase()}`;

        // verdict
        verdict.setAttribute('id', 'verdict');
        card.appendChild(verdict);

        verdict.textContent = `${roast(displayName)}`
        // call the roast() function everytime button is clicked


        // a little animation
        // I found at some reddit page :P
        verdict.getAnimations().forEach(anim => anim.cancel());
        verdict.animate(
            [
                { opacity: 0, transform: 'translateY(10px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ],
            {
                duration: 350,
                easing: 'ease-out'
            }
        );

    }else {
        verdict.textContent = `${roast()}`

    }
}


function roast() {
    // unfortunately, I had to use AI to generate this array because I didn't have much time to create my own sentences
    const roasts = (displayName) => [
        `${displayName}, congrats on finishing The Odin Project Foundations. You are now legally allowed to put 'Full-Stack Developer' in your LinkedIn bio.`,
        `I looked at ${displayName}'s GitHub. It’s a graveyard of 14 'initial commit' repos and one calculator app that divides by zero.`,
        `${displayName} still Googles 'how to center a div' at least three times a week, yet wants senior developer compensation.`,
        `Your CSS is held together by '!important', prayers, and 47 nested Flexbox containers, ${displayName}.`,
        `${displayName}'s commit messages go from 'feat: build authentication' to 'fix', 'fix again', and 'please work'.`,
        `If ${displayName} spent half as much time coding as they do customizing their VS Code theme, they'd own a tech unicorn by now.`,
        `${displayName} thinks using 'console.log("here")' is an enterprise-grade debugging strategy.`,
        `Legend says ${displayName} once opened Vim by accident in 2024 and is still trapped inside trying to exit.`,
        `${displayName} deleted 'node_modules' once and felt like a senior DevOps engineer clearing server cache.`,
        `Let's be honest, ${displayName}: 80% of your Etch-a-Sketch project was copied from StackOverflow while crying.`,
        `${displayName} reads documentation only after spending 6 hours trying to guess how the function works.`,
        `Your variable names look like keyboard smashes: 'temp2', 'finalData_REAL', and 'idkWhyThisWorks', ${displayName}.`,
        `${displayName} pushed directly to the 'main' branch on a Friday afternoon and went to sleep peacefully. Absolute menace.`,
        `According to ${displayName}'s browser history, they still don't know the difference between 'margin' and 'padding' without inspecting element.`,
        `${displayName} calls themselves a 'problem solver', mostly because they create 90% of the bugs they fix.`,
        `Watching ${displayName} resolve a Git merge conflict is like watching someone defuse a bomb with a sledgehammer.`,
        `${displayName} has 64 open browser tabs, 61 of which are MDN Web Docs pages they haven't actually read.`,
        `Your portfolio website has a 'Dark Mode' toggle, ${displayName}, which officially makes you overqualified for NASA.`,
        `${displayName} spent 4 hours picking a Google Font for a landing page that literally zero people will ever visit.`,
        `Whenever ${displayName}'s code works on the first try, they immediately get suspicious and break it just to be sure.`,
        `${displayName} treats 'git push --force' like a stress ball.`,
        `You finished Rock Paper Scissors in the console, ${displayName}. Calm down, you didn't invent artificial intelligence.`,
        `${displayName} writes comments like '// increments i by 1' right above 'i++', just in case future ${displayName} forgets how math works.`,
        `Your responsive design strategy is just resizing the browser window aggressively and hoping nobody owns an iPad, ${displayName}.`,
        `${displayName} blames JavaScript's 'weird behavior' every time they forget a closing curly brace.`,
        `If copying and pasting from tutorials were an Olympic sport, ${displayName} would have three gold medals by now.`,
        `${displayName} installed 12 VS Code extensions to boost productivity, and now their laptop sounds like a jet engine.`,
        `You don't write clean code, ${displayName}—you write modern art that only makes sense to you for 48 hours.`,
        `${displayName} thinks adding a CSS hover transition makes a terrible UI look 'minimalist and modern'.`,
        `Your GitHub contribution graph looks like a game of Tetris where you're losing badly, ${displayName}.`,
        `${displayName} spent two days automating a 5-minute task and called it 'engineering efficiency'.`,
        `Every time ${displayName} says 'it works on my machine', a QA engineer loses their wings.`,
        `${displayName}'s JavaScript logic relies heavily on 'if (true)' statements and blind optimism.`,
        `You put 'Proficient in Git' on your resume, ${displayName}, even though you re-clone the entire repo whenever you mess up a branch.`,
        `${displayName} is one semicolon away from abandoning tech completely and becoming a goat farmer.`
    ];
    const p = roasts(displayName);
    const random = Math.floor(Math.random() * p.length); // random array index

    const roast = p[random]; // random index selector
    return roast // returning the 'roast'
}

