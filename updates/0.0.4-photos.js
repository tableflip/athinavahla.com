var keystone = require('keystone')
var async = require('async')

var Photo = keystone.list('Photo');

module.exports = function(done) {

  var items = [{"file":{"filename":"Agon1_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"agon1_web.jpg","title":"Agon1_web.jpg"},{"file":{"filename":"Agon2_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"agon2_web.jpg","title":"Agon2_web.jpg"},{"file":{"filename":"Agon3_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"agon3_web.jpg","title":"Agon3_web.jpg"},{"file":{"filename":"ByYourLeave1_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"byyourleave1_web.jpg","title":"ByYourLeave1_web.jpg"},{"file":{"filename":"ByYourLeave2_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"byyourleave2_web.jpg","title":"ByYourLeave2_web.jpg"},{"file":{"filename":"ByYourLeave3_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"byyourleave3_web.jpg","title":"ByYourLeave3_web.jpg"},{"file":{"filename":"Fstop1_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"fstop1_web.jpg","title":"Fstop1_web.jpg"},{"file":{"filename":"Fstop2_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"fstop2_web.jpg","title":"Fstop2_web.jpg"},{"file":{"filename":"Fstop3_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"fstop3_web.jpg","title":"Fstop3_web.jpg"},{"file":{"filename":"HouseofKurtz1_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"houseofkurtz1_web.jpg","title":"HouseofKurtz1_web.jpg"},{"file":{"filename":"HouseofKurtz2_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"houseofkurtz2_web.jpg","title":"HouseofKurtz2_web.jpg"},{"file":{"filename":"HouseofKurtz3_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"houseofkurtz3_web.jpg","title":"HouseofKurtz3_web.jpg"},{"file":{"filename":"InPraiseofFolly1_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"inpraiseoffolly1_web.jpg","title":"InPraiseofFolly1_web.jpg"},{"file":{"filename":"InPraiseofFolly2_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"inpraiseoffolly2_web.jpg","title":"InPraiseofFolly2_web.jpg"},{"file":{"filename":"InPraiseofFolly3_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"inpraiseoffolly3_web.jpg","title":"InPraiseofFolly3_web.jpg"},{"file":{"filename":"ListeningPost1_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"listeningpost1_web.jpg","title":"ListeningPost1_web.jpg"},{"file":{"filename":"ListeningPost2_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"listeningpost2_web.jpg","title":"ListeningPost2_web.jpg"},{"file":{"filename":"NGNG001.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"ngng001.jpg","title":"NGNG001.jpg"},{"file":{"filename":"NGNG003.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"ngng003.jpg","title":"NGNG003.jpg"},{"file":{"filename":"NGNG006.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"ngng006.jpg","title":"NGNG006.jpg"},{"file":{"filename":"NGNG007.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"ngng007.jpg","title":"NGNG007.jpg"},{"file":{"filename":"SpacesBetween1_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"spacesbetween1_web.jpg","title":"SpacesBetween1_web.jpg"},{"file":{"filename":"SpacesBetween2_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"spacesbetween2_web.jpg","title":"SpacesBetween2_web.jpg"},{"file":{"filename":"Splinter1_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"splinter1_web.jpg","title":"Splinter1_web.jpg"},{"file":{"filename":"Splinter2_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"splinter2_web.jpg","title":"Splinter2_web.jpg"},{"file":{"filename":"Splinter3_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"splinter3_web.jpg","title":"Splinter3_web.jpg"},{"file":{"filename":"Splinter4_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"splinter4_web.jpg","title":"Splinter4_web.jpg"},{"file":{"filename":"TheWindowsWereWalled1_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"thewindowswerewalled1_web.jpg","title":"TheWindowsWereWalled1_web.jpg"},{"file":{"filename":"TheWindowsWereWalled2_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"thewindowswerewalled2_web.jpg","title":"TheWindowsWereWalled2_web.jpg"},{"file":{"filename":"TheWindowsWereWalled3_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"thewindowswerewalled3_web.jpg","title":"TheWindowsWereWalled3_web.jpg"},{"file":{"filename":"WrestlinganAngel1_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"wrestlinganangel1_web.jpg","title":"WrestlinganAngel1_web.jpg"},{"file":{"filename":"WrestlinganAngel2_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"wrestlinganangel2_web.jpg","title":"WrestlinganAngel2_web.jpg"},{"file":{"filename":"WrestlinganAngel3_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"wrestlinganangel3_web.jpg","title":"WrestlinganAngel3_web.jpg"},{"file":{"filename":"in-prep-01.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"in-prep-01.jpg","title":"in-prep-01.jpg"},{"file":{"filename":"in-prep-02.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"in-prep-02.jpg","title":"in-prep-02.jpg"},{"file":{"filename":"in-prep-03.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"in-prep-03.jpg","title":"in-prep-03.jpg"},{"file":{"filename":"knots-01.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"knots-01.jpg","title":"knots-01.jpg"},{"file":{"filename":"knots-02.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"knots-02.jpg","title":"knots-02.jpg"},{"file":{"filename":"knots-03.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"knots-03.jpg","title":"knots-03.jpg"},{"file":{"filename":"knots-04.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"knots-04.jpg","title":"knots-04.jpg"},{"file":{"filename":"meetmarket1.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"meetmarket1.jpg","title":"meetmarket1.jpg"},{"file":{"filename":"n+3objects1_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"n+3objects1_web.jpg","title":"n+3objects1_web.jpg"},{"file":{"filename":"n+3objects2_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"n+3objects2_web.jpg","title":"n+3objects2_web.jpg"},{"file":{"filename":"n+3objects3_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"n+3objects3_web.jpg","title":"n+3objects3_web.jpg"},{"file":{"filename":"n+3objects4_web.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"n+3objects4_web.jpg","title":"n+3objects4_web.jpg"},{"file":{"filename":"splinter-01.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"splinter-01.jpg","title":"splinter-01.jpg"},{"file":{"filename":"splinter-02.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"splinter-02.jpg","title":"splinter-02.jpg"},{"file":{"filename":"splinter-03.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"splinter-03.jpg","title":"splinter-03.jpg"},{"file":{"filename":"strand-01.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"strand-01.jpg","title":"strand-01.jpg"},{"file":{"filename":"strand-02.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"strand-02.jpg","title":"strand-02.jpg"},{"file":{"filename":"strand-03.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"strand-03.jpg","title":"strand-03.jpg"},{"file":{"filename":"strand-04.jpg","path":"/photos","filetype":"image/jpeg"},"slug":"strand-04.jpg","title":"strand-04.jpg"}]

  var tasks = items.map(function(project){
    return function (cb) {
      new Photo.model(project).save(cb)
    }
  })

  async.series(tasks, done)

};