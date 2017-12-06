var express	 		  = require("express"),
app	      			  = express(),
bodyParser 			  = require("body-parser");

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
	res.render("dashboard");
})
app.get("/login",(req,res)=>{
	res.render("login");
})
app.post("/login",(req,res)=>{
	res.redirect("/");
})
app.get("/employee",(req,res)=>{
	res.render("./employee/statusEmployee");
})
app.post("/employee",(req,res)=>{
	var status=req.body.status;
	res.render("./employee/inputEmployee",{status:status});
})
app.listen(3000,()=>{
	console.log("Server has started")
})

