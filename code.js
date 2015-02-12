// choices = {
// 	"red": {r:255, g:0, b:0},
// 	"cyan": {r:0, g:255, b:255},
// 	"magenta": {r:255, g:0, b:255},
// 	"yellow": {r:255, g:255, b:0},
// };
distances = new Array();

function getName(r0, g0, b0) {
	for(var name in choices) {
		//console.log(name);
		rgb = choices[name];
		r1 = rgb.r;
		g1 = rgb.g;
		b1 = rgb.b;
		distance = Math.sqrt(Math.pow((r1-r0),2)+Math.pow((g1-g0),2)+Math.pow((b1-b0),2));
		distances.push({name: name, distance: distance});
		//console.log(distance);
	}
	distances.sort(function(a,b) {
		return a.distance - b.distance;
	});
	
	return distances[1].name+"y "+distances[0].name;
}