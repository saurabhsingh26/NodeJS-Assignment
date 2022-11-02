const Student = require('../../../models/student');
module.exports.create = async function(req,res){
    try{
        const student = await Student.create(req.body);
        return res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: {
                student
            }
        })
    }catch(err){
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}
module.exports.allStudents = async function(req,res){
    try{
        const students = await Student.find({});
        return res.status(200).json({
            success: true,
            message: "List of all students",
            students: students,
        })


    }catch(error){
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
}

module.exports.studentById = async function(req,res){
    try{
        const students = await Student.findById(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Student by ID",
            students: students,
        })


    }catch(error){
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
}
module.exports.update = async function(req,res){
    try{
        const students = await Student.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true})
        console.log(students);
        return res.status(200).json({
            success: true,
            message: "Student details updated",
            students: students,
        })


    }catch(error){
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
}

module.exports.delete = async function(req,res){
    try{
        const students = await Student.findByIdAndDelete(req.params.id)
        console.log(students);
        return res.status(200).json({
            success: true,
            message: "Student deleted successfully",
        })


    }catch(error){
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
}

