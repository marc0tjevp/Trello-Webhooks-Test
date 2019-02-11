let post = (req, res) => {
    console.log(req.body)
    // console.log("Name: " + req.body.model.name + " | Action: " + req.body.action.type + " | By: " + req.body.action.memberCreator.fullName)
    res.status(200).json({
        "message": "example route"
    }).end()
}

module.exports = {
    post
}