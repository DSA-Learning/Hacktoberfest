const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// for storing all the objects of compose page in array 
const posts=[];

app.get("/",function(req,res){
  res.render('home',
  {Contentofhome:homeStartingContent,
    output:posts}
    );
})

app.get("/about",function(req,res){
  res.render('about',{Contentofabout:aboutContent});
})

app.get("/contact",function(req,res){
  res.render('contact',{Contentofcontact:contactContent});
})

app.get("/compose",function(req,res){
  res.render('compose');
})


// putting the inputs that come in compose page to a global array posts 
app.post("/compose",function(req,res){
  const post={
    title:req.body.titleinput,
    post:req.body.postinput
  };
  posts.push(post);
  res.redirect("/");
})


// THis will create a new page for each blog which is composed and to go to the new page type /posts/title-name 
app.get("/posts/:anything",function(req,res){
  // this will take the input which is written at the place of anything and convert in lower case using lodash
 const requestedTitle = _.lowerFirst(req.params.anything);

//  Now we will compare this title which is being searched with the title of already composed 
 posts.forEach(function(post){
   const storedTitle = _.lowerFirst(post.title);
   if(storedTitle==requestedTitle){
    //  if the titles get matched it automatically creates a new page which is in post file 
     res.render("post",{
       title:post.title,
       para: post.post
     });

   }
 })
})




app.listen(3000, function() {
  console.log("Server started on port 3000");
});
