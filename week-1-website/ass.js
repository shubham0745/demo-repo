
 function isanagram(str1 ,str2)
 {
    let x=str1.toLowerCase();
    x=x.split("");
    x.sort();
    x=x.join("");


    let y=str2.toLowerCase();
    y=y.split("");
    y.sort();
    y=y.join("");
    
    if(x==y)
    {
        console.log("is an anagram");
    }
    else
    {
        console.log("is not an anagram");
    }
 }

 isanagram("ABC","cab");