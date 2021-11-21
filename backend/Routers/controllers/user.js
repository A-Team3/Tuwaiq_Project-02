const {user} = require('../routes/data')


const getAllUser = (req,res)=>{
    // console.log("All users")
    res.send(user)
}

const getUser = (req,res)=>{
    // console.log(in)
    console.log(typeof user)
    console.log(req.params.id)
    // const foundUser = user.find((elem) =>{
    //     return elem.id === req.params.id 
    // })
    const foundUser = user.find( ({ id }) => id === parseInt(req.params.id) );
    const result = user.find( ({ id }) => id === parseInt(req.params.id));
    console.log(result)

    console.log(foundUser);
    /* .find => element || undefined
    .filter => [element1, element2], || []
     */

    if(foundUser){
    res.send(foundUser)
    return
    }
    res.status(404).send("user not found")
}

const addNewUser = (req,res)=>{
    //get the length of users array, add 1 to the length, put it in id
    const addedUser = {
        //id:req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        age: req.body.age,
        city:req.body.city,
        platoon:req.body.platoon,
        numberphone: req.body.numberphone

    }

    user.push(addedUser)

    res.status(201).send(addedUser);
}

const updateUser = (req,res)=>{
    const userId = req.query.id
    user.forEach((elem,i)=>{
        if(i == userId){
            elem.id = req.body.id;
            elem.firstname = req.body.firstname;
            elem.lastname = req.body.lastname;
            elem.email= req.body.email;
            elem.age= req.body.age;
            elem.city= req.body.city;
            elem.platoon= req.body.platoon;
            elem.numberphone= req.body.numberphone
        }
    })
}

module.exports = {getAllUser,getUser,updateUser,addNewUser}