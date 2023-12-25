//@des create Azure resource
//@route POST /api
//@access public

const createResource = (req, res) => {
  try {
    console.log(req.body);
    res.status(200);
    
  } catch (error) {
    console.log(error);
    return res.status(500).json("internal error");
  }
};

module.exports = {createResource};
