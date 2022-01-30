exports.on = function(token, guild, id, time){
const fetch = require('node-fetch');
const ms = require('ms');

		if(!token) return console.log('Discord bu uygulamayı bulamadı!');
		if(!id) return console.log('Geçersiz Işlem: Kullanıcı Belirtilmemiş!');
		if(!time) return console.log('Geçersiz Işlem: Zaman Belirtilmemiş!');
		if(!guild) return console.log('Geçersiz Işlem: Sunucu Belirtilmemiş!');

		const milliseconds = ms(time);
		const iosTime = new Date(Date.now() + milliseconds).toISOString();

		 fetch(`https://discord.com/api/guilds/${guild}/members/${id}`, {
			method: 'PATCH',
			body: JSON.stringify({ communication_disabled_until: iosTime }),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bot ${token}`,
			},
		});
}


//unmute


exports.off = function(token, guild, id){
const fetch = require('node-fetch');

		if(!token) return console.log('Discord bu uygulamayı bulamadı!');
		if(!id) return console.log('Geçersiz Işlem: Kullanıcı Belirtilmemiş!');
		if(!guild) return console.log('Geçersiz Işlem: Sunucu Belirtilmemiş!');



		 fetch(`https://discord.com/api/guilds/${guild}/members/${id}`, {
			method: 'PATCH',
			body: JSON.stringify({ communication_disabled_until: 0 }),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bot ${token}`,
			},
		});
}
