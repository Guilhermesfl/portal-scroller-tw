const twitter_scroller = require("../../../index.js");

class ScrollerController {
  async index(req, res) {
    const tweets = await twitter_scroller.main('', 2019, 6, 1,
      2019, 6, 3);
    return res.json(tweets);
  }
}

export default new ScrollerController();