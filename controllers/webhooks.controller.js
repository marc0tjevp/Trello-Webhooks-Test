let post = (req, res) => {
    console.log(req)
    res.status(200).json({
        "message": "example route"
    }).end()
}

module.exports = {
    post
}