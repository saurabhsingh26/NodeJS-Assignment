const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    dept: {
        type: String,
        require: true
    },
    doj: {
        type: String,
        require: true
    }
},{
    timestamp: true,
});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;