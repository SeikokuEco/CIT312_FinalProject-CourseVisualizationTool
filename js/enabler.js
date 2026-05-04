const answers = {
    q1: ["Correct!", "Not Quite. SQL is used to write and interact with databases", "Not Quite. Java is a Programming language that doesn't add interactivity to the web."],
    q4: ["Not Quite! Cryptography is the practice of securing communication by converting plain text into ciphertext, ensuring that only authorized parties can access the information.", "Correct!", "Not Quite! Photography is the art, application, and practice of creating images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film."],
    q7: ["Not Quite! Visual Studio Code is an integrated development environment developed by Microsoft for Windows, Linux, macOS and web browsers. It is popular among developers to write code.", "Correct!", "Not Quite! Git is a distributed version control software system that is capable of managing versions of source code or data. It is often used to control source code by programmers who are developing software collaboratively."],
    q10: ["Not Quite! The INSERT statement is used to *insert* data into a table", "Not Quite! The UPDATE statement is used to update or modify one or more records in a table.", "Correct!", "Not Quite! The DELETE statment is used to delete existing records in a table."]
};

// button questions (1, 4, 7, 10)
for (let i of [1,4,7,10]) {
    // adds event listener for every question in the numbered list in the for loop
    document.querySelectorAll(`.q${i}`).forEach(btn => {
        btn.addEventListener("click", (e) => {
            let choice = e.target.dataset.choice;
            // on click, it changes the text content to display correct/incorrect
            document.querySelector(`#q${i}_answer`).textContent =
                answers[`q${i}`][choice];
        });
    });
}

// checkbox questions (2, 5, 8)
for (let i of [2,5,8]) {
    document.querySelector(`#q${i}_check`).addEventListener("click", () => {
        let correct = document.querySelectorAll(`.q${i}[correct]`);
        let checked = document.querySelectorAll(`.q${i}:checked`);

        // ensures enough are checked and not too many are checked
        if (checked.length != correct.length) {
            return document.querySelector(`#q${i}_answer`).textContent = 
                `Maximum of ${correct.length} is required`;
        }

        // gives user a score based on what they selected
        let score = 0;
        correct.forEach(c => {
            checked.forEach(ch => {
                if (c === ch) score++;
            });
        });

        document.querySelector(`#q${i}_answer`).textContent =
            `Score: ${score}/${correct.length}`;
    });
}

// radio button questions (3, 6, 9)
for (let i of [3,6,9]) {
    document.querySelector(`#q${i}_check`).addEventListener("click", () => {
        let selected = document.querySelector(`input[name="q${i}"]:checked`);
        // checks if any of the selected ids are the correct ones
        if (['q3c', 'q6a', 'q9b'].includes(selected.id)) {
            document.querySelector(`#q${i}_answer`).textContent =
                `Correct!`;
            return;
        } else {

            // otherwise just say they were wrong in a nicer way
            document.querySelector(`#q${i}_answer`).textContent =
                `That's not quite right!`
        }
        
    });
}
