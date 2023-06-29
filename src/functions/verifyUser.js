module.exports = (email, password) =>{
    
    let regex = {
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,       
    };

    const errors = [];
    if(email === undefined || email === null || !email || !regex.email.test(email)) errors.push({error: "Email inválido"});
    
    if(password === undefined || password === null || !password || password?.length < 6) errors.push({error: "Senha inválida"});

    return errors?.length >= 1 ? errors : {email, password};
};