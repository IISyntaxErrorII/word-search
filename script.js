import words from './data.js'
document.addEventListener("DOMContentLoaded", function(){
    const $ = el => document.querySelector(el)
    const $$ = el => document.querySelectorAll(el)
    const $wordList = $("#wordList")
    console.log($wordList)
    const $searchInput = $("#searchInput")


    words.forEach(word=>{
        let $li = document.createElement("li")
        let letters = word.split("")
        letters.forEach(letter=>{
            let $span = document.createElement("span")
            $span.textContent = letter
            $li.appendChild($span)
        })
        $wordList.appendChild($li)
        $li.classList.add("hiddenEl")
    })
    $searchInput.addEventListener("keyup", function(){
        let wordFilter = $searchInput.value.toLowerCase()
        let $wordItems = $$("#wordList li")
        let $wordLetters = $$("#wordList li span")
        if($searchInput.value.length > 0){
            $wordItems.forEach(item=>{
                let text = item.textContent.toLowerCase()
                if(text.includes(wordFilter)){
                    $wordLetters.forEach(letter=>{
                        if(wordFilter.includes(letter.textContent.toLowerCase())){
                            letter.classList.add("highLight")
                        }
                        else{
                            letter.classList.remove("highLight")
                        }
                    })
                    item.classList.remove("hiddenEl")

                } else{
                    item.classList.add("hiddenEl")
                }
            })
        } else{
            $wordItems.forEach(item=>{
                item.classList.add("hiddenEl")
            })
        }
    })
});