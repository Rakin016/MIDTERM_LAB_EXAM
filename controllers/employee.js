var express 	= require('express');
var employeeModel 	= require('../models/employee');
var router 		= express.Router();

router.get('/', function(req, res){
    if(req.session.username!=null){
        employeeModel.get(req.session.empId,function (results){
            var data ={results:results}
            console.log(data);
            res.render('employee/index',data);
        });

    }
    else {
        res.redirect('/login');
    }

});

module.exports = router;
