class User {
    private name: string;
    username: string;
    password: string;
    constructor(name: string, username: string, password: string) {
        this.name = name;
        this.username = username;
        this.password = password;
    }

    login(username: string, password: string) {
        if(username === this.username && password === this.password) {
            console.log('Login Successfully')
        } else {
            console.log('Authentication Failed!!');
        }
    }

    setPassword(newPassword: string) {
        this.password = newPassword
    }
};
let user1 = new User('user1', 'user1', '123456');

console.log(user1.username);
user1.login('user1', '123456')