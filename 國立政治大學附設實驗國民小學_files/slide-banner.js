$(function(){
	var $ad = $('#abgne_fade_pic a.ad'),
		showIndex = 0,			// �w�]�n����ܨ��@�i
		fadeOutSpeed = 2000,	// �H�X���t��
		fadeInSpeed = 3000,		// �H�J���t��
		defaultZ = 10,			// �w�]�� z-index
		isHover = false,
		timer, speed = 8000;	// �p�ɾ��ν����������t��
 
	// ����䥦�Ϥ����ܦ��z��
	$ad.css({
		opacity: 0,
		zIndex: defaultZ - 1
	}).eq(showIndex).css({
		opacity: 1,
		zIndex: defaultZ
	});
 
	// �եX�k�U�����s
	var str = '';
	for(var i=0;i<$ad.length;i++){
		str += '<a href="#">' + (i + 1) + '</a>';
	}
	var $controlA = $('#abgne_fade_pic').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');
 
	// ����s�Q�I���
	// �Y�n�ܦ��ƹ��ƤJ�Ӥ�����, �i�H�� click ���� mouseover
	$controlA.click(function(){
		// ���o�ثe�I�������X
		showIndex = $(this).text() * 1 - 1;
 
		// ��ܬ۹������ϰ�ç�䥦�ϰ��ܦ��z��
		$ad.eq(showIndex).stop().fadeTo(fadeInSpeed, 1, function(){
			if(!isHover){
				// �Ұʭp�ɾ�
				timer = setTimeout(autoClick, speed);
			}
		}).css('zIndex', defaultZ).siblings('a').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
		// �� a �[�W .on
		$(this).addClass('on').siblings().removeClass('on');
 
		return false;
	}).focus(function(){
		$(this).blur();
	}).eq(showIndex).addClass('on');
 
	$ad.hover(function(){
		isHover = true;
		// ����p�ɾ�
		clearTimeout(timer);
	}, function(){
		isHover = false;
		// �Ұʭp�ɾ�
		timer = setTimeout(autoClick, speed);	})
 
	// �۰��I���U�@��
	function autoClick(){
		if(isHover) return;
		showIndex = (showIndex + 1) % $controlA.length;
		$controlA.eq(showIndex).click();
	}
 
	// �Ұʭp�ɾ�
	timer = setTimeout(autoClick, speed);
}); 