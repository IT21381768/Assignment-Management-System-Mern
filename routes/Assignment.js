const express = require('express');
const assignmentRoutes = express.Router();

let Assignment = require('../models/Assignment');

assignmentRoutes.route('/add').post(function (req, res) {
    let assignment = new Assignment(req.body);
    assignment.save()
        .then(assignment => {
        res.status(200).json({'assignment': 'Assignment in added successfully'});
        })
        .catch(err => {
        res.status(400).send("Unable to save to database");
        });
    }
);

assignmentRoutes.route('/').get(function (req, res) {
    Assignment.find(function(err, assignments){
    if(err){
        console.log(err);
    }
    else {
        res.json(assignments);
    }
    });
});

assignmentRoutes.route('/delete/:id').get(function (req, res) {
    Assignment.findByIdAndRemove({_id: req.params.id}, function(err, assignment){
        if(err) res.json(err);
        else res.json('Successfully removed');
    }
    );
});

module.exports = assignmentRoutes;