from pyplasm import *

##utility functions
GRID = COMP([INSR(PROD),AA(QUOTE)])

def colorRGB(values): #function that converts in RGB colors
    return Color4f([values[0]/255.0, values[1]/255.0, values[2]/255.0, 1.0])

#### exercise1 ####

##ground floor
floor0 = COLOR(colorRGB([255, 255, 204]))(CUBOID([15.8, 0, 15.8]))


##first floor
floor1 = COLOR(colorRGB([255, 255, 204]))(CUBOID([15.2, 0, 15.2]))

t_floor1 = T([1, 2, 3])([0.3, 0.3, 0.3])(floor1)


##second floor 
floor2part1 = COLOR(colorRGB([255, 255, 204]))(CUBOID([14.6, 0, 12.4]))
floor2part2 = COLOR(colorRGB([255, 255, 204]))(GRID([[0.3, -2, 10, -2, 0.3], [0], [2.2]]))

t_floor2part1 = T([1, 2, 3])([0.6, 2, 2.8])(floor2part1)
t_floor2part2 = T([1, 2, 3])([0.6, 2, 0.6,])(floor2part2)
t_floor2= STRUCT([t_floor2part1, t_floor2part2])


##third floor
floor3part1 = COLOR(colorRGB([255, 255, 204]))(CUBOID([10, 0, 9.6]))
floor3part2 = COLOR(colorRGB([255, 255, 204]))(GRID([[1, -0.8, 1, -0.8, 1, -0.8, 1, -0.8, 1, -0.8, 1], [0], [1]]))
floor3part3 = COLOR(colorRGB([255, 255, 204]))(GRID([[-1.8, 1, -4.4, 1, -1.8], [0], [1]]))

t_floor3part1 = T([1, 2, 3])([2.9, 3, 5.3])(floor3part1)
t_floor3part2 = T([1, 2, 3])([2.9, 3, 4.3])(floor3part2)
t_floor3part3 = T([1, 2, 3])([2.9, 3, 3.5])(floor3part3)
t_floor3 = STRUCT([t_floor3part1, t_floor3part2, t_floor3part3])

#columns
column = COLOR(colorRGB([224, 224, 224]))(MAP([S2,S3,S1])(CYLINDER([0.5, 0])(32)))
pair_columns = [T(1)(1.8), column]
row_columns = STRUCT(NN(5) (pair_columns))
t_columns = T([1, 2, 3])([3.4, 3, 4.8])(row_columns)

column1 = T([1, 2, 3])([3.4, 3, 4.8])(column)
column2 = T([1, 2, 3])([3.4, 3, 6.6])(column)
column3 = T([1, 2, 3])([12.4, 3, 6.6])(column)

columns = STRUCT([t_columns, column1, column2, column3])

#walls
wall1 = COLOR(colorRGB([153, 255, 204]))(CUBOID([1, 0, 7]))
wall2 = COLOR(colorRGB([153, 255, 204]))(CUBOID([10, 0, 1]))
wall3 = COLOR(colorRGB([153, 255, 204]))(GRID([[3.6, -2.8, 3.6], [0], [1]]))

t_wall1 = T([1, 2, 3])([11.9, 3, 7.9])(wall1)
t_wall1_1 = T([1, 2, 3])([2.9, 3, 7.9])(wall1)
t_wall2 = T([1, 2, 3])([2.9, 3, 13.9])(wall2)
t_wall3 = T([1, 2, 3])([2.9, 3, 9.4])(wall3)

walls = STRUCT([t_wall1, t_wall1_1, t_wall2, t_wall3])

#throne and other
throne = COLOR(colorRGB([255, 128, 0]))(CUBOID([2, 0, 2]))
chair = COLOR(colorRGB([255, 128, 0]))(CUBOID([1.2, 0, 1.2]))

t_throne = T([1, 2, 3])([6.9, 3, 12.9])(throne)
t_chair1 = T([1, 2, 3])([4.9, 3, 12.9])(chair)
t_chair2 = T([1, 2, 3])([9.7, 3, 12.9])(chair)

chairs = STRUCT([t_throne, t_chair1, t_chair2])


##fourh floor
floor4 = COLOR(colorRGB([255, 255, 204]))(CUBOID([10.6, 0, 11.2]))
t_floor4 = T([1, 2, 3])([2.5, 7.6, 4.2])(floor4)

#2.5D
two_and_half_model = STRUCT([floor0, t_floor1, t_floor2, t_floor3, t_floor4, columns, walls, chairs])
#VIEW(two_and_half_model)


#### exercise2 ####

##walls
westWall = COLOR(colorRGB([255, 255, 204]))(CUBOID([0, 4.6, 5.5]))
eastWall = COLOR(colorRGB([255, 255, 204]))(CUBOID([0, 4.6, 5.5]))
northWall = COLOR(colorRGB([255, 255, 204]))(CUBOID([10, 4.6, 0]))
southWall = COLOR(colorRGB([255, 255, 204]))(GRID([[3.6, -2.8, 3.6], [4.6], [0]]))

west = T([1, 2, 3])([12.9, 3, 9.4])(westWall)
east = T([1, 2, 3])([2.9, 3, 9.4])(eastWall)
north = T([1, 2, 3])([2.9, 3, 14.9])(northWall)
south = T([1, 2, 3])([2.9, 3, 9.4])(southWall)

mock_up_3D = STRUCT([two_and_half_model, north, east, south, west])
#VIEW(mock_up_3D)


#### exercise4 ####

##stairs
step2D = MKPOL([[[0,0], [0, 0.1], [0.1,0.1]], [[1,2,3]], None])
step3D = MAP([S1, S3, S2])(PROD([step2D, Q(2)]))
stairs =  STRUCT(NN(14)([step3D,T([1,3])([0.1, 0.1])]))

mock_up_3D = STRUCT([two_and_half_model, north, east, south, west, stairs])
VIEW(mock_up_3D)