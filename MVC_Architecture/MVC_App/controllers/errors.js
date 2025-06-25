const NotFoundError = (req, res, next)=> {
    //res.status(404).sendFile(path.join(rootDir,  'views', '404error.ejs'));
    res.status(404).render("404error", {pageTitle: "Page Not Found"});
} 

export default NotFoundError;