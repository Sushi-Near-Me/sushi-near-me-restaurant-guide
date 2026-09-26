$('.NorthAmericaContainer_point').hide(0);
let cartList = [];
let totalAmount = 0;
//pages opening functions
function openHomePage(){
    $('.content').empty();
    $('#menu').css('font-weight', '400')
    $('#homePage').css('font-weight', '600')
    $('#orders').css('font-weight', '400')
    $('#contacts').css('font-weight', '400')
    $('.content').append(
        `
            <div class="home">
                <div class="screen mainPage">
                    <div class="mainPage_content">
                        <div class="mainPage_content_textPart">
                            <div class="mainPage_content_title">Did you know?</div>
                            <div class="mainPage_content_text">In Japanese word「 Yorokobi 」or in original「 喜び 」actually means: pleasure, joy, delight. You exactly can quess why did we name our company this way. You can try this Yorokobi by yourself any time you want!  </div>
                            <div class="mainPage_content_buttons">
                                <div class="mainPage_content_button" id="mainPage_content_menuBtn">Menu</div>
                                <div class="mainPage_content_button" id="mainPage_content_moreInfoBtn">More info</div>
                            </div>
                        </div>
                        <div class="mainPage_content_imgPart">
                            <div class="mainPage_content_imgPart_FullImg">
                                <img class="mainPage_sushiImg" src="./imgs/main page sushi pic.png" alt="">
                                <img class="mainPage_bowlImg" src="./imgs/main page sushi bowl.png" alt="">
                            </div>
        
                        </div>
                    </div>
                    <img class="mainPage_background" src="./imgs/main page background.png" alt="">
                </div>
                <div class="screen locationPage" data-aos="fade-up" data-aos-duration="1000">
                    <div class="locationPage_title">Where are we?</div>
                    <div class="locationPage_worldContainer">
                        <div class="NorthAmericaContainer">
                            <img class="mainlandImg" id="NorthAmerica" src="./imgs/Untitled12_20240127204359.png" alt="">
                            <div class="NorthAmericaContainer_points">
                                <img class="NorthAmericaContainer_point" id="mapPoint1" src="./imgs/map point.png" alt="">
                                <img class="NorthAmericaContainer_point" id="mapPoint2" src="./imgs/map point.png" alt="">
                                <img class="NorthAmericaContainer_point" id="mapPoint3" src="./imgs/map point.png" alt="">
                                <img class="NorthAmericaContainer_point" id="mapPoint4" src="./imgs/map point.png" alt="">
                                <img class="NorthAmericaContainer_point" id="mapPoint5" src="./imgs/map point.png" alt="">
                                <img class="NorthAmericaContainer_point" id="mapPoint6" src="./imgs/map point.png" alt="">
                                <img class="NorthAmericaContainer_point" id="mapPoint7" src="./imgs/map point.png" alt="">
                                <img class="NorthAmericaContainer_point" id="mapPoint8" src="./imgs/map point.png" alt="">
                                <img class="NorthAmericaContainer_point" id="mapPoint9" src="./imgs/map point.png" alt="">
                                <img class="NorthAmericaContainer_point" id="mapPoint10" src="./imgs/map point.png" alt="">
                                <img class="NorthAmericaContainer_point" id="mapPoint11" src="./imgs/map point.png" alt="">
                                <img class="NorthAmericaContainer_point" id="mapPoint12" src="./imgs/map point.png" alt="">
                            </div>
                        </div>
                        <img class="mainlandImg" id="SouthAmerica" src="./imgs/Untitled12_20240127204758.png" alt="">
                        <img class="mainlandImg" id="Africa" src="./imgs/Untitled12_20240127204938.png" alt="">
                        <img class="mainlandImg" id="Eurasia" src="./imgs/Untitled12_20240127205157.png" alt="">
                        <img class="mainlandImg" id="Oceania" src="./imgs/Untitled12_20240127205235.png" alt="">
                    </div>
                    <div class="locationPage_statistics">
                        <div class="locationPage_statistics_column">
                            <div class="locationPage_statistics_num">129</div>
                            <div class="locationPage_statistics_desc">Restaurants in the world</div>
                        </div>
                        <div class="locationPage_statistics_column">
                            <div class="locationPage_statistics_num">1472</div>
                            <div class="locationPage_statistics_desc">High quality employees</div>
                        </div>
                        <div class="locationPage_statistics_column locationPage_statistics_column_adapriveMargin">
                            <div class="locationPage_statistics_num">15000+</div>
                            <div class="locationPage_statistics_desc">Good reviews from customers</div>
                        </div>
                        <div class="locationPage_statistics_column locationPage_statistics_column_adapriveMargin">
                            <div class="locationPage_statistics_num">100+</div>
                            <div class="locationPage_statistics_desc">Different tasty dishes to try</div>
                        </div>
                    </div>
                </div>
                <div class="screen dishPage" data-aos="fade-up" data-aos-duration="1000">
                    
                    <div class="dishPage_textContainer">
                        <div class="dishPage_textContainer_title">The best choice</div>
                        <img class="dishPage_img" src="./imgs/dishPage img.png" alt="">
                        <div class="dishPage_textContainer_mainText">Craving the exquisite flavors of Japan? Indulge in our tantalizing Sushi Set, where every bite is a journey to culinary perfection! For every special or simple evening. No meter where you are and who is with you, the taste will surely improve your mood. </div>
                        <div class="dishPage_textContainer_btnsCon">
                            <div class="dishPage_textContainer_btn" id="dishPage_textContainer_moreInfo">More info</div>
                            <div class="dishPage_textContainer_btn" id="dishPage_textContainer_orderNow">Order now</div>
                        </div>
                    </div>
                    <div class="dishPage_sushiInfo">
                        <div class="dishPage_sushiInfo_name">Gunkan Maki</div>
                        <div class="dishPage_sushiInfo_price">only 7$ now</div>
                    </div>
                </div>
                <div class="futer">
                    <div class="futer_hr_container">
                        <div class="futer_hr"></div>
                    </div>
                    <div class="futer_infoCon">
                        <div class="futer_infoCon_text">
                            <div class="futer_infoCon_text_columns">
                                <div class="futer_infoCon_text_column futer_infoCon_text_column_Navigation">
                                    <div class="futer_infoCon_text_column_heading">Navigation</div>
                                    <div class="futer_infoCon_text_column_el">Home page</div>
                                    <div class="futer_infoCon_text_column_el">Menu</div>
                                    <div class="futer_infoCon_text_column_el">Orders</div>
                                    <div class="futer_infoCon_text_column_el">Contacts</div>
                                </div>
                                <div class="futer_infoCon_text_column futer_infoCon_text_column_Help">
                                    <div class="futer_infoCon_text_column_heading">Help</div>
                                    <div class="futer_infoCon_text_column_el">Contacts us</div>
                                    <div class="futer_infoCon_text_column_el">Problems</div>
                                    <div class="futer_infoCon_text_column_el">Questions</div>
                                    <div class="futer_infoCon_text_column_el">Support</div>
                                </div>
                                <div class="futer_infoCon_text_column futer_infoCon_text_column_Amenities">
                                    <div class="futer_infoCon_text_column_heading">Amenities</div>
                                    <div class="futer_infoCon_text_column_el">Download app</div>
                                    <div class="futer_infoCon_text_column_el">JPS restaurants map</div>
                                    <div class="futer_infoCon_text_column_el">Rate us</div>
                                </div>
                            </div>
                            <div class="futer_infoCon_text_Yorokobi">
                                <img class="futer_infoCon_text_Yorokobi_Logo" src="./imgs/Yorokobi red logo.png" alt="">
                                <div class="futer_infoCon_text_Yorokobi_text">The best Japanese cuisine restaurants in the world. Try it yourself!</div>
                            </div>
                        </div>
                        <div class="futer_infoCon_pictures">
                            <img class="futer_infoCon_pictures_sushi1" src="./imgs/futer_sushi1.png" alt="">
                            <img class="futer_infoCon_pictures_sushi2" src="./imgs/futer_sushi2.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        `
    )
    $('.header').css('background-color', '#CB324D')
    $('.header_nav_el').css('color', '#13161B')
    $('.header').css('padding', '40px 40px 0 40px')
    $('.header_logo').attr('src', './imgs/mian page logo.png')
    $('.ordersCount').css('background-color', '#13161B')
    $('.ordersCount').css('color', '#CB324D')
    $('select').css('background-color', '#CB324D')
    $('select').css('color', '#13161B')
    $('.header_theme').css('background-color', '#13161B')
    $('.header_themeCircle').css('background-color', '#CB324D')
    $('.header_themeCircle').css('border', '#13161B 3px solid')
    $('.header_burgerRow').css('background-color', '#13161B')

}
function openMenuPage() {
    $('.content').empty();
    $('#menu').css('font-weight', '600');
    $('#homePage').css('font-weight', '400');
    $('#orders').css('font-weight', '400');
    $('#contacts').css('font-weight', '400');
    $('.content').append(`
        <div class="menu">
            <div class="dishesContainer">
                <div class="dishesContainer_typeChoise">
                    <div class="dishesContainer_typeChoise_item" id="sushi">Sushi</div>
                    <div class="dishesContainer_typeChoise_item" id="soba">Soba</div>
                    <div class="dishesContainer_typeChoise_item" id="ramen">Ramen</div>
                    <div class="dishesContainer_typeChoise_item" id="snack">Snacks</div>
                    <div class="dishesContainer_typeChoise_item" id="drink">Drinks</div>
                </div>
                <div class="dishesContainer_dishes"></div>
            </div>
        </div>
    `);

    $('.header').css('background-color', '#13161B');
    $('.header_nav_el').css('color', '#F73859');
    $('.header').css('padding', '40px');
    $('.header_logo').attr('src', './menuImgs/red logo.png');
    $('.ordersCount').css('background-color', '#F73859');
    $('.ordersCount').css('color', '#13161B');
    $('select').css('background-color', '#13161B');
    $('select').css('color', '#F73859');
    $('.header_theme').css('background-color', '#F73859');
    $('.header_themeCircle').css('background-color', '#13161B');
    $('.header_themeCircle').css('border', '#F73859 3px solid');
    $('.header_burgerRow').css('background-color', '#F73859');

    function handleTypeClick(type) {
        $('.dishesContainer_typeChoise_item').css({
            'background-color': '#13161B',
            'color': '#F73859'
        });
        $(`#${type}`).css({
            'background-color': '#F73859',
            'color': '#fff'
        });

        renderDishesByType(type);
    }

    function renderDishesByType(type) {
        $('.dishesContainer_dishes').empty();
        for (let dish of dishes) {
            if (dish.type === type) {
                let $dishContainer = $('<div class="dishesContainer_sushi"></div>');
                $dishContainer.append(`
                    <img class='dishesContainer_sushi_img' src="${dish.image}" alt="">
                    <div class="dishesContainer_sushi_namePriceCon">
                        <div class="dishesContainer_sushi_name">${dish.name}</div>
                        <div class="dishesContainer_sushi_price">$${dish.price}</div>
                    </div>
                    <div class="dishesContainer_sushi_availability"></div>
                    <div class="dishesContainer_sushi_btns">
                        <div class="dishesContainer_sushi_btn" id="dishInfoBtn">Info</div>
                        <div class="dishesContainer_sushi_btn dishOrderBtn" id="${dish._id}">Order</div>
                    </div>
                    <div class="dishesContainer_sushi_rating"></div>
                `);

                if (dish.availability) {
                    $dishContainer.find('.dishesContainer_sushi_availability').html('Available now <i class="fa-solid fa-check"></i>');
                } else {
                    $dishContainer.find('.dishesContainer_sushi_availability').html('Not available now <i class="fa-solid fa-xmark"></i>').css('color', '#959595');
                }

                let ratingHtml = '';
                for (let i = 0; i < 5; i++) {
                    if (i < dish.rating) {
                        ratingHtml += '<i class="fa-solid fa-star"></i>';
                    } else {
                        ratingHtml += '<i class="fa-regular fa-star"></i>';
                    }
                }
                $dishContainer.find('.dishesContainer_sushi_rating').html(ratingHtml);
                $('.dishesContainer_dishes').append($dishContainer);
            }
        }
        ordering(dishes);
    }

    const localDishes = [
        { _id: 'sushi-roll', type: 'sushi', name: 'Sushi Roll', price: 12, image: './menuImgs/sushi 1.png', availability: true, rating: 5 },
        { _id: 'salmon-sashimi', type: 'sushi', name: 'Salmon Sashimi', price: 15, image: './menuImgs/salmon sashimi.png', availability: true, rating: 5 },
        { _id: 'gyoza', type: 'snack', name: 'Gyoza', price: 8, image: './menuImgs/gyoza.png', availability: true, rating: 4 },
        { _id: 'soba', type: 'soba', name: 'Soba', price: 11, image: './menuImgs/soba 1.png', availability: true, rating: 4 },
        { _id: 'matcha-soda', type: 'drink', name: 'Matcha Soda', price: 6, image: './menuImgs/Matcha Soda.png', availability: true, rating: 4 }
    ];

    function initializeMenu(menuDishes) {
        dishes = menuDishes;
        renderDishesByType('sushi');

        $('#sushi').off('click').on('click', () => handleTypeClick('sushi'));
        $('#snack').off('click').on('click', () => handleTypeClick('snack'));
        $('#soba').off('click').on('click', () => handleTypeClick('soba'));
        $('#ramen').off('click').on('click', () => handleTypeClick('ramen'));
        $('#drink').off('click').on('click', () => handleTypeClick('drink'));
    }

    axios.get('/dishes')
        .then(res => {
            initializeMenu(Array.isArray(res.data) && res.data.length ? res.data : localDishes);
        })
        .catch(() => {
            initializeMenu(localDishes);
        });
}


