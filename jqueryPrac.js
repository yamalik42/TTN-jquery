$(document).ready(function() {
    //PPT Excercise
    $('#toggle-greet').on('click', () => {
        $('.toggle').toggle()
    })
    //Q1
    console.log('hello')
    //Q2
    $('#test').addClass('load')
    //Q3
    $('[class$=-new]').css('background-color', 'black')
    //Q4
    $('[type=submit]').attr('disabled', 'disabled')
    //Q5
    $('#main > .target').css('background-color', 'green')
    //Q6
    $('#replace-div').replaceWith('<p>Hi! Now I am in a p tag!</p>')
    //Q7&Q8
    $('.click').on('click', (e) => {
        $(e.target).clone().insertAfter(e.target).on('click', e.handleObj.handler)
    });
    //Q9
    $('#select-to-show').on('change', (e) => {
        $('#text-select').html($(e.target).val())
    })
    //Q10
    $('#hover-text').mouseover((e) => {
        $(e.target).next().toggle()
    })
    //Q11
    $('#dead-link').on('click', (e) => {e.preventDefault()})
    //Q12
    $('#parent-click').on('click', (e) => {
        alert('You clicked on the parent!')
    })
    $('#child-click').on('click', (e) => {
        e.stopPropagation()
    })
    //Q13
    var max = 0
    $('body').children().each((i, val) => {
        ht = $(val).height() 
        if (ht > max) {
            max = ht
        }
    })
    $('#max-height').html(max)
    //Q14
    $('#colored-table').find('td').each((i, val) => {
        cell = $(val)
        val = parseInt(cell.html())
        if (val > 10) {
            cell.css('background-color', 'lightblue')
        }
    })
    //Q15
    $.ajax({
        url: 'https://yamalik42.github.io/TTN-html-css/vc-exercise.txt',
        success: (res) => {
            //console.log(res)
            $('#ajax-res').html('An ajax request was successful, its result is in the console.')
        }
    });
    //Q16
    $('.cross-button').on('click', (e) => {
        $.ajax({
            url: 'https://yamalik42.github.io/TTN-html-css/vc-exercise.txt',
            success: (res) => {
                $(e.target).parent().remove()
            }
        })
    })
    //Q17
    var imgSrc = ['black.png', 'blue.png', 'red.png']
    var imgArr = [new Image(600, 400), new Image(600, 400), new Image(600, 400)]
    imgArr.forEach((img, i) => {
        img.src = imgSrc[i]
        $('#img-container').append(img)
        domImg = $('#img-container').children().last()
        domImg.css({'position': 'absolute', 'z-index': '0'})
        if (i !== imgArr.length-1) {
            domImg.css('width', '0px')
        } 
    })
    function initSlides(slide = $('#img-container img:first-child')) {
        let len = imgArr.length
        slideIndex = imgArr.indexOf(slide[0])

        prevIndex = '(' + ((slideIndex+len-1) % len).toString() + ')'
        prevSlide = $('#img-container img:eq'+prevIndex)

        nextIndex = '(' + ((slideIndex+len+1) % len).toString() + ')'
        nextSlide = $('#img-container img:eq'+nextIndex)

        slide.css('z-index', '1')
        prevSlide.css('z-index', '0')
        slide.animate({
            width: '600px'
        }, 3000, () => {
            setTimeout(() => {
                prevSlide.css('width', '0px')
                initSlides(nextSlide)
            }, 500)
        })
    }
    initSlides()
});