(function () { 
	"use strict";
	
	const headerWrap = document.getElementsByClassName("headerWrap")[0];
	const subHeading = document.getElementsByClassName("subHeading")[0];
	const cntrlWrap = document.getElementsByTagName("button")[0].parentElement;
	const playBtn = document.getElementsByClassName("startTheShow")[0];
	const pauseBtn = document.getElementsByClassName("stopTheShow")[0];
	
	const textWrap = document.getElementsByClassName("textWrap")[0];
	const introText = document.getElementsByClassName("introText");
	
	const audio = document.getElementById("audio");
	
	const imgWrap = document.getElementsByClassName("imgWrap")[0];
	const img = document.getElementById("img");
	
	let imgs = [
		"imgs/dad_pics/dad_on_the_beach.jpg",
		"imgs/dad_pics/baby_dad.jpg",
		"imgs/dad_pics/navy_dad.jpg",
		"imgs/dad_pics/mom_dad_and_the_boys.jpg",
		"imgs/dad_pics/paperwork_dad.jpg",
		
		"imgs/dad_pics/sleeping_dad.jpg",
		"imgs/dad_pics/treed_ryan_and_dad.jpg",
		"imgs/dad_pics/stoned_dad.jpg",
		"imgs/dad_pics/beardless_dad.jpg",
		"imgs/dad_pics/dad_and_his_buds.jpg",
		
		"imgs/ds2.jpg",
		"imgs/fourth_of_july-dbsr.jpg",
		"imgs/statue-dbs.jpg",
		"imgs/ds.jpg",
		"imgs/dc.jpg",
		
		"imgs/db.jpg",
		"imgs/ruckus-db.jpg",
		"imgs/blazer_game.jpg",
		"imgs/chair-d.jpg",
		"imgs/chemo-d.jpg",
		
		"imgs/ds3.jpg",
		"imgs/dm.jpg",
		"imgs/dp.jpg",
		"imgs/brothers.jpg",
		"imgs/dbr.jpg",
		
		"imgs/new_holiday/dbr2.jpg",
		"imgs/new_holiday/dad_and_the_girls-1.jpg",
		"imgs/new_holiday/dad_and_the_girls-2.jpg",
		"imgs/new_holiday/dad_and_the_girls-3.jpg",
		"imgs/new_holiday/manolis_boys-1.jpg",
		
		"imgs/new_holiday/manolis_boys-2.jpg",
		"imgs/new_holiday/manolis_boys-3.jpg"
		
		// length - 32

	];

	const preload = (arr) => {
    for (var i = 0; i < arr.length; i++) {
			new Image().src = arr[i]; 
    }
	}

	preload(imgs);

	
	imgWrap.style.display = "none";
	imgWrap.style.opacity = 0;
	
	pauseBtn.style.display = "none";
	pauseBtn.style.opacity = 0;
	
	cntrlWrap.style.display = "block";
	
	
	audio.controls = false;
	
	function fadeIn(element, time) {
		element.style.display = "block";
		let timer = setInterval(fade, time);
		let opac = 0;
		function fade() {
			if (opac < 1) {
				opac += 0.01;
				element.style.opacity = opac;
			} else if (opac >= 1) {
				clearInterval(timer);
			}
		}
	}
	
	function fadeOut(element, time) {
		let hideTime = (time * 100) + 500;
		setTimeout(function() {element.style.display = "none";}, hideTime);
		let timer = setInterval(fade, time);
		let opac = 1;
		function fade() {
			if (opac > 0) {
				opac -= 0.01;
				element.style.opacity = opac;
			} else if (opac <= 0) {
				clearInterval(timer);
			}
		}
	}
	
	function changeImg(newImg) {
		img.setAttribute("src", newImg);
	}

	
	cntrlWrap.addEventListener("click", (e) => {
		
		if (e.target.classList[0] === "startTheShow" || e.target.classList[0] === "startTheShowImg") {
			console.log("test");
			
			fadeOut(subHeading, 25);
			fadeOut(playBtn, 25);
			fadeOut(textWrap, 25);
			
			setTimeout(function() {
				let blury = setInterval(addBlur, 100);
				let blur = 0;
				function addBlur() {
					subHeading.style.filter = "blur(" + blur + "px)";
					introText[0].style.filter = "blur(" + blur + "px)";
					introText[1].style.filter = "blur(" + blur + "px)";
					if (blur < 10) {
							blur += 0.5;
					} else {
						clearInterval(blury);
					}
				}
			}, 250);
			
			audio.volume = 1;
			audio.currentTime = 0;
			audio.play();
			setTimeout(fadeIn, 3500, imgWrap, 17);
			
			setTimeout(fadeOut, 8000, imgWrap, 17);
			setTimeout(changeImg, 10100, imgs[1]);
			setTimeout(function() {img.style.width = "75%";}, 10100);
			setTimeout(fadeIn, 11000, imgWrap, 17);
			
			setTimeout(fadeOut, 15000, imgWrap, 17);
			setTimeout(changeImg, 17000, imgs[2]);
			setTimeout(fadeIn, 18000, imgWrap, 17);
			
			setTimeout(fadeOut, 22000, imgWrap, 17);
			setTimeout(changeImg, 24000, imgs[3]);
			setTimeout(fadeIn, 25000, imgWrap, 17);
			
			setTimeout(fadeOut, 29000, imgWrap, 17);
			setTimeout(changeImg, 31000, imgs[4]);
			setTimeout(function() {img.style.width = "100%";}, 31000);
			setTimeout(fadeIn, 32000, imgWrap, 17);
			
			setTimeout(fadeOut, 36000, imgWrap, 17);
			setTimeout(changeImg, 38000, imgs[5]);
			setTimeout(fadeIn, 39000, imgWrap, 17);
			
			setTimeout(fadeOut, 43000, imgWrap, 17);
			setTimeout(changeImg, 45000, imgs[6]);
			setTimeout(fadeIn, 46000, imgWrap, 17);
			
			setTimeout(fadeOut, 50000, imgWrap, 17);
			setTimeout(changeImg, 52000, imgs[7]);
			setTimeout(fadeIn, 53000, imgWrap, 17);
			
			setTimeout(fadeOut, 57000, imgWrap, 17);
			setTimeout(changeImg, 59000, imgs[8]);
			setTimeout(fadeIn, 60000, imgWrap, 17);
			
			setTimeout(fadeOut, 64000, imgWrap, 17);
			setTimeout(changeImg, 66000, imgs[9]);
			setTimeout(fadeIn, 67000, imgWrap, 17);
			
			setTimeout(fadeOut, 71000, imgWrap, 17);
			setTimeout(changeImg, 73000, imgs[10]);
			setTimeout(fadeIn, 74000, imgWrap, 17);
			
			setTimeout(fadeOut, 78000, imgWrap, 17);
			setTimeout(changeImg, 80000, imgs[11]);
			setTimeout(fadeIn, 81000, imgWrap, 17);
			
			setTimeout(fadeOut, 85000, imgWrap, 17);
			setTimeout(changeImg, 87000, imgs[12]);
			setTimeout(fadeIn, 88000, imgWrap, 17);
			
			setTimeout(fadeOut, 92000, imgWrap, 17);
			setTimeout(changeImg, 94000, imgs[13]);
			setTimeout(fadeIn, 95000, imgWrap, 17);
			
			setTimeout(fadeOut, 99000, imgWrap, 17);
			setTimeout(changeImg, 101000, imgs[14]);
			setTimeout(fadeIn, 102000, imgWrap, 17);
			
			setTimeout(fadeOut, 106000, imgWrap, 17);
			setTimeout(changeImg, 108000, imgs[15]);
			setTimeout(fadeIn, 109000, imgWrap, 17);
			
			setTimeout(fadeOut, 113000, imgWrap, 17);
			setTimeout(changeImg, 115000, imgs[16]);
			setTimeout(fadeIn, 116000, imgWrap, 17);
			
			setTimeout(fadeOut, 120000, imgWrap, 17);
			setTimeout(changeImg, 122000, imgs[17]);
			setTimeout(fadeIn, 123000, imgWrap, 17);
			
			setTimeout(fadeOut, 127000, imgWrap, 17);
			setTimeout(changeImg, 129000, imgs[18]);
			setTimeout(fadeIn, 130000, imgWrap, 17);
			
			setTimeout(fadeOut, 134000, imgWrap, 17);
			setTimeout(changeImg, 136000, imgs[19]);
			setTimeout(fadeIn, 137000, imgWrap, 17);
			
			setTimeout(fadeOut, 141000, imgWrap, 17);
			setTimeout(changeImg, 143000, imgs[20]);
			setTimeout(fadeIn, 144000, imgWrap, 17);
			
			setTimeout(fadeOut, 148000, imgWrap, 17);
			setTimeout(changeImg, 150000, imgs[21]);
			setTimeout(fadeIn, 151000, imgWrap, 17);
			
			setTimeout(fadeOut, 155000, imgWrap, 17);
			setTimeout(changeImg, 157000, imgs[22]);
			setTimeout(fadeIn, 158000, imgWrap, 17);
			
			setTimeout(fadeOut, 162000, imgWrap, 17);
			setTimeout(changeImg, 164000, imgs[23]);
			setTimeout(fadeIn, 165000, imgWrap, 17);
			
			setTimeout(fadeOut, 169000, imgWrap, 17);
			setTimeout(changeImg, 171000, imgs[24]);
			setTimeout(fadeIn, 172000, imgWrap, 17);
			
			setTimeout(fadeOut, 176000, imgWrap, 17);
			setTimeout(changeImg, 178000, imgs[25]);
			setTimeout(fadeIn, 179000, imgWrap, 17);
			
			setTimeout(fadeOut, 183000, imgWrap, 17);
			setTimeout(changeImg, 185000, imgs[26]);
			setTimeout(fadeIn, 186000, imgWrap, 17);
			
			setTimeout(fadeOut, 190000, imgWrap, 17);
			setTimeout(changeImg, 192000, imgs[27]);
			setTimeout(fadeIn, 193000, imgWrap, 17);
			
			setTimeout(fadeOut, 197000, imgWrap, 17);
			setTimeout(changeImg, 199000, imgs[28]);
			setTimeout(fadeIn, 200000, imgWrap, 17);
			
			setTimeout(fadeOut, 204000, imgWrap, 17);
			setTimeout(changeImg, 206000, imgs[29]);
			setTimeout(fadeIn, 207000, imgWrap, 17);
			
			setTimeout(fadeOut, 211000, imgWrap, 17);
			setTimeout(changeImg, 213000, imgs[30]);
			setTimeout(fadeIn, 214000, imgWrap, 17);
			
			setTimeout(fadeOut, 218000, imgWrap, 17);
			setTimeout(changeImg, 220000, imgs[31]);
			setTimeout(fadeIn, 221000, imgWrap, 17);
			
			setTimeout(fadeOut, 225000, imgWrap, 17);
			setTimeout(changeImg, 227000, imgs[1]);
			setTimeout(function() {img.style.width = "75%";}, 227000);
			setTimeout(fadeIn, 228000, imgWrap, 17);
			
			setTimeout(fadeOut, 232000, imgWrap, 17);
			setTimeout(changeImg, 234000, imgs[0]);
			setTimeout(function() {img.style.width = "100%";}, 234000);
			setTimeout(fadeIn, 235000, imgWrap, 17);
			
		}
		
		if (e.target.classList[0] === "stopTheShow") {
			audio.pause();
		}
	});
	
	audio.addEventListener("timeupdate", function() {	
		let now = audio.currentTime;
		
		if (now < 240) {
				console.log(now);
		}
		
		if (now > 235 && now < 236) {
			audio.volume = 0.9;
		}
		
		if (now > 236 && now < 237) {
			audio.volume = 0.8;
		}
		
		if (now > 237 && now < 238) {
			audio.volume = 0.7;
		}
		
		if (now > 238 && now < 239) {
			audio.volume = 0.6;
		}
		
		if (now > 239 && now < 240) {
			audio.volume = 0.5;
		}
		
		if (now > 240 && now < 241) {
			audio.volume = 0.4;
		}
		
		if (now > 241 && now < 242) {
			audio.volume = 0.3;
		}
		
		if (now > 242 && now < 243) {
			audio.volume = 0.2;
		}
		
		if (now > 243 && now < 244) {
			audio.volume = 0.1;
		}
		
		if (now > 244 && now < 245) {
			audio.volume = 0.05;
		}
		
		if (now > 245 && now < 246) {
			audio.volume = 0;
		}
		
		if (now > 246) {
			audio.pause();
			fadeOut(imgWrap, 25);
			
			setTimeout(function() {
				let blury = setInterval(addBlur, 100);
				let blur = 10;
				function addBlur() {
					subHeading.style.filter = "blur(" + blur + "px)";
					introText[0].style.filter = "blur(" + blur + "px)";
					introText[1].style.filter = "blur(" + blur + "px)";
					if (blur > 0) {
							blur -= 0.5;
					} else {
						clearInterval(blury);
					}
				}
			}, 3000);
			
			//subHeading.style.filter = "blur(0px)";
			//introText[0].style.filter = "blur(0px)";
			//introText[1].style.filter = "blur(0px)";
			
			setTimeout(fadeIn, 3000, subHeading, 17);
			setTimeout(fadeIn, 3000, textWrap, 17);
			setTimeout(fadeIn, 3000, playBtn, 17);
		}
	});
})();


//	function volFade() {
//		console.log("volFade was called");
//		let timer = setInterval(fade, 250);
//		let vol = audio.volume;
//		function fade() {
//			if (vol > 0) {
//				vol -= 0.1;
//				//audio.volume = vol;
//			} else if (vol <= 0) {
//				clearInterval(timer);
//			}
//		}
//	}


//	function changeImg(curTime, startTime, endTime, newImg) {
//		if (curTime >= startTime && curTime <= endTime) {
//			return fadeOut(img, 100);
//		} else if (curTime >= startTime + 2.5 && curTime <= endTime + 2.5) {
//			img.setAttribute("src", newImg);
//		} else if (curTime >= startTime + 5 && curTime <= endTime + 5) {
//			fadeIn(img, 100);
//		}
//	}
//	
//	audio.addEventListener("timeupdate", function() {
//		
//		let now = audio.currentTime;
//		console.log(now);
//		changeImg(now, 1, 1.5, imgs[0]);
//		changeImg(now, 11, 11.5, imgs[1]);
//	});