// Ordering function
function ordering(dishes) {
    $('.dishOrderBtn').click((e) => {
        let dishID = e.target.id;
        let dishToAdd = dishes.find(dish => dish._id === dishID);
        if (dishToAdd) {
            cartList.push(dishToAdd);
            $('.ordersCount').html(cartList.length);
            saveCartToCookie();
        }
    });
}

// Cookies popup functionality
$(document).ready(function () {
    checkPopupCookie();
    loadCartFromCookie();
});
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkPopupCookie() {
    const popupClosed = getCookie("popupClosed");
    if (popupClosed === "true") {
        $(".cookiesPopupCon").css('display', 'none');
    } else {
        $(".cookiesPopupCon").css('display', 'flex');
        $(".cookiesPopup_accept").click(function () {
            closePopup();
        });
    }
}
function closePopup() {
    $(".cookiesPopupCon").css('display', 'none');
    setCookie("popupClosed", "true", 365);
}
function saveCartToCookie() {
    const cartlistString = JSON.stringify(cartList);
    setCookie('cartList', cartlistString, 365);
}
function loadCartFromCookie() {
    const cartlistString = getCookie('cartList');
    if (cartlistString) {
        cartList = JSON.parse(cartlistString);
        $('.ordersCount').html(cartList.length);
    }
}
function openOrdersPage(){
    $('.content').empty();
    $('#orders').css('font-weight', '600');
    $('#menu').css('font-weight', '400');
    $('#homePage').css('font-weight', '400');
    $('#contacts').css('font-weight', '400');
    $('.content').append(
        `
        <div class="orders screen">
            <div class="leftPart">
                <h3>You selected:</h3>
                <div class="ordersContainer"></div>
            </div>
            <div class="rightPart">
                <h3>Confirm order:</h3>
                <div class="paymentContainer">
                    <h3 id="chosenDishesCount"></h3>
                    <h3 id="totalAmount">Total price: $${totalAmount}</h3>
                    <h2>Buy just in 1 click! Pay with:</h2>
                    <div class="paymentMethods">
                        <div class="paymentMethod_con"><img class="paymentMethod" src="./imgs/google-pay.png" alt=""></div>
                        <div class="paymentMethod_con"><img class="paymentMethod" src="./imgs/apple-pay.png" alt=""></div>
                    </div>
                    <h2>Or enter your data:</h2>
                    <div class="inputsContainer">
                        <input type="text" id="userName" placeholder="Name" class="payment_input">
                        <input type="text" id="userPhone" placeholder="Phone" class="payment_input">
                    </div>
                    <input type="text" placeholder="Card Number" class="payment_input">
                    <div class="inputsContainer">
                        <input type="text" id="expiryDate" placeholder="Expiry Date" class="payment_input">
                        <input type="text" id="securityCode" placeholder="Security Code" class="payment_input">
                    </div>
                    <input type="text" placeholder="Message" id="userMessage" class="payment_input">
                    <div id="buyBtn">Buy now</div>
                </div>
            </div>
        </div>
        `
    );
    
    $('.header').css('background-color', '#13161B');
    $('.header_nav_el').css('color', '#F73859');
    $('.header').css('padding', '40px 40px 0 40px');
    $('.orders').css('padding', '0 40px');
    $('.header_logo').attr('src', './menuImgs/red logo.png');
    $('.ordersCount').css('background-color', '#F73859');
    $('.ordersCount').css('color', '#13161B');
    $('select').css('background-color', '#13161B');
    $('select').css('color', '#F73859');
    $('.header_theme').css('background-color', '#F73859');
    $('.header_themeCircle').css('background-color', '#13161B');
    $('.header_themeCircle').css('border', '#F73859 3px solid');
    $('.header_burgerRow').css('background-color', '#F73859');
    $('.ordersContainer').css('padding', '0px');

    totalAmount = 0;

    for(let order of cartList){
        $('.ordersContainer').append(
            `
            <div class="order">
                <div class="order_name">${order.name}</div>
                <div class="order_separetiveLine"></div>
                <div class="orderBtns">
                    <div class="orderBtn order_infoBtn">Info</div>
                    <div class="orderBtn order_cancelBtn" id="deleteFromCart${order._id}">Cancel</div>
                </div>
                <div class="order_separetiveLine"></div>
                <div class="order_price">$${order.price}</div>
            </div>
            `
        );
        totalAmount += order.price;
    }

    $('#totalAmount').text(`Total price: $${totalAmount}`);

    //ordering
    $('#buyBtn').click(() => {
        let data = {
            list: cartList,
            name: $('#userName').val(),
            phone: $('#userPhone').val(),
            message: $('#userMessage').val(),
        };
        console.log(data);
        axios.post('/new-order', data)
            .then(res => {
                console.log(`Order data was sent`);
                cartList = [];
                $('.payment_input').val('');
                openOrdersPage(); // Refresh the orders page after placing the order
            })
            .catch(() => {
                const localOrders = JSON.parse(localStorage.getItem('orders') || '[]');
                localOrders.push(data);
                localStorage.setItem('orders', JSON.stringify(localOrders));
                cartList = [];
                saveCartToCookie();
                $('.payment_input').val('');
                openOrdersPage();
            });
    });

    $('.order').on('click', '.order_cancelBtn', function(e) {
        e.stopPropagation();
        let ID = e.target.id;
        if (ID.substring(0, 14) === 'deleteFromCart') {
            let orderID = ID.substring(14);
            let index = cartList.findIndex(order => order._id === orderID);
            if (index !== -1) {
                cartList.splice(index, 1);
                openOrdersPage();
            }
        }
        saveCartToCookie();
        $('.ordersCount').html(cartList.length);
    });
}
function openContactsPage(){
    $('.content').empty();
    $('#contacts').css('font-weight', '600')
    $('#menu').css('font-weight', '400')
    $('#homePage').css('font-weight', '400')
    $('#orders').css('font-weight', '400')
    $('.content').append(
        `        <div class="contacts">
            <div class="contactsConainer">
                <div class="connectionForm">
                    <h1>Connection form</h1>
                    <h5>Requests? Comments? Feedback? Email us today!</h5>
                    <div class="connectionForm_form">
                        <input type="text" id="name" placeholder="Name*">
                        <input type="text" id="email" placeholder="Email address*">
                        <textarea id="message" cols="30" rows="10" placeholder="Message*"></textarea>
                        <div id="sendBtn" >Send</div>
                    </div>
    
                </div>
                <div class="separetiveLine"></div>
                <div class="locationAndHours">
                    <h1>Location & hours</h1>
                    <h5>Nearest address:  240 E. Front. Lviv, 81010</h5>
                    <div class="locationAndHours_hoursAndMedia">
                        <div class="locationAndHours_hours">
                            <div class="locationAndHours_hours_daysClasification">
                                <div class="locationAndHours_hours_days">Monday till Friday:</div>
                                <div class="locationAndHours_hours_hours">8 a.m. - 10 p.m.</div>
                            </div>
                            <div class="locationAndHours_hours_daysClasification">
                                <div class="locationAndHours_hours_days">Saturday:</div>
                                <div class="locationAndHours_hours_hours">8 a.m. - 9 p.m.</div>
                            </div>
                            <div class="locationAndHours_hours_daysClasification">
                                <div class="locationAndHours_hours_days">Sunday:</div>
                                <div class="locationAndHours_hours_hours">9 a.m. - 7 p.m.</div>
                            </div>
                        </div>
                        <div class="locationAndHours_media">
                            <i class="fa-brands fa-telegram"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-x-twitter"></i>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.4311979919994!2d24.03364412371528!3d49.85314431266445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add0fb0b51967%3A0xc322dd8d8b30c48!2z0J3QvtCy0LAg0J_QvtGI0YLQsCDihJY2MA!5e0!3m2!1suk!2sua!4v1713295269704!5m2!1suk!2sua" width="100%" height="232" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <a href="https://www.google.com/maps?ll=49.852927,24.035403&z=15&t=m&hl=uk&gl=UA&mapclient=embed&cid=878815286662466632" target="_blank" ><button><i class="fa-solid fa-location-dot"></i>Open in Google Maps</button></a>
                </div>
            </div>
        </div>`
    )
    $('.header').css('background-color', '#13161B')
    $('.header_nav_el').css('color', '#F73859')
    $('.header').css('padding', '40px 40px 0 40px')
    $('.header_logo').attr('src', './menuImgs/red logo.png')
    $('.ordersCount').css('background-color', '#F73859')
    $('.ordersCount').css('color', '#13161B')
    $('select').css('background-color', '#13161B')
    $('select').css('color', '#F73859')
    $('.header_theme').css('background-color', '#F73859')
    $('.header_themeCircle').css('background-color', '#13161B')
    $('.header_themeCircle').css('border', '#F73859 3px solid')
    $('.header_burgerRow').css('background-color', '#F73859')
    $('.wrpa').css('overflow-y', 'hidden')
    $('.order_cancelBtn').click(()=>{
        $('.orderPopupsContainer').css('display', 'flex')
    })
    $('.cancelPopup_noBtn').click(()=>{
        $('.orderPopupsContainer').css('display', 'none')
    })
}
openHomePage()

