//音
function boto(){
	var oto = new Audio('img/audio/battle.mp3');
    // oto.play();
};

  // 4秒後にページ遷移
   function seni() {
    setTimeout(function(){
      window.location.href = '/';
    }, 4300); 
  };

// 敵遭遇のイベントランダム用
function r(){
  var rand = Math.floor( Math.random() * 11 ) ;
 if(rand == 1){
 	console.log("1番目ヒット");
 	$('#town').removeClass("enemy");
 }else if(rand == 2){
 	console.log("2番目ヒット");
 	$('#town').removeClass("enemy");
 }else if(rand == 3){
	console.log("3番目ヒット");
	$('#town').removeClass("enemy");
 }else if(rand == 4){
	$('#town').addClass('enemy');
	boto();
	seni();
 }else if(rand == 5){
	console.log("5番目ヒット");
	$('#town').removeClass("enemy");
 }else if(rand == 6){
	console.log("6番目ヒット");
	$('#town').removeClass("enemy");
 }else if(rand == 7){
	$('#town').addClass('enemy');
	boto();
 }else if(rand == 8){
	console.log("8番目ヒット");
	$('#town').removeClass("enemy");
 }else if(rand == 9){
	console.log("9番目ヒット");
	$('#town').removeClass("enemy");
 }else if(rand == 10){
	$('#town').addClass('enemy');
 }
};


//キャラ移動
$(function(){
    $('html').keydown(function(e){
    	var flag = false;
        switch(e.which){
            case 39: // Key[→]
            $('#town').animate({backgroundPositionX: '-=10px'},100);
            $('#character img').attr("src","img/item/right.png");
            r();
            flag = true;
            console.log(flag);
            break;
 
            case 37: // Key[←]
            $('#town').animate({backgroundPositionX: '+=10px'},100);
            $('#character img').attr("src","img/item/left.png");
            r();
            flag = true;
            console.log(flag);
            break;
 
            case 38: // Key[↑]
            $('#town').animate({backgroundPositionY: '+=10px'},100);
            $('#character img').attr("src","img/item/top.png");
            r();
            flag = true;
            break;
 
            case 40: // Key[↓]
            $('#town').animate({backgroundPositionY: '-=10px'},100);
            $('#character img').attr("src","img/item/bottom.png");
            r();
            flag = true;
            break;
        }
    });
});

// var enemy = document.getElementById("character");
// var isPressLeft = false;
// var isPressRight = false;
// var isPressUp = false;
// var isPressDown = false;

// // キーボードを押したタイミングを検知
// window.addEventListener("keydown", handleKeyDown);
// window.addEventListener("keyup", handleKeyUp);
// function handleKeyDown(event) {
//    // キーコード(どのキーが押されたか)を取得
//    var keyCode = event.keyCode;
//    if (keyCode == 39) { // 右
//        isPressRight = true;// 真偽値が切り替わる
//    } else if (keyCode == 37) { // 左
//        isPressLeft = true;
//    } else if (keyCode == 40) { // 下
//        isPressDown = true;
//    } else if (keyCode == 38) { // 上
//        isPressUp = true;
//    }
// }

// function handleKeyUp(event) {
//    // キーコード(どのキーが押されたか)を取得
//    var keyCode = event.keyCode;
//    if (keyCode == 39) { // 右
//        isPressRight = false;// 真偽値が切り替わる
//    } else if (keyCode == 37) { // 左
//        isPressLeft = false;
//    } else if (keyCode == 40) { // 下
//        isPressDown = false;
//    } else if (keyCode == 38) { // 上
//        isPressUp = false;
//    }
// }

// function handleTick() {
//    // 条件文で船の位置を変更する
//    if (isPressRight == true) { // 右
//        enemy.x += 1; // 移動
//    } else if (isPressLeft == true) { // 左
//        enemy.x -= 1;
//    }
//    if (isPressDown == true) { // 下
//        enemy.y += 1;
//    } else if (isPressUp == true) { // 上
//        enemy.y -= 1;
//    }

//    stage.update(); // 画面更新
// }
