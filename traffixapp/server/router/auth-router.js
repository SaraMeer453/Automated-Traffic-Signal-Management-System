const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model
const jwt = require('jsonwebtoken'); // Import jsonwebtoken
const bcrypt = require('bcryptjs'); // Import bcryptjs

// Sign-up route
router.post('/signup', async (req, res) => {
    try {
        const { username, employeeId, email, cnic, password, confirmPassword, area, sector } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Check if employeeId already exists
        const existingEmployeeId = await User.findOne({ employeeId });
        if (existingEmployeeId) {
            return res.status(400).json({ message: 'Employee ID already exists' });
        }

        // Hash the password
         const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //const hashedPassword = await bcryptjs.hash(password, 10)

        // Create a new user instance with the hashed password
        const newUser = new User({
            username,
            employeeId,  // Add employeeId
            email,
            cnic,
            password: hashedPassword,  // Store hashed password
            area,
            sector,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error during sign-up:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login route
// Login route
router.post('/login', async (req, res) => {
    console.log('hey');

    try {
        const { email, password } = req.body;


        console.log('Login attempt:', { email, password });
console.log('hello');
        // Check if the user exists
        
        // const user = await User.findOne({ email });
        // if (!user) {
            
        //     return res.status(400).json({ message: 'Invalid email or password' });
        // }

        // // Compare the provided password with the hashed password in the database
        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) {
        //     return res.status(400).json({ message: 'Invalid email or password' });
        // }
     //   console.log('password: ',password);
       // console.log('user.password: ', user.password);

        // User.findOne({ email }, (err, user) => {
        //     if (err) {
        //         return res.status(500).json({ message: 'Internal server error' });
        //     }
        
        //     if (!user) {
        //         return res.status(400).json({ message: 'Invalid email or password' });
        //     }
        //   //  console.log('password: ', password);
        //   //  console.log('user.password: ', user.password);
        //     // Compare the provided password with the hashed password in the database
        //  /*   bcrypt.compare(password, user.password, (err, isMatch) => { */
        //         // console.log('password: ', password);
        //         // console.log('user.password: ', user.password);
        //         console.log('isMatch: ', isMatch);

        //         if (err) {
        //             return res.status(500).json({ message: 'Internal server error' });
        //         }
        
        //         if (!isMatch) {
        //             return res.status(400).json({ message: 'Invalid email or password' });
        //         }
        
        //         // If the email and password match, proceed with your logic here (e.g., generating a token)
        //         res.status(200).json({ message: 'Login successful' });
        //     });
        // });
        

        /* KALSOOM'S CODE */
        console.log('hi');
        const guest = await User.findOne({ email })
        if (!guest) {
            return res.status(200).send({
                success: false,
                message: 'No registered User with this Email'
            })
        }

        console.log('guest', guest);
        console.log('password: ', password);
        console.log('guest.password: ', guest.password);
        const matchPassword = await bcrypt.compare(password, guest.password)
        console.log(matchPassword);
        if (!matchPassword) {
            return res.status(401).send({
                success: false,
                message: 'Invalid Email or Password'
            })
        }
        /* */

        // Generate a JWT token
        const token = jwt.sign({ id: guest._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // Respond with the token
        res.json({ token });
    } 
    catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Get the users from the db
router.get('/accounts', async (req, res) => {
    try {
        const users = await User.find(); // Get all users from the database
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update user
router.put('/accounts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete user
router.delete('/accounts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.json({ message: 'User deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
