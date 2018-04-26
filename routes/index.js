var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Bé tập tính', s1: '', s2: '', kq: ''});

});
/*router.get('/:id1 :id2', function(req, res, next) {
    res.render('/', {s1: req.params.expr,s1: req.params.expr1});
});*/
router.post('/', function(req, res, next){
  var kq = '';
  var s1 = req.body.expr;
  var s2 = req.body.expr1;
  var loiSo1='';
  var loi1=true;
  var loiSo2='';
  var loi2=true;
  //kiem tra la so
  if (isNaN(s1)) {
      loiSo1 = 'Số thứ nhất phải là số';
      loi1=false;
  }
  else {
      s1 = parseFloat(s1, 10);
  }
  if (isNaN(s2)){
      loiSo2 = 'Số thứ hai  phải là số';
      loi2=false;
  }
  else{
      s2 = parseFloat(s2, 10);
  }
  var radio;
  var loiPhepTinh = true;
  radio = req.body.phepToan;
  if (radio === undefined) {
    loiPhepTinh=false;
    var thongBao = 'Cần chọn phép tính';
  }
  else {
      //cong
      if (!radio.localeCompare('cong')) {
          kq = s1 + s2;
          kq = parseFloat(kq, 10);
      }
      ;
      //tru
      if (!radio.localeCompare('tru')) {
          kq = s1 - s2;
          kq = parseFloat(kq, 10);
      }
      ;
      //nhan
      if (!radio.localeCompare('nhan')) {
          kq = s1 * s2;
          kq = parseFloat(kq, 10);
      }
      ;
      //chia
      if (!radio.localeCompare('chia')) {
          kq = s1 / s2;
          kq = parseFloat(kq, 10);
      }
      ;
  }

  res.render('home',{s1,s2, kq,loiPhepTinh,thongBao,loiSo1,loi1,loiSo2,loi2});
});

module.exports = router;
