const User = require('../models/userModel')
const mongoose = require('mongoose')
const { hashPassword, comparePassword} = require('../helpers/auth')

function isValidNameFormat(name) {
    const nameRegex = /^[A-Za-z]+$/;
    const isValid = nameRegex.test(name);
    console.log(`${name} is valid: ${isValid}`);
    return isValid;
  }
 
//Register User
const createUser = async(req,res) => {
    try {
        const{first_name,last_name,contact_no,email_id,password,date_of_birth}=req.body;
        //check if everything is entered
        if(!first_name){
            return res.json(
                {
                    error:'Please provide the first name' 
                }
            )
        };
        if(!isValidNameFormat(first_name)){
            return res.json(
                {
                    error:'Please provide valid first name' 
                }
            )
        };
        

        if(!last_name){
            return res.json(
                {
                    error:'Please provide the last name' 
                }
            )
        };
        if(!isValidNameFormat(last_name)){
            return res.json(
                {
                    error:'Please provide valid last name' 
                }
            )
        };

        if(!contact_no){
            return res.json(
                {
                    error:'Please provide the contact number' 
                }
            )
        };
        const contactNoExist = await User.findOne({contact_no})
        if(!email_id){
            return res.json(
                {
                    error:'Please provide the email id' 
                }
            )
        };
        const emailExist = await User.findOne({email_id})
        if(emailExist){
            return res.json({
                error:'Email already exists'

            })
        }
        
        if(!date_of_birth){
            return res.json(
                {
                    error:'Please provide the DOB' 
                }
            )
        };
        const hashedPassword = await hashPassword(password)
        const user = await User.create({first_name,
                                        last_name,
                                        contact_no,
                                        email_id,
                                        password:hashedPassword,
                                        date_of_birth})
        return res.json(user)
    } catch (error) {
        console.log(error)
        
    }
}


//Login User
const userLogin = async (req, res) => {
    try {
        const { email_id, password } = req.body;
        const user = await User.findOne({ email_id });

        if (!user) {
            return res.json({
                error: 'No user found'
            });
        }

        const match = await comparePassword(password, user.password);

        if (match) {
            res.json('Logged In');
        } else {
            res.json({
                error: 'Invalid password'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};


module.exports = {
    createUser,
    userLogin,
}