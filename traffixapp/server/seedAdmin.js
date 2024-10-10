// seedAdmin.js
const mongoose = require('mongoose');
const User = require('./models/User');

async function seedAdmin() {
    await mongoose.connect('mongodb+srv://i210644:GdBjlhUnmpZOVa4e@traffix-database.ve2gr.mongodb.net/?retryWrites=true&w=majority&appName=Traffix-Database');

    const adminExists = await User.findOne({ email: 'admin@police.gov.pk' });
    if (!adminExists) {
        const admin = new User({
            firstName: 'Sara',
            lastName: 'admin',
            email: 'admin@police.gov.pk',
            cnic: '1234567890123', // Replace with a valid CNIC
            phoneNumber: '03016111333',
            password: 'admin1', // This will be hashed
            area: 'Islamabad',
            sector: 'Head Office',
            isAdmin: true, // Mark as admin
            employeeId: 'isb-000' // Add the employee ID here

        });
        
        await admin.save();
        console.log('Admin user created successfully.');
    } else {
        console.log('Admin user already exists.');
    }

    mongoose.connection.close();
}

seedAdmin().catch(err => console.error(err));