//pages changing
$('#homePage').click(()=>{
    openHomePage()
})
$('#menu').click(()=>{
    openMenuPage()
})
$('#orders').click(()=>{
    openOrdersPage()
})
$('#contacts').click(()=>{
    openContactsPage()
})

//sushi hover animation
$('.mainPage_content_imgPart_FullImg').hover(
    () => {
        $('.mainPage_sushiImg').css({
            'transform': 'rotate(-32deg)',
            'bottom': '30px',
            'left': '140px',
        });
    },
    () => {
        $('.mainPage_sushiImg').css({
            'transform': 'rotate(0deg)',
            'bottom': '45px',
            'left': '185px',
        });
    }
);

//theme changing
let theme = localStorage.getItem('theme') || 'light';
$('.header_theme').click(function(){
    if(theme == 'light'){
        theme = 'dark';
        localStorage.setItem('theme', theme);
        changeTheme(theme);

    }else{
        theme = 'light';
        localStorage.setItem('theme', theme);
        changeTheme(theme);
    }
})
function changeTheme(theme){
    if(theme == 'light'){
        $('.header_theme').css('justify-content', 'flex-start');
        $('.wrap').css('background-color', '#fff');
        $('.header_nav').css('color', '#fff');
        $('select').css('background-color', '#F8385A');
        $('.mainPage_background').attr('src', './imgs/main page background white theme.png')
        $('.mainPage_sushiImg').attr('src', './imgs/main page sushi pic light theme.png')
        $('.mainPage_bowlImg').attr('src', './imgs/main page sushi bowl light theme.png')
        $('select').css('background-color', '#F8385A');
        $('select').css('color', '#fff');
        $('.header_themeCircle').css('background-color', '#F8385A');
        $('.header_themeCircle').css('border', '#fff 3px solid');
        $('.header_logo').attr('src', './imgs/mian page logo white theme.png')
        $('.header_theme').css('background-color', '#fff');
        $('.mainPage_content_title').css('color', '#fff');
        $('.mainPage_content_button').css('background-color', '#fff');
        $('.mainPage_content_button').css('color', '#F8385A');
        $('a').css('color', '#fff');
        $('.locationPage_statistics_desc').css('color', '#13161B');
        $('#mainPage_content_menuBtn').hover(
            () => {
                $('#mainPage_content_menuBtn').css({
                    'background-color': '#F8385A',
                    'color': '#fff',
                    'border': '#fff 3px solid',
                    'box-shadow': 'none',
                });
            },
            () => {
                $('#mainPage_content_menuBtn').css({
                    'background-color': '#fff',
                    'color': '#F8385A',
                    'border': 'none',
                    'box-shadow': 'none',

                });
            }
        );
        $('#mainPage_content_moreInfoBtn').hover(
            () => {
                $('#mainPage_content_moreInfoBtn').css({
                    'background-color': '#F8385A',
                    'color': '#fff',
                    'border': '#fff 3px solid',
                    'box-shadow': 'none',

                });
            },
            () => {
                $('#mainPage_content_moreInfoBtn').css({
                    'background-color': '#fff',
                    'color': '#F8385A',
                    'border': 'none',
                    'box-shadow': 'none',

                });
            }
        );
        $('.futer_infoCon_text_Yorokobi_text').css('color', '#13161B')
        $('.futer_infoCon_text_column_el').css('color', '#13161B')
        $('.dishPage_textContainer_mainText').css('color', '#13161B')
        $('.dishPage_sushiInfo_price').css('color', '#13161B')
        $('.dishPage_textContainer_btn').css('color', '#fff')
        $('#dishPage_textContainer_moreInfo').hover(
            () => {
                $('#dishPage_textContainer_moreInfo').css({
                    'background-color': '#fff',
                    'color': '#FF3257',
                    'border': '#FF3257 3px solid',
                });
            },
            () => {
                $('#dishPage_textContainer_moreInfo').css({
                    'background-color': '#FF3257',
                    'color': '#fff',
                    'border': '#FF3257 3px solid',

                });
            }
        );
        $('#dishPage_textContainer_orderNow').hover(
            () => {
                $('#dishPage_textContainer_orderNow').css({
                    'background-color': '#fff',
                    'color': '#FF3257',
                    'border': '#FF3257 3px solid',
                });
            },
            () => {
                $('#dishPage_textContainer_orderNow').css({
                    'background-color': '#FF3257',
                    'color': '#fff',
                    'border': '#FF3257 3px solid',

                });
            }
        );
        $('.ordersCount').css('background-color', '#fff')
        $('.ordersCount').css('color', '#F8385A')
        $('::selection').css('background-color', '#fff');
        $('::selection').css('color', '#CB324D');
        $('::-webkit-scrollbar-track').css('background-color', '#fff');
        $('.header_burgerRow').css('background-color', '#fff')
        $('.headerActivePage').css('background-color', '#fff')

    }else{
        $('.header_theme').css('justify-content', 'flex-end');
        $('.wrap').css('background-color', '#13161B');
        $('.header_nav').css('color', '#13161B');
        $('select').css('background-color', '#CB324D')
        $('select').css('color', '#13161B');
        $('.mainPage_background').attr('src', './imgs/main page background.png')
        $('.mainPage_sushiImg').attr('src', './imgs/main page sushi pic.png')
        $('.mainPage_bowlImg').attr('src', './imgs/main page sushi bowl.png')
        $('.header_themeCircle').css('background-color', '#CB324D');
        $('.header_themeCircle').css('border', '#13161B 3px solid');
        $('.header_logo').attr('src', './imgs/mian page logo.png')
        $('.header_theme').css('background-color', '#13161B');
        $('.mainPage_content_title').css('color', '#13161B');
        $('.mainPage_content_button').css('background-color', '#13161B');
        $('.mainPage_content_button').css('color', '#CB324D');
        $('a').css('color', '#13161B');
        $('#mainPage_content_menuBtn').hover(
            () => {
                $('#mainPage_content_menuBtn').css({
                    'background-color': '#CB324D',
                    'color': '#13161B',
                    'border': '#13161B 3px solid',
                    'box-shadow': 'none',

                });
            },
            () => {
                $('#mainPage_content_menuBtn').css({
                    'background-color': '#13161B',
                    'color': '#CB324D',
                    'border': 'none',
                    'box-shadow': 'none',

                });
            }
        );
        $('#mainPage_content_moreInfoBtn').hover(
            () => {
                $('#mainPage_content_moreInfoBtn').css({
                    'background-color': '#CB324D',
                    'color': '#13161B',
                    'border': '#13161B 3px solid',
                    'box-shadow': 'none',

                });
            },
            () => {
                $('#mainPage_content_moreInfoBtn').css({
                    'background-color': '#13161B',
                    'color': '#CB324D',
                    'border': 'none',
                    'box-shadow': 'none',

                });
            }
        );
        $('.locationPage_statistics_desc').css('color', '#fff')
        $('.futer_infoCon_text_Yorokobi_text').css('color', '#fff')
        $('.futer_infoCon_text_column_el').css('color', '#fff')
        $('.dishPage_textContainer_mainText').css('color', '#fff')
        $('.dishPage_sushiInfo_price').css('color', '#fff')
        $('.dishPage_textContainer_btn').css('color', '#13161B')
        $('#dishPage_textContainer_moreInfo').hover(
            () => {
                $('#dishPage_textContainer_moreInfo').css({
                    'background-color': '#13161B',
                    'color': '#FF3257',
                    'border': '#FF3257 3px solid',
                });
            },
            () => {
                $('#dishPage_textContainer_moreInfo').css({
                    'background-color': '#FF3257',
                    'color': '#13161B',
                    'border': '#13161B 3px solid',

                });
            }
        );
        $('#dishPage_textContainer_orderNow').hover(
            () => {
                $('#dishPage_textContainer_orderNow').css({
                    'background-color': '#13161B',
                    'color': '#FF3257',
                    'border': '#FF3257 3px solid',
                });
            },
            () => {
                $('#dishPage_textContainer_orderNow').css({
                    'background-color': '#FF3257',
                    'color': '#13161B',
                    'border': '#FF3257 3px solid',

                });
            }
        );
        $('.ordersCount').css('background-color', '#13161B')
        $('.ordersCount').css('color', '#CB324D')


        $('::selection').css('background-color', '#13161B')
        $('::selection').css('color', '#CB324D')

        $('::-webkit-scrollbar-track').css('background-color', '#13161B');
        $('.header_burgerRow').css('background-color', '#13161B')

        $('.headerActivePage').css('background-color', '#13161B')

    }
}
changeTheme(theme);

