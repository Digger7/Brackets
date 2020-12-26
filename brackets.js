const solution = (brackets) => {
    const brackpair = {
        "<" : ">",
        "(" : ")",
        "[" : "]",
        "{" : "}",
    }

    const brackarr = []
        for (let prop in brackpair){
        if(brackpair.hasOwnProperty(prop)){
            brackarr.push(prop)
            brackarr.push(brackpair[prop])
        }
    }

    let result = true
    brackets = brackets.replace(/ /g,'');
    let check = []
    for(let item of brackets){
        if(brackpair[item] !== undefined){
            check.push(item)
            result = false
        }else
            if(brackarr.find((brackarrItem)=>brackarrItem===item))
                if(item !== brackpair[check.pop()]){
                    result = false
                } else result = true
    }
    return result
}

//console.log(solution("[asdfasdf { ( asdfasdf)}   asdfasdf   [][]"))
//console.log(solution("[ 22222{2 (2 )222}      222]"))
//console.log(solution("[ { ( )}  []"))

let testvar = '(1)asda{222{333[(2222)]333}}sd()'
console.log(solution(testvar)?"Правильно":"Не правильно")





