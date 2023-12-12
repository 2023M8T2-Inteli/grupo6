const node = require('../nodes/llm.js');
const ouputNode = require('../nodes/output.js');

    const getllm = async (req, res) => {
        if (req.params) console.log(req.params);
        const { outputResponse } = req.params;
        
        try {
            outputResponse 
            res.json(response);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    const postMsg = async (req, res) => {
        console.log(req.body);
        const {msg} = req.body.msg;
        
        try {
            const response = await components.postComponents(llm, description, quantity);
            res.json(response);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
