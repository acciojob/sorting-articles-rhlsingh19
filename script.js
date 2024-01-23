//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    // Function to sort the articles without considering "a", "an", "the"
    function sortArticles(articles) {
        const ignoreWords = ["a", "an", "the"];
        return articles.sort((a, b) => {
            const aTitle = a.replace(/^(a|an|the) /i, "");
            const bTitle = b.replace(/^(a|an|the) /i, "");
            return aTitle.localeCompare(bTitle);
        });
    }

    // Get the sorted articles
    const sortedBands = sortArticles(bands);

    // Display the sorted articles in the unordered list
    const bandList = document.getElementById("band");
    sortedBands.forEach(article => {
        const listItem = document.createElement("li");
        listItem.textContent = article;
        bandList.appendChild(listItem);
    });
});