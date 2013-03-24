function Point2D(x, y)
{
	this.x = x;
	this.y = y;
}

function Edge(point1, point2)
{
	this.point1 = point1;
	this.point2 = point2;
}

var edge = new Edge(new Point2D(2,2), new Point2D(4,4));

edge;