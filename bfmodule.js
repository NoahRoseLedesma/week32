module.exports = {
	toAsii: function(string)
	{
	asii = [];
	for(var i = 0; i < string.length; i++)
	{
		asii[asii.length] = string.charCodeAt(i).toString();
	}
	return asii;
	},
	toBrainFuck : function(asii)
	{
	var brainfuck = "";
	var temp = "";
	for(var i = 0; i < asii.length; i++)
	{
		if(asii[i].length == 2)
		{
		temp = asii[i].substr(0, 1);
		//temp = Number(temp);
		for(var j = 1; j <= temp; j++)
		{
			brainfuck = brainfuck + "+";
		}
		brainfuck = brainfuck + "[>++++++++++<-]>";
		temp = asii[i].substr(1, 2);
		for(var k = 1; k <= temp; k++)
		{
			brainfuck = brainfuck + "+"
		}
		brainfuck = brainfuck + ".>";
		}
		else
		{
			temp = asii[i].substr(0, 2);
			for(var j = 1; j <= temp; j++)
		{
			brainfuck = brainfuck + "+";
		}
		brainfuck = brainfuck + "[>++++++++++<-]>";
		temp = asii[i].substr(2, 3);
		for(var k = 1; k <= temp; k++)
		{
			brainfuck = brainfuck + "+"
		}
		brainfuck = brainfuck + ".>";
		}
	}
	brainfuck = brainfuck.substr(0, (brainfuck.length - 1));
	return brainfuck;
	},
	toText: function(string)
	{
	var endloop = 0;
	var startloop = 0;
	cell = [];
	cellpointer = 0;
	var output = "";
	command = "";
	for(var i = 0; i <= string.length + 1; i++)
	{
		//console.log((i+1) + " " + i);
		//console.log(string.substr(i+1, i));
		switch(string.substr(i, 1)){
			case "+":
				//console.log("cell " + cellpointer + " increased by one");
if (typeof cell[cellpointer] == 'undefined'){cell[cellpointer] = 0}
				cell[cellpointer] = 1*cell[cellpointer] + 1;
				break;
			case "-":
			//console.log("cell " + cellpointer + " decreased by one");
if (typeof cell[cellpointer] == 'undefined'){cell[cellpointer] = 0}
				cell[cellpointer] =	 1*cell[cellpointer] - 1;
				break;
			case ">":
			cellpointer++;
			//console.log("cellpointer set to " + cellpointer);
			break;
			case "<":
			cellpointer--;
			if(cellpointer < 0)
			{cellpointer = 0;}
			//console.log("cellpointer set to " + cellpointer);
			break;
			case ".":
			//console.log("Printing cell " + cellpointer + " of value " + cell[cellpointer]);
			if (typeof cell[cellpointer] == 'undefined'){cell[cellpointer] = 0}
			output = output + String.fromCharCode(Number(cell[cellpointer]));
			//console.log(String.fromCharCode(Number(cell[cellpointer])));
			break;
			case "[":
				if((string.split("[").length - 1) !== (string.split("]").length - 1))
					{throw "BrainFuck SyntaxError: Unbalanced loops"; return;}
				endloop = string.indexOf("]", i);
				if(cell[cellpointer] !== 0)
				{
					//Parse code from current index to endloop
					startloop = i;
				}
				else
				{
					i = endloop;
				}
				break;
			case "]":
				if((string.split("[").length - 1) !== (string.split("]").length - 1))
					{throw "BrainFuck SyntaxError: Unbalanced loops"; return;}
				if(cell[cellpointer] !== 0)
				{
					i = startloop;
				}

		}
		}
		return output;
	}
}
