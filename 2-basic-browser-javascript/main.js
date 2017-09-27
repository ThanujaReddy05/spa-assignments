let total = 0;
let multi = 1.2;
let stopFlag = 0;
let cookie = localStorage.getItem('total')
const errorMsg = "Bad"
let  counter = 0
let aCounter = 0


const displayTotal = (a) => {
    checkTotal()
    return $('#total').html(' ' + a)
}

const add = () => {
    if(multi > 1.2){
        total = total + multi
    }
    else{
        total++
    }
    return total
}


const addTimed = () => {
    if(stopFlag === 0){
        displayTotal(add())
      return setTimeout(addTimed, 50)
         

    }
    else{
        stopFlag = 0;
    }
    checkTotal()
}

const startAutoClicker = () => {
    counter = counter + 1
    return counter
}


const clearTotal = () => {
    localStorage.removeItem('total')
    stopFlag = 1
    total = 0
    displayTotal(total)
}


const checkTotal = () => {
    if (total >= 100) {
        $('#auto_button').fadeIn(200)
    }
     else if(total >= 10 && total < 100)  {
        $('#multi_button').fadeIn(200)
        $('#auto_button').fadeOut(200)
     } else {
        $('#auto_button').fadeOut(200)
        $('#multi_button').fadeOut(200)
     }    
}

$(document).ready(() => { 

    if(cookie != null){
                total = cookie
                displayTotal(total)
            }

    $("#add_button").click(
                (event) => {
                    displayTotal(add())
                })


    $("#multi_button").click(
                    (event) => {
                        (total<10)? alert(errorMsg) : total = (total * multi) - 10
                        multi = multi +0.2
                         $('add_button').html('+' + multi)
                         $('multi_button').html('+' + multi)
                         $('#auto_button').html('+' + multi)
                         $('#cost').fadeIn(100)
                         $('#cost').html('-10')
                         $('#cost').fadeOut(100)
                    })

    $("#auto_button").click(
                        (event) => {
                           if (total < 100){
                                alert(errorMsg) 
                           } else {
                                addTimed()
                               aCount= startAutoClicker()
                            }
                            $('autoClickerCount').html('+' + aCount)
                            if(total > 100) {
                                total = total-100
                                $('#cost').fadeIn(100)
                                $('#cost').html('-100')
                                $('#cost').fadeOut(100)
                            }
                        })

    
    $("#reset").click(
                        (event) => {
                            clearTotal()
                        }
                    )

    localStorage.setItem('total',total)
    displayTotal(total)
})  




