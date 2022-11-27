/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    b=[];
for(i=0; i<sentences.length; i++){
    a=sentences[i].split(" ")
    b.push(a.length)
}
return b.reduce(fun)

function fun (o,p){
t=(o>p)? o : p
return t;
} 
};