var express = require('express');
var router = express.Router();
var memberCtl = require('../controllers/member');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render("member", {});
});

router.get('/data', function (req, res, next) {
  let reqQuery = req.query;
  console.log("11111112222111111:",reqQuery)
  //console.log("memberCtl.getMembers:",memberCtl.getMembers)
  memberCtl.getMembers(reqQuery)
    .then(function (doc) {
      return res.json(doc);
    })["catch"](function (err) {
      return res.json({
        "status": "fail",
        "failMessage": err.message
      })
    })
});

router.post('/register', function (req, res, next) {
  let reqBody = req.body;
  let firstName = req.body.firstName;
  let regDate = req.body.regDate;
  let mmoney=req.body.mmoney;
  var data = {mnickname:firstName,mrename:"jun",mage:170,mgrade:1,mmoney:mmoney,mregdate:regDate};
  memberCtl.createMember(data)
    .then(function (result) {
      return res.json({ status: "success", "failMessage": "", result: result });
    })["catch"](function (err) {
      return res.json({
        "status": "fail",
        "failMessage": err.message,
        "result": ""
      })
    })
});

router.delete('/:id', function (req, res) {
  var mid = req.params.mid;
  return memberCtl.deleteMemberByMId(mid)
    .then(function (data) {
      return res.json({ 'status': 'success', 'result': data });
    })["catch"](function (err) {
      return res.json({ 'status': 'fail', 'result': JSON.stringify(err) });
    })
});

module.exports = router;
