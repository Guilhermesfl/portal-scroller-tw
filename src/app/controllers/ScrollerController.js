const twitter_scroller = require("../../../index.js");

class ScrollerController {
  async index(req, res) {
    const {
      startYear,
      startMonth,
      startDay,
      endYear,
      endMonth,
      endDay,
      query
    } = req.query;
    let { username } = req.query;
    username = username ? username : '';
    const tweets = await twitter_scroller.main(username, parseInt(startYear), parseInt(startMonth), parseInt(startDay),
    parseInt(endYear), parseInt(endMonth), parseInt(endDay), query);
    return res.json(tweets);
  }
}

export default new ScrollerController();