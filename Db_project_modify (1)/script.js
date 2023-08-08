		//데이터 정의 JSON 타입으로 작성(추후 DB 연동시 DB 데이터로 대체함)
		//신발 설명은 일단 여기서 수정하면 됨
		const data = [
			{category:'man',id:'01',image:'m1.png',title:'Adidas',comment:'Adidas Yeezy Foam RNNR MX Cinder'}
		   ,{category:'man',id:'02',image:'m2.png',title:'Jordan',comment:'Jordan 1 Retro Low OG Black Toe'}
		   ,{category:'man',id:'03',image:'m3.png',title:'Asics',comment:'Asics Gel-Kayano 14 Cream Black'}
		   ,{category:'man',id:'04',image:'m4.png',title:'Nike',comment:'Nike Air Force 1 07 WB Flax'}
		   ,{category:'man',id:'05',image:'m5.png',title:'New Balance',comment:'New Balance 530 White Silver'}
		   ,{category:'man',id:'06',image:'m6.png',title:'Nike x Supreme',comment:'Nike x Supreme Air Force 1 Low White'}
		   ,{category:'man',id:'07',image:'m7.png',title:'Jordan 1 x Travis Scott',comment:'Jordan 1 x Travis Scott Retro Low OG SP Sail and Ridgerock'}
		   ,{category:'man',id:'08',image:'m8.png',title:'Oofos',comment:'Oofos OOriginal Black'}

		   ,{category:'woman',id:'09',image:'w1.png',title:'Colecole',comment:'Colecole New Wave White'}
		   ,{category:'woman',id:'10',image:'w2.png',title:'Miu Miu',comment:'Miu Miu Satin Ballerinas Pumps Toe Black'}
		   ,{category:'woman',id:'11',image:'w3.png',title:'Adidas',comment:'Adidas Bermuda Glow Pink'}
		   ,{category:'woman',id:'12',image:'w4.png',title:'Adidas',comment:'Adidas Superstar Core Black White'}
		   ,{category:'woman',id:'13',image:'w5.png',title:'Onitsuka',comment:'Onitsuka Tiger Mexico 66 White Silver'}
		   ,{category:'woman',id:'14',image:'w6.png',title:'New Balance',comment:'New Balance 574 Legacy Navy'}
		   ,{category:'woman',id:'15',image:'w7.png',title:'Adidas',comment:'Adidas Gazelle Dark Green Cream White'}
		   ,{category:'woman',id:'16',image:'w8.png',title:'Nike',comment:'Nike Air Force 1 07 Low Triple Black'}
		   
		   ,{category:'kid',id:'17',image:'k1.png',title:'Golden Goose',comment:'Golden Goose Superstar White Navy Heel Tab Sneakers'}
		   ,{category:'kid',id:'18',image:'k2.png',title:'Crocs',comment:'Crocs Classic Crystals Pearls Clog White'}
		   ,{category:'kid',id:'19',image:'k3.png',title:'Burberry',comment:'Burberry Vintage Check Cotton Leather Sneakers Archive Beige'}
		   ,{category:'kid',id:'20',image:'k4.png',title:'UGG',comment:'UGG Classic Clear Mini II Natural Black'}
		   ,{category:'kid',id:'21',image:'k5.png',title:'Adidas',comment:'Adidas Yeezy Slide Bone 2022'}
		   ,{category:'kid',id:'22',image:'k6.png',title:'Burberry',comment:'Burberry Icon Stripe Logo Print Cotton Gabardine Sneakers Optic White'}
		   ,{category:'kid',id:'23',image:'k7.png',title:'Nike',comment:'Nike Dunk Low Retro Black'}
		   ,{category:'kid',id:'24',image:'k8.png',title:'Nike',comment:'Nike Air Zoom Alphafly Next% Flyknit Rawdacious'}
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