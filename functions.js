
var cheerio = require('cheerio');


exports.scrape = function(html){
	var $ = cheerio.load(html);
	var tempmean, tempmax, tempmin, humidity, preciptation, atmpressure, solarirradiation;
	var windinfo, windspeed, winddirection_deg;
	
	$('#resum-diari').filter(function(){
		var resumdiari = $(this);
		tempmean = parseFloat(resumdiari.find('tr').first().children('td').text());
		tempmax = parseFloat(resumdiari.find('tr:nth-child(2)').children('td').first().text());
		tempmin = parseFloat(resumdiari.find('tr:nth-child(3)').children('td').first().text());
		humidity = parseFloat(resumdiari.find('tr:nth-child(4)').children('td').text());
		preciptation = parseFloat(resumdiari.find('tr:nth-child(5)').children('td').text());
		windinfo = resumdiari.find('tr:nth-child(6)').children('td').first().text().trim().split('-');
		atmpressure = parseFloat(resumdiari.find('tr:nth-child(7)').children('td').text());
		solarirradiation = parseFloat(resumdiari.find('tr:nth-child(8)').children('td').text());
		windspeed = parseFloat(windinfo[0]);
		winddirection_deg = parseInt(windinfo[1]);
		
	});
	var d = new Date();
	var data = {
			tempmean: tempmean,
			tempmax: tempmax,
			tempmin: tempmin,
			humidity: humidity,
			preciptation: preciptation,
			atmpressure: atmpressure,
			solarirradiation: solarirradiation,
			windspeed: windspeed,
			winddirection: windDirectionStr(winddirection_deg),
			tempunit: "\u00B0"+"C",
			time: formatTime(d)
		};
	return data;
}

//Retorna l'hora formatejada HH:MM. Exemple: 05:14
// @param d: objecte de clase Date
// @return: hora formatejada
function formatTime(d){
	var h = "0"+d.getHours();
	var m = "0"+d.getMinutes();
	h = h.substring(h.length-2,h.length);
	m = m.substring(m.length-2,h.length);
	return h+":"+m;

}

//Retorna la direcció del vent en text a partir del graus
// @param: deg Direcció del vent en graus des de 0 fins 360
// @return: direcció del vent en text
function windDirectionStr(deg){
	var windDir = deg;	
	//Aqui el codi per determinar la direccio del vent. Exemple:
	//if ( deg > 337.5 || deg < 22.5) windDir='Tramuntana';
	//else if (deg > 22.5 && deg < 67.5) windDir='Gregal';
	
	return windDir;
}