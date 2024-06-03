// JavaScript Document<script language="javascript">
var cutItm=0;

function autoPlay(){
	cutItm++;
	if(cutItm>3){
		cutItm=0;
	}

    var leftVal=cutItm*268;
    $(".pdt_long").animate({left:-leftVal},500);
}
/*自動跑
var timeer=setInterval(autoPlay,3000);
$(".bd_c4top").hover(function(){clearInterval(timeer)},function(){timeer=setInterval(autoPlay,3000);});

*/
$(".bd_lbtn").click(function(){
	cutItm--;
	if(cutItm<0){
		cutItm=3;
	}
    var leftVal=cutItm*268;
    $(".pdt_long").animate({left:-leftVal},500);
});
$(".bd_rbtn").click(function(){
	cutItm++;
	if(cutItm>3){
		cutItm=0;
	}
    var leftVal=cutItm*268;
    $(".pdt_long").animate({left:-leftVal},500);
});
