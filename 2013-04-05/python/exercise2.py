from pyplasm import *

GRID = COMP([INSR(PROD),AA(QUOTE)])

floor_0 = GRID([[16],[9.5],[0.3]]);

floor0 = T([0,1])([-0.2,-0.2])(floor_0);

floor1_1 = GRID([[1.7],[9.5],[0.3]]);
floor1_2 = GRID([[4.9],[7.6,-1.5,0.3],[0.3]]);
floor1_2_t = T([0])([1.7])(floor1_2);
floor1_3 = GRID([[9.4],[9.5],[0.3]]);
floor1_3_t = T([0])([6.6])(floor1_3);

floor_1 = STRUCT([floor1_1,floor1_2_t, floor1_3_t]);

floor1 = T([0,1,2])([-0.2,-0.2,3])(floor_1); 



floor_2_1 = GRID([[7.8],[9.5],[0.3]]);
floor_2_1_t = T([0,1,2])([8.2-0.2,-0.2, 6.3])(floor_2_1);
floor_2_2 = GRID([[1.6,],[1.8],[0.3]]);
floor_2_2_t = T([0,1,2])([6.6-0.2,7.7-0.2,6.3])(floor_2_2);



floor2 = STRUCT([floor_2_1_t,floor_2_2_t]);



floor_3_1 = GRID([[8.2],[9.5],[0.3]]);
floor_3_1_t = T([0,1,2])([-0.2,-0.2,9.6])(floor_3_1);
floor_3_2 = GRID([[4.4],[7.9,-1.3,0.3],[0.3]]);
floor_3_2_t = T([0,1,2])([8.2-0.2,-0.2,9.6])(floor_3_2);
floor_3_3 = GRID([[2.4],[9.5],[0.3]]);
floor_3_3_t = T([0,1,2])([12.6-0.2,-0.2,9.6])(floor_3_3);

floor3 = STRUCT([floor_3_1_t,floor_3_2_t,floor_3_3_t]);

floor_4_1 = GRID([[7.8],[-7.5,2],[0.3]]);
floor_4_1_t = T([0,1,2])([-0.2,-0.2,12.9])(floor_4_1);
floor_4_2 = GRID([[8.2],[9.5],[0.3]]);
floor_4_2_t = T([0,1,2])([7.8-0.2,-0.2,12.9])(floor_4_2);

floor4 = STRUCT([floor_4_1_t, floor_4_2_t]);





