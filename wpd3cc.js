//Tell time complexity of all the problems: (ignore syntax errors, if any)
   
    //  Q - 1 )
    n= Number(prompt("Enter the limit"))
    i = 1
    while(i^2<=n)
    {console.log("Time complexity")
    i += 1}
    // Solution : Time complexityt od Q1 => O(n^1/2)
    
    
    
    // Q-2)
    n= Number(prompt("Enter the limit"))
    for(let i = 0;i<n;i++){
    for(let j = 0;j<i;j++){
    for(let k = 0;k<100;k++)
    {console.log("Time complexity")}
    }
    }
    //Solution : Time complexityt od Q2 =>  O(n^2)



    // Q-3)
    n= Number(prompt("Enter the limit"))
    for(let i = 0;i<n;i++){
    j = 1
    while(j<=i^2 ){
    for(k = 0;k<n/2;k++){
    console.log("Time complexity")
    }
    j+=1;
    }
    }
    // Solution : Time complexityt od Q3 => O(n^4)
