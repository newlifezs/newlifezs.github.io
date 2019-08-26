function Click(){
    var colors = ["rgba(11, 199, 255)", "rgb(227,227,227)", "rgb(199,255,212)", "rgb(199,252,255)", 
                  "rgb(255,199,255)", "rgb(255,243,199)", "rgb(255,199,199)"];
    var texts = ["دلبر و یار من تویی رونق کار من تویی<br><br>باغ و بهار من تویی بهر تو بود بود من", "بی همگان بسر شود بی تو بسر نمی‌شود",
                 "شاید من همیشه کنارت نباشم ول وقتی دور از همیم یادت باشه تو همیشه در قلب من هستی", "برای دنیا شاید یک نفر باشی اما برای من تمام دنیایی",
                 "دوست‌ترت دارم از هر چه دوست<br><br>ای تو به من از خود من خویشتر", "تو تمنای من و یار من و جان منی", "جانی و دلی ای دل و جانم همه تو",
                 "میان ما و شما عهد در ازل رفته‌ست<br><br>هزار سال برآید همان نخستینی", "آرام و قرار دل دیوانه ی من باش", "از تمام جهان سهم من تو باشی و بس",
                 "دوست‌ترت دارم از هر چه دوست<br><br>ای تو به من از خود من خویشتر"]
    var choose_random_color = colors[Math.floor(Math.random()*colors.length)];
    var choose_random_text = texts[Math.floor(Math.random()*texts.length)];
    wrapper = document.getElementById("wrapper");
    neon = document.getElementById("neon_light");
    poem = document.getElementById("poem");
    wrapper.style.backgroundColor = choose_random_color;
    neon.style.display = "none";
    poem.style.display = "block";
    poem.innerHTML = choose_random_text;
    wrapper.style.direction = "rtl";
}
