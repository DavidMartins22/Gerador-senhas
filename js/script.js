document.addEventListener("DOMContentLoaded", () => {
    const lengthSlider = document.getElementById("length");
    const lengthValue = document.getElementById("lengthValue");
    const passwordInput = document.getElementById("password");

    const uppercase = document.getElementById("uppercase");
    const lowercase = document.getElementById("lowercase");
    const numbers = document.getElementById("numbers");
    const symbols = document.getElementById("symbols");

    const generateBtn = document.getElementById("generate");
    const copyBtn = document.getElementById("copy");

    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}[]<>?/|";

    lengthSlider.addEventListener("input", () => {
        lengthValue.textContent = lengthSlider.value;
    });

    generateBtn.addEventListener("click", () => {
        let chars = "";
        if (uppercase.checked) chars += upperChars;
        if (lowercase.checked) chars += lowerChars;
        if (numbers.checked) chars += numberChars;
        if (symbols.checked) chars += symbolChars;

        const length = parseInt(lengthSlider.value);
        let password = "";

        if (chars.length === 0) {
            alert("Selecione pelo menos uma opção.");
            return;
        }

        for (let i = 0; i < length; i++) {
            password += chars[Math.floor(Math.random() * chars.length)];
        }

        passwordInput.value = password;
    });

    copyBtn.addEventListener("click", () => {
        passwordInput.select();
        document.execCommand("copy");
        alert("Senha copiada!");
    });
});
