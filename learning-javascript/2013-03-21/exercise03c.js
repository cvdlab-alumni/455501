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
	this.perimeter = function() 
	{ 
		return edge1.edgeLength() + edge2.edgeLength() + edge3.edgeLength();   
	}
	this.area = function() 
	{ 	
		var semiPerimeter = (0.5  * (this.edge1.edgeLength() + this.edge2.edgeLength() + this.edge3.edgeLength()));
		return Math.sqrt(semiPerimeter * (semiPerimeter - this.edge1.edgeLength()) * (semiPerimeter - this.edge2.edgeLength()) * (semiPerimeter - this.edge3.edgeLength()));
	}
}

var point1 = new Point2D(2,2);
var point2 = new Point2D(4,4);
var point3 = new Point2D(4,2);

var edge1 = new Edge(point1, point2);
var edge2 = new Edge(point1, point3);
var edge3 = new Edge(point2, point3);

var triangle = new Triangle(edge1, edge2, edge3);

triangle.area();