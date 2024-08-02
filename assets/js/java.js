const translations = {
    en: {
        heading: "Hello, World!",
        paragraph: "Welcome to our website."
    },
    fr: {
        heading: "Bonjour, le monde!",
        paragraph: "Bienvenue sur notre site web."
    }
};

function switchLanguage(language) {
    document.getElementById("heading").innerText = translations[language].heading;
    document.getElementById("paragraph").innerText = translations[language].paragraph;
}
