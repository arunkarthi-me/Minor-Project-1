document.getElementById("encryptButton").addEventListener("click", async () => {
    const newPassword = document.getElementById("newPassword").value;

    try {
        // Derive an encryption key using a predefined salt and iterations
        const keyMaterial = await crypto.subtle.importKey(
            "raw",
            new TextEncoder().encode("predefined_salt"), // Use a predefined salt
            {
                name: "PBKDF2",
            },
            false,
            ["deriveKey"]
        );

        const encryptionKey = await crypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt: new TextEncoder().encode("salt123"), // Use a unique salt for each user.
                iterations: 100000,
                hash: "SHA-256",
            },
            keyMaterial,
            {
                name: "AES-GCM",
                length: 256,
            },
            true,
            ["encrypt", "decrypt"]
        );

        // Encode the new password and encrypt it
        const encodedNewPassword = new TextEncoder().encode(newPassword);
        const encryptedPassword = await crypto.subtle.encrypt(
            {
                name: "AES-GCM",
                iv: crypto.getRandomValues(new Uint8Array(12)),
            },
            encryptionKey,
            encodedNewPassword
        );

        // Display the encrypted password or handle it as needed
        document.getElementById("output").innerText = `Encrypted Password: ${btoa(
            String.fromCharCode(...new Uint8Array(encryptedPassword))
        )}`;
    } catch (error) {
        document.getElementById("output").innerText = "Encryption failed.";
    }
});