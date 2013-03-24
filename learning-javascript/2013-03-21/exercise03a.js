function Point2D(x, y)
{
	this.x = x;
	this.y = y;
}

function Edge(point1, point2)
{
	this.point1 = point1;
	this.point2 = point2;
	this.edgeLength = function() 
	{ 
		return Math.sqrt(Math.pow((this.point1.x - this.point2.x), 2) 
		+ Math.pow((this.point1.y - this.point2.y), 2));
	}
}

function Triangle(edge1, edge2, edge3)
{
	this.edge1 = edge1;
	this.edge2 = edge2;
	this.edge3 = edge3;
}

var triangle = new Triangle(new Edge(new Point2D(2,2)), new Edge(new Point2D(4,4)), new Edge(new Point2D(4,2)));

triangle;