//this function is publicly available to my routes files. 
//whenever server that is localHost:8000 is fired on browser, then only controller starts and response is sent to browser to be displayed
module.exports.home= function(req,res){
    console.log("controller started");
    //Data sent to browser
    //return res.end('<h1>To Do List App</h1>');

    //res.render is used to render a view and sends the rendered HTML string to the browser.
    return res.render('home',{
        title:"Home"
    });
};
