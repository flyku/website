$(function(){
  indexJs.onloadFullPage();
  indexJs.onloadFirPageAnimation();
  indexJs. SecondPageAnimation();
  indexJs. ThirdPageAnimation();
});
var indexJs = {
  //fullPage加载全屏效果
  onloadFullPage:function(){
    $('#superContainer').fullpage({
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
      sectionsColor: ['#000000', '#262626', '#1A1A1A', '#27272b', '#ffffff', '#DE564B'],
      navigation: true,
      navigationPosition: 'right',
      afterLoad: function (anchorLink, index) {
        if(index === 4) {
          $(".customs").removeClass("hide").addClass("animated fadeIn");
        }else{
          $(".customs").removeClass("animated fadeIn").addClass("hide");
        };
        if (index === 6) {
          $(".fot_t_l").addClass("animated fadeInLeft");
          $(".fot_t_r").addClass("animated fadeInRight");
          $(".fot_log").addClass("animated fadeInUp");
          $(".fot_p1").addClass("animated fadeInUp");
          $(".fot_p2").addClass("animated fadeInUp");
          $(".fot_p3").addClass("animated fadeInUp");
          $(".fot_b").addClass("animated fadeInUp");
        } else {
          $(".fot_t_l").removeClass("animated fadeInLeft");
          $(".fot_t_r").removeClass("animated fadeInRight");
          $(".fot_log").removeClass("animated fadeInUp");
          $(".fot_p1").removeClass("animated fadeInUp");
          $(".fot_p2").removeClass("animated fadeInUp");
          $(".fot_p3").removeClass("animated fadeInUp");
          $(".fot_b").removeClass("animated fadeInUp");
        }
      }
    });
  },
  // 加载第一屏动画
  onloadFirPageAnimation :function(){
    var bodys=document.getElementById('body');

      var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

      var container;
      var camera, scene, renderer;

      var particles, particle, count = 0;

      var mouseX = 100, mouseY = -400;

      var windowHalfX = window.innerWidth / 2;
      var windowHalfY = window.innerHeight / 2;

      init();
      animate();

      function init() {

        container = document.createElement( 'div' );
        bodys.appendChild( container );

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 2000;

        scene = new THREE.Scene();

        particles = new Array();

        var PI2 = Math.PI * 2;
        var material = new THREE.ParticleCanvasMaterial( {

          color: 0xe5d0ac,
          program: function ( context ) {

            context.beginPath();
            context.arc( 0, 0, 1, 0, PI2, true );
            context.fill();

          }

        } );

        var i = 0;

        for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

          for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

            particle = particles[ i ++ ] = new THREE.Particle( material );
            particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
            particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
            scene.add( particle );

          }

        }

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        /* document.addEventListener( 'mousemove', onDocumentMouseMove, false );  鼠标move效果*/
        /*document.addEventListener( 'touchstart', onDocumentTouchStart, false );*/
        /*document.addEventListener( 'touchmove', onDocumentTouchMove, false );*/

        //

        window.addEventListener( 'resize', onWindowResize, false );

      }

      function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

      }

      //

      function onDocumentMouseMove( event ) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;

      }

      function onDocumentTouchStart( event ) {

        if ( event.touches.length === 1 ) {

          event.preventDefault();

          mouseX = event.touches[ 0 ].pageX - windowHalfX;
          mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

      }

      function onDocumentTouchMove( event ) {

        if ( event.touches.length === 1 ) {

          event.preventDefault();

          mouseX = event.touches[ 0 ].pageX - windowHalfX;
          mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

      }

      //

      function animate() {

        requestAnimationFrame( animate );

        render();


      }

      function render() {

        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y += ( - mouseY - camera.position.y ) * .05;
        camera.lookAt( scene.position );

        var i = 0;

        for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

          for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

            particle = particles[ i++ ];
            particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
            particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;

          }

        }

        renderer.render( scene, camera );

        count += 0.1;

      }
  },
  // 加载第二屏动画
  SecondPageAnimation: function(){
    /*SJ*/
      $(".two_Lister>div").on("mouseover",function(){
        $(this).removeClass("gb");
        $(this).addClass("bg");
      }).on("mouseout",function(){
        $(this).removeClass("bg");
        $(this).addClass("gb");
      });

      $(".two_Lister span").on("mouseover",function(){
        $(this).removeClass("gb");
        $(this).addClass("bg");
      }).on("mouseout",function(){
        $(this).removeClass("bg");
        $(this).addClass("gb");
      });
    },
  // 加载第三屏动画
  ThirdPageAnimation: function(){
    $(".three_Lister li").each(function(i,val){
      $(this).on("mouseenter",function(){
        $(".shows").show().addClass("animated fadeOut")
        $(this).siblings().find("h3").show()
        $(".backImg img").hide()
        $(".backImg img").eq(i).show().addClass("animated zoomIns")

        $(this).find("h3").attr("class","animated fadeOutDown").on("webkitAnimationEnd",function(){$(this).hide()});
        $(this).find(".mark").show().parents("li").siblings().find(".mark").hide();
        $(this).find(".mark").find("p").addClass("animated fadeInUp")
        $(this).find(".mark").find("h4").addClass("animated fadeInUp")
      }).on("mouseleave",function(){
        $(".shows").hide().removeClass("animated fadeOut")
        $(this).find("h3").hide().attr("class","animated fadeInUp").on("webkitAnimationEnd",function(){$(this).show()});
      })
    })


  }

}
