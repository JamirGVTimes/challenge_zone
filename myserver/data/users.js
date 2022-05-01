import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Jamir Muhumuza",
        email: "muhumuzajamir2016@gmail.com",
        password: bcrypt.hashSync("Admin1234",10),
        isAdmin: true
    },
    {
        name: "Racheal Kabapiina",
        email: "kabapiinaracheal@gmail.com",
        password: bcrypt.hashSync("T100",10),
    },
    
];
export default users;