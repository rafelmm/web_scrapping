exports.url = 'http://www.meteo.cat/observacions/xema/dades?codi=UU';

var template = 'Dades a les {{data.time}} #Amposta\n';
template += 'Temp: {{data.tempmean}}{{data.tempunit}}\n';
template += 'Humitat relativa: {{data.humidity}}%\n';
template += 'Precip: {{data.preciptation}}mm\n';
template += 'Pressió atmos: {{data.atmpressure}}hPa\n';
template += 'Velocitat vent: {{data.windspeed}}Km/s\n';
template += 'Direcció vent: {{data.winddirection}}\n';

exports.template = template;
