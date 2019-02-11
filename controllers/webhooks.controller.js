let post = (req, res) => {
    console.log(req.body)
    res.status(200).json({
        "message": "example route"
    }).end()
}

module.exports = {
    post
}