//mainlands hover animations
$('.NorthAmericaContainer').on({
    mouseenter: function() {
        $('.NorthAmericaContainer').css({
            'width': '285px',
            'height': '256px',
            'left': '307px',
            'top': '-26px'
        });
        setTimeout(() => {
            $('.NorthAmericaContainer_point').show(0);

        }, 500);
    },
    mouseleave: function() {
        $('.NorthAmericaContainer').css({
            'width': '255px',
            'height': '229px',
            'left': '328px',
            'top': '0'
        });
        $('.NorthAmericaContainer_point').hide(0);

    }
});
// $('.NorthAmericaContainer_point').on({
//     mouseenter: function() {
//         $('#NorthAmerica').css({
//             'width': '285px',
//             'height': '256px',
//             'left': '307px',
//             'top': '-26px'
//         });
//             $('.NorthAmericaContainer_point').show(0);

//     },
//     mouseleave: function() {
//         $('#NorthAmerica').css({
//             'width': '255px',
//             'height': '229px',
//             'left': '328px',
//             'top': '0'
//         });
//         $('.NorthAmericaContainer_point').hide(0);

//     }
// });
$('#SouthAmerica').hover(
    () => {
        $('#SouthAmerica').css({
            'width': '190px',
            'height': '270px',
            'left': '447px',
            'top': '179px',
        });
    },
    () => {
        $('#SouthAmerica').css({
            'width': '160px',
            'height': '228px',
            'left': '447px',
            'top': '185px',
        });
    }
);
$('#Africa').hover(
    () => {
        $('#Africa').css({
            'width': '270px',
            'height': '288px',
            'left': '572px',
            'top': '97px',
        });
    },
    () => {
        $('#Africa').css({
            'width': '240px',
            'height': '256px',
            'left': '590px',
            'top': '100px',
        });
    }
);
$('#Eurasia').hover(
    () => {
        $('#Eurasia').css({
            'width': '505px',
            'height': '259px',
            'left': '604px',
            'top': '-10px',
        });
    },
    () => {
        $('#Eurasia').css({
            'width': '475px',
            'height': '244px',
            'left': '613px',
            'top': '0',
        });
    }
);
$('#Oceania').hover(
    () => {
        $('#Oceania').css({
            'width': '230px',
            'height': '231px',
            'left': '920px',
            'top': '184px',
        });
    },
    () => {
        $('#Oceania').css({
            'width': '200px',
            'height': '201px',
            'left': '920px',
            'top': '184px',
        });
    }
);


