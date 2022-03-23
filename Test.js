let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let array = 'zaabdxcy';
let array = 'zaabdxcyioufczxyuciahsdlqwdaabcdefgh';
let longest_string = 1;


function IterateOver(ABC,Array,longest_string,fresh_count=0, startingIndex=0){
    for (let i = startingIndex + 1; i < Array.length; i++){
        // ABC.indexOf
        // console.log(`${Array[i]} -- ${ABC.indexOf(Array[i].toUpperCase())}\n\n${Array[startingIndex]} -- ${ABC.indexOf(Array[startingIndex].toUpperCase())}`)
        if (ABC.indexOf(Array[i].toUpperCase()) > ABC.indexOf(Array[startingIndex].toUpperCase())){
            fresh_count++;
            if (fresh_count > longest_string){
                longest_string = fresh_count
            }
            // console.log(longest_string)
            return(IterateOver(ABC,array,longest_string,fresh_count,i));
        }
        else{
            return(IterateOver(ABC,array,longest_string,1,i));
        }
    };
    return(longest_string)
}


longest_string = IterateOver(ABC, array, longest_string)
console.log(longest_string)