var express	 		  = require("express"),
app	      			  = express(),
bodyParser 			  = require("body-parser");

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/login",function(req,res){
	res.render("login");
})
app.get("/",function(req,res){
	res.render("dashboard");
})
app.post("/login",function(req,res){
	res.render("dashboard");
})
app.get("/employee",function(req,res){
	res.render("./employee/statusEmployee");
})
app.post("/employee",function(req,res){
	var status=req.body.status;
	res.render("./employee/inputEmployee",{status:status});
})
app.listen(3000,function(){
	console.log("Server has started")
})