//cookies animation
$('.cookiesPopup_right').hover(
    ()=>{
        $('.cookieMainPart').css({
            'width':'280px',
            'height':'280px',
            'transform':'rotate(-20deg)'
        })
        $('.cookieCrumb1').css({
            'width':'35px',
            'height':'35px',
            'top':'215px',
            'left':'330px',
        })
        $('.cookieCrumb2').css({
            'width':'13px',
            'height':'13px',
            'top':'290px',
            'left':'260px',
        })
        $('.cookieCrumb3').css({
            'width':'10px',
            'height':'10px',
            'top':'230px',
            'left':'270px',
        })
    },
    ()=>{
        $('.cookieMainPart').css({
            'width':'250px',
            'height':'250px',
            'transform':'rotate(0deg)'
        })
        $('.cookieCrumb1').css({
            'width':'26px',
            'height':'26px',
            'top':'240px',
            'left':'270px',
        })
        $('.cookieCrumb2').css({
            'width':'8px',
            'height':'8px',
            'top':'267px',
            'left':'247px',
        })
        $('.cookieCrumb3').css({
            'width':'8px',
            'height':'8px',
            'top':'225px',
            'left':'255px',
        })
    }
)

//burger work
$('.header_burger').click(()=>{
    $('.burgerCon').css('display', 'flex')
})
$('.burger_xmark').click(()=>{
    $('.burgerCon').css('display', 'none')
})
$('#burger_homePage').click(()=>{
    openHomePage();
    $('.burgerCon').css('display', 'none')
})
$('#burger_menu').click(()=>{
    openMenuPage()
    $('.burgerCon').css('display', 'none')
})
$('#burger_orders').click(()=>{
    openOrdersPage();
    $('.burgerCon').css('display', 'none')
})
$('#burger_contacts').click(()=>{
    openContactsPage();
    $('.burgerCon').css('display', 'none')
})