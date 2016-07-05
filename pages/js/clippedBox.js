$(document).ready(function() {
	(genClips = function() {
		$t = $('.clipped-box');
		var amount =5;
		var width = $t.width() / amount;
		var height = $t.height() / amount;
		var totalSquares = Math.pow(amount, 2);
		var html = $t.find('.contenter').html();
		var y = 0;
		for(var z = 0; z <= (amount*width); z = z+width) { 
			$('<div class="clipped" style="clip: rect('+y+'px, '+(z+width)+'px, '+(y+height)+'px, '+z+'px)">'+html
				+'</div>').appendTo($t);
			if(z === (amount*width)-width) {
				y = y + height;
				z = -width;
			}
			if(y === (amount*height)) {
				z = 9999999;
			}
		}
	})();
	function rand(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	var first = false,
		clicked = false;
	$('.clipped-box div').on('mouseover', function() {
		if(clicked === false) {
			clicked = true;
			$('.clipped-box .contenter').css({'display' : 'none'});	
			$('.clipped-box div:not(.contenter)').each(function() {
				var v = rand(120, 90),
					angle = rand(80, 89),
					theta = (angle * Math.PI) / 180,
					g = -9.8; 
				var self = $(this);
				var t = 0,
					z, r, nx, ny,
					totalt =  15;
				var negate = [1, -1, 0],
					direction = negate[ Math.floor(Math.random() * negate.length) ];
				var randDeg = rand(-5, 10), 
					randScale = rand(0.9, 1.1),
					randDeg2 = rand(30, 5);
				var color = $(this).css('backgroundColor').split('rgb(')[1].split(')')[0].split(', '),
					colorR = rand(-20, 20),
					colorGB = rand(-20, 20),
					newColor = 'rgb('+(parseFloat(color[0])+colorR)+', '+(parseFloat(color[1])+colorGB)+', '+
						(parseFloat(color[2])+colorGB)+')';
				$(this).css({
					'transform' : 'scale('+randScale+') skew('+randDeg+'deg) rotateZ('+randDeg2+'deg)', 
					'background' : newColor
				});
				z = setInterval(function() { 	
					var ux = ( Math.cos(theta) * v ) * direction;
					var uy = ( Math.sin(theta) * v ) - ( (-g) * t);
					nx = (ux * t);
					ny = (uy * t) + (0.5 * (g) * Math.pow(t, 2));
					$(self).css({'bottom' : (ny)+'px', 'left' : (nx)+'px'});
					t = t + 0.10;
					if(t > totalt) {
						clicked = false;
						first = true;
						$('.clipped-box').css({'top' : '-500px', 'transition' : 'none'});
						$(self).css({'left' : '0px', 'bottom' : '0', 'opacity' : '1', 'transition' : 'none', 'transform' : 'none'});
						clearInterval(z);
					}
				}, 10);
			});
		}
	});
	r = setInterval(function() {
		if(first === true) {
			$('.clipped-box').css({'top' : '150px', 'transition' : ''});
			$('.clipped-box div').css({'opacity' : '1', 'transition' : '', 'background-color' : ''});
			$('.contenter').css({'display' : 'block'});
			first = false;
		}
	}, 300);
});