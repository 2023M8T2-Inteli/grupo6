const publish = require('../nodes/robot.js');

const getllm = async (req, res) => {
    if (req.params) console.log(req.params);
    const { outputResponse } = req.params;
    
    try {
        outputResponse = await outputResponse.getllm(outputResponse);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postMsg = async (req, res) => {
    console.log(req.body);
    const {msg} = req.body.msg;
    
    try {
        const response = await msg.postMsg(msg);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postLLM = async (req, res) => {
    console.log("Req: ", req.body);
    const msg = req.body.msg;

    publish(msg);
}

module.exports = {
    postLLM,
};