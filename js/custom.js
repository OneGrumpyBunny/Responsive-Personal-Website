function displayImg() {
    /* define images in array */
    var imgArr = ["https://lh4.ggpht.com/J2RFnjMILHewWkPYutx5H2yzlvce5K3uOJgdX5ZiJDvHnqiyLQPr6xufGtGDaabYt75KBZXxSFx_i5fG6ZvUGH8=s320-c-rj-v1-e365","https://lh3.googleusercontent.com/6b0B42zJXvVUEs3MCtIlmtl3v3cxcLbMJEQecQ61GpcfWKp3Nd4l_IOT3pgyIegoMyR2jtqfRQF_4hwLOQ_o=s320-c-rj-v1-e365", "https://lh3.googleusercontent.com/_xAWA8LmyCfkh4pJegi1DHy_gG3egbhRTxe7M5t6ID-0lCrepeGi8yQAdI4wNWxqM4HyEbR-2iyVgxKEJ56rMQ=s320-c-rj-v1-e365","https://lh3.googleusercontent.com/Sz5gGKy0rLtoERqhmO7ImYdlbv6VDBvCNelo3Q_2ZhAoKyfJHCawoPzKK9_Z3h1Mkn3Nt3dHeiNgbFx-cxlGdg=s320-c-rj-v1-e365"];
    /* pull a random number from 0 to length of array*/
    var ranNum = Math.floor((Math.random() * imgArr.length-1) + 1);
    /* select the image at the random number location in array */
    var thisURL = imgArr[ranNum];
  
    /* define fade in / fade out based on image(s) current state */
    if ($("#photo0").is(":visible")) { 
      $("#photo0").fadeOut(3000); 
      $("#photo1").attr("src",thisURL); 
      $("#photo1").fadeIn(3000);
    } else if ($("#photo1").is(":visible")){
      $("#photo1").fadeOut(3000); 
      $("#photo0").attr("src",thisURL);
      $("#photo0").fadeIn(3000); 
    }  
  }
  
  $(document).ready(function() {
    displayImg();
    setInterval(displayImg,5500);
  });