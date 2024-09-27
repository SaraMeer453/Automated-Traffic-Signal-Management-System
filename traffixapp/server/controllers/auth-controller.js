

//Home page logic
const home = async(req, res) => {
    try {
        res
        .status(200)
        .send("Welcome to TraffiX hehe");

    }
    catch(error){
        console.log(error);
    }
}
module.exports = {home }