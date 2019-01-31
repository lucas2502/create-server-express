const router = require("./router");
const nunjucks = require("nunjucks");

module.exports = (server) => {
    server.use(router);
    
    nunjucks.configure("views", {
        autoescape: true,
        express: server,
        watch: true 
    });
};
