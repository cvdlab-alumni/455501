var pillar_dx = 0.4;
var pillar_dy = 0.4;
var pillar_dz = 3.0;

var small_pillar_dx = 0.2;
var small_pillar_dy = 0.2;
var small_pillar_dz = 3.0;

var cubic_pillar = CUBOID([pillar_dx, pillar_dy, pillar_dz]);
var small_cubic_pillar = CUBOID([small_pillar_dx, small_pillar_dy, small_pillar_dz]);
var cylindric_pillar = CYL_SURFACE([pillar_dx / 2, pillar_dz])();

var pillar0_1 = cylindric_pillar;

var pillar0_2 = T([0])([4.1])(cylindric_pillar);

var pillar0_3 = T([0])([8])(cylindric_pillar);

var pillar0_4 = T([0])([11.9])(cylindric_pillar);

var pillar0_5 = T([0])([15.8])(cylindric_pillar);

var pillar0_6 = T([1])([7.6])(cylindric_pillar);

var pillar0_7 = T([0,1])([2.0-0.2, 7.4])(cubic_pillar);

var pillar0_8 = T([0,1])([4.1-0.4, 7.4])(cubic_pillar);

var pillar0_9 = T([0,1])([8-0.4, 7.4])(cubic_pillar);

var pillar0_10 = T([0,1])([11.9-0.4, 7.4])(cubic_pillar);

var pillars0 = STRUCT([pillar0_1, pillar0_2, pillar0_3, pillar0_4, pillar0_5, pillar0_6, pillar0_7, pillar0_8, pillar0_9, pillar0_10]);

//DRAW(pillars0);

var pillar1_1 = T([0,1,2])([-0.2,-0.2,3.4])(cubic_pillar);

var pillar1_2 = T([0,1,2])([3.9,-0.2,3.4])(cubic_pillar);

var pillar1_3 = T([0,1,2])([7.8,-0.2,3.4])(cubic_pillar);

var pillar1_4 = T([0,1,2])([11.7,-0.2,3.4])(cubic_pillar);

var pillar1_5 = T([0,1,2])([15.6,-0.2,3.4])(cubic_pillar);

var pillar1_6 = T([0,1,2])([-0.2,7.4,3.4])(cubic_pillar);

var pillar1_7 = T([0,1,2])([3.7,7.4,3.4])(cubic_pillar);

var pillar1_8 = T([0,1,2])([7.6,7.4,3.4])(cubic_pillar);

var pillar1_9 = T([0,1,2])([11.7,7.6,3.4])(cylindric_pillar);

var pillar1_10 = T([0,1,2])([15.4,7.4,3.4])(cubic_pillar);

var pillars1 = STRUCT([pillar1_1, pillar1_2, pillar1_3, pillar1_4, pillar1_5, pillar1_6, pillar1_7, pillar1_8, pillar1_9, pillar1_10]);

//DRAW(pillars1);

var pillar2_1 = T([0,1,2])([-0.2,-0.2,6.8])(cubic_pillar);

var pillar2_2 = T([0,1,2])([3.9,-0.2,6.8])(cubic_pillar);

var pillar2_3 = T([0,1,2])([15.6,-0.2,6.8])(cubic_pillar);

var pillar2_4 = T([0,1,2])([-0.2,7.4,6.8])(cubic_pillar);

var pillar2_5 = T([0,1,2])([3.7,7.4,6.8])(cubic_pillar);

var pillar2_6 = T([0,1,2])([7.6,7.4,6.8])(cubic_pillar);

var pillar2_7 = T([0,1,2])([11.5,7.4,6.8])(cubic_pillar);

var pillar2_8 = T([0,1,2])([15.4,7.4,6.8])(cubic_pillar);

var pillars2 = STRUCT([pillar2_1, pillar2_2, pillar2_3, pillar2_4, pillar2_5, pillar2_6, pillar2_7, pillar2_8]);

//DRAW(pillars2);

var pillar3_1 = T([0,1,2])([7.8,-0.2,10.4])(cubic_pillar);

var pillar3_2 = T([0,1,2])([15.6,-0.2,10.4])(cubic_pillar);

var pillar3_3 = T([0,1,2])([-0.2,7.5,10.4])(small_cubic_pillar);

var pillar3_4 = T([0,1,2])([3.7,7.5,10.4])(small_cubic_pillar);

var pillar3_5 = T([0,1,2])([7.6,7.4,10.4])(cubic_pillar);

var pillar3_6 = T([0,1,2])([11.5,7.4,10.4])(cubic_pillar);

var pillar3_7 = T([0,1,2])([15.4,7.4,10.4])(cubic_pillar);

var pillars3 = STRUCT([pillar3_1, pillar3_2, pillar3_3, pillar3_4, pillar3_5, pillar3_6, pillar3_7]);

//DRAW(pillars3);

var building_model_1 = STRUCT([pillars0, pillars1, pillars2, pillars3]);

DRAW(bulding_model_1);

