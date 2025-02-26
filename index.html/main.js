// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {

    const words = ["SHAIK SANDHANI", "WEB DEVELOPER", "APP DEVELOPER", "PYTHON DEVELOPER"];
    let wordIndex = 0;
    const wordWrapper = document.querySelector(".cd-words-wrapper");
    
    // Function to change the text dynamically
    function changeWord() {
        const currentWord = words[wordIndex];
        const allWords = wordWrapper.getElementsByTagName("b");

        // Fade out current word
        for (let i = 0; i < allWords.length; i++) {
            allWords[i].classList.remove("is-visible");
            allWords[i].classList.add("is-hidden");
        }

        // Wait for the fade-out transition to complete and then add the new word
        setTimeout(() => {
            const newWord = document.createElement('b');
            newWord.textContent = currentWord;
            wordWrapper.appendChild(newWord);
            newWord.classList.add('is-visible');
        }, 300); // Delay before adding the new word

        // Update word index for next iteration
        wordIndex = (wordIndex + 1) % words.length;
    }

    // Change the word every 3 seconds
    setInterval(changeWord, 3000);

});
