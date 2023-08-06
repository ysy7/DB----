		//데이터 정의 JSON 타입으로 작성(추후 DB 연동시 DB 데이터로 대체함)
		//신발 설명은 일단 여기서 수정하면 됨
		const data = [
			{category:'man',id:'01',image:'m1.png',title:'남자신발1',comment:'[남성]설명1'}
		   ,{category:'man',id:'02',image:'m2.png',title:'남자신발2',comment:'[남성]설명2'}
		   ,{category:'man',id:'03',image:'m3.png',title:'남자신발3',comment:'[남성]설명3'}
		   ,{category:'man',id:'04',image:'m4.png',title:'남자신발4',comment:'[남성]설명4'}
		   ,{category:'man',id:'05',image:'m5.png',title:'남자신발5',comment:'[남성]설명5'}
		   ,{category:'man',id:'06',image:'m6.png',title:'남자신발6',comment:'[남성]설명6'}
		   ,{category:'man',id:'07',image:'m7.png',title:'남자신발7',comment:'[남성]설명7'}
		   ,{category:'man',id:'08',image:'m8.png',title:'남자신발8',comment:'[남성]설명8'}

		   ,{category:'woman',id:'09',image:'w1.png',title:'여자신발1',comment:'[여성]설명1'}
		   ,{category:'woman',id:'10',image:'w2.png',title:'여자신발2',comment:'[여성]설명2'}
		   ,{category:'woman',id:'11',image:'w3.png',title:'여자신발3',comment:'[여성]설명3'}
		   ,{category:'woman',id:'12',image:'w4.png',title:'여자신발4',comment:'[여성]설명4'}
		   ,{category:'woman',id:'13',image:'w5.png',title:'여자신발5',comment:'[여성]설명5'}
		   ,{category:'woman',id:'14',image:'w6.png',title:'여자신발6',comment:'[여성]설명6'}
		   ,{category:'woman',id:'15',image:'w7.png',title:'여자신발7',comment:'[여성]설명7'}
		   ,{category:'woman',id:'16',image:'w8.png',title:'여자신발8',comment:'[여성]설명8'}
		   
		   ,{category:'kid',id:'17',image:'k1.png',title:'아동신발1',comment:'[아동]설명1'}
		   ,{category:'kid',id:'18',image:'k2.png',title:'아동신발2',comment:'[아동]설명2'}
		   ,{category:'kid',id:'19',image:'k3.png',title:'아동신발3',comment:'[아동]설명3'}
		   ,{category:'kid',id:'20',image:'k4.png',title:'아동신발4',comment:'[아동]설명4'}
		   ,{category:'kid',id:'21',image:'k5.png',title:'아동신발5',comment:'[아동]설명5'}
		   ,{category:'kid',id:'22',image:'k6.png',title:'아동신발6',comment:'[아동]설명6'}
		   ,{category:'kid',id:'23',image:'k7.png',title:'아동신발7',comment:'[아동]설명7'}
		   ,{category:'kid',id:'24',image:'k8.png',title:'아동신발8',comment:'[아동]설명8'}
	   ];
	   
	   $(document).ready(function(){//jquery 화면로딩(html을 모두 불러온후)이 끝나면 스크립트 실행
		   debugger;//브레이크 포인트 DevTools가 열린상태에서 이문구를 만나면 스크립트 중지됨, 중지후 F8키 클릭시 다시진행됨

		   //로딩시 또는 메뉴변경시 이미지위치와 설명 초기화
		   let initComment = function(){
			   $('.image').css({'display':'block','background-position':'100% 90%'});//이미지 중간 위치
			   $('.comment').css({'display':'none'});//설명 숨김
		   };
		   
		   let dataInsert = function(){
			   //전체 신발 화면에 뿌린다(홈)
			   let shoesHtml='';
			   for(let i=0 ; i<data.length ; i++){
				   shoesHtml +='\n<div class="content"><div class="image img'+data[i].id+'" style="background-image:url(img/'+data[i].image+')">';
				   shoesHtml +='\n  </div><div class="comment">['+data[i].title+']<br>'+data[i].comment+'</div>'
				   shoesHtml +='\n</div>';
			   }
			   $('#content').empty();//#content 하위 html 삭제
			   $('#content').append(shoesHtml);//#content 하위에 shoesHtml 삽입

			   initComment();
		   }

		   if(!$('#nav-menu.menu').hasClass('.selectMenu')){//메뉴에 selectMenu 클래스가 없으면.. '!'는 Not
			   $('.nav-menu').empty();//메뉴 초기화
			   
			   //메뉴생성(한개 화면에서 처리하기 위해..)
			   let menuHtml='';
			   menuHtml += '<a class="menu" id="man">Man</a>';
			   menuHtml += '<a class="menu" id="woman">Woman</a>';
			   menuHtml += '<a class="menu" id="kid">Kid</a>';
			   //.nav-menu에 메뉴를 넣어준다
			   $('.nav-menu').append(menuHtml);
			   
			   dataInsert();//메뉴 하위에 데이터 뿌려줌..
		   }

		   //HOME 버튼 클릭시
		   $('#home').click(function(){//id가 home인거 클릭시
			   $('.menu').removeClass('selectMenu');//메뉴에서 selectMenu 클래스를 모두 제거함 
			   dataInsert();//메뉴 하위에 데이터 뿌려줌..
		   });

		   //메뉴 클릭시
		   $('.menu').click(function(){//class가 menu인거 클릭시
			   let selectedMenu = $(this).text();//클릭한 메뉴의 텍스트 즉 'Man' or 'Woman' or 'Kid'
			   $('.menu').removeClass('selectMenu');//메뉴에서 selectMenu 클래스를 모두 제거함 
			   $(this).addClass('selectMenu');//현재 클릭한 메뉴에만 selectMenu 클래스를 넣어줌

			   let filterData = [];//배열 변수선언
			   //category가 man or woman or kis 인거만 filterData 배열에 넣어준다.
			   for(let i=0; i<data.length ; i++){
				   //selectedMenu.toLowerCase() 는 소문자로 만들어주는거
				   if(data[i].category == selectedMenu.toLowerCase()){//data의 i번째 데이터의 category가 'man' 이면
					   filterData.push(data[i]);//filterData 배열에 data의 category가 'man'인거 하나씩 넣어줌
				   }
			   }
			   shoesHtml='';
			   for(let i=0 ; i<filterData.length ; i++){
				   shoesHtml +='\n<div class="content"><div class="image img'+filterData[i].id+'" style="background-image:url(img/'+filterData[i].image+')">';
				   shoesHtml +='\n  </div><div class="comment" style="display:none;">['+filterData[i].title+']<br>'+filterData[i].comment+'</div>'
				   shoesHtml +='\n</div>';
			   }
			   $('#content').empty();//#content 하위 html 삭제
			   $('#content').append(shoesHtml);//#content 하위에 shoesHtml 삽입

			   initComment();
		   });

		   /******************************* 
				 이미지 hover 처리
			   이미지 마우스 오버시 
			   $(this) 는 현재 클릭한 객체
		   ********************************/
		   $(document).on('mouseover','.image',function(){
			   $('.comment').css({'display':'none'});
			   $(this).css({'display':'block','background-position':'100% 100%'});
			   $(this).next().css({'display':'block'});				
		   });

		   /******************************* 
			   이미지 마우스 아웃시 
			   $(this) 는 현재 클릭한 객체
		   ********************************/
		   $(document).on('mouseout','.image',function(){
			   $(this).css({'display':'block','background-position':'100% 90%'});
			   $(this).next().css({'display':'none'});
		   });
		   initComment();//최초 로딩시 comment 숨기기위해 함수 호출
	   });