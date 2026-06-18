export const AuthService = {
    async signup(name : string, email : string, password : string) {
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

        return {
            message: "Signup successful",
        };
    },

    async signin(email : string, password : string) {
        console.log("Email:", email);
        console.log("Password:", password);

        return {
            message: "Signin successful",
        };
    }
}