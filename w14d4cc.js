class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(3);
root.left = new Node(4);
root.right = new Node(5);

root.left.left = new Node(5);
root.left.right = new Node(4);

root.right.left = new Node(7);




function postorder(root){
    if(root==null){
        return
    }
    
    postorder(root.left)
    postorder(root.right)
    console.log(root.val);
}

function preorder(root){
    if(root==null){
        return
    }
    
    console.log(root.val);
    preorder(root.left)
    preorder(root.right)
}

function inoreder(root){
    if(root==null){
        return
    }
    
    inoreder(root.left)
    console.log(root.val);
    inoreder(root.right)
}

console.log("=====postoreder=====")
postorder(root)
console.log("=====preorder=====")
preorder(root)
console.log("=====inoreder=====")
inoreder(root)



// dry run for postoreder
/*

Ist

function postorder(3){
    if(root==null){
        return
    }                          
    
    postorder(root.left)
    postorder(root.right)
    console.log(root.val);
}
//  this will give 4,5,4

2nd

function postorder(4){
    if(root==null){
        return
    }
    
    postorder(root.left)
    postorder(root.right)
    console.log(root.val);
}
// this will give 5
3rd

function postorder(5){
    if(root==null){
        return
    }
    
    postorder(root.left)
    postorder(root.right)
    console.log(root.val);
}
// this will print 5

4th

function postorder(4){
    if(root==null){
        return
    }
    
    postorder(root.left)
    postorder(root.right)
    console.log(root.val);
}
// this will print 4


5th

function postorder(5){
    if(root==null){
        return
    }
    
    postorder(root.left)
    postorder(root.right)
    console.log(root.val);
}
// this will give 7

6th

function postorder(7){
    if(root==null){
        return
    }
    
    postorder(root.left)
    postorder(root.right)
    console.log(root.val);
}
// this will print 7

// final output = 5,4,4,7,5,3
*/


// dry run for preoreder
/*
Ist

function preorder(root){
    if(root==null){
        return
    }
    
    console.log(root.val);
    preorder(root.left)
    preorder(root.right)
}
//this will print 3

2nd

function preorder(root){
    if(root==null){
        return
    }
    
    console.log(root.val);
    preorder(root.left)
    preorder(root.right)
}
//this will print 4


3rd 

function preorder(root){
    if(root==null){
        return
    }
    
    console.log(root.val);
    preorder(root.left)
    preorder(root.right)
}
//this will print 5


4th

function preorder(root){
    if(root==null){
        return
    }
    
    console.log(root.val);
    preorder(root.left)
    preorder(root.right)
}
//this will print 4


5th

function preorder(root){
    if(root==null){
        return
    }
    
    console.log(root.val);
    preorder(root.left)
    preorder(root.right)
}
//this will print 5


6th

function preorder(root){
    if(root==null){
        return
    }
    
    console.log(root.val);
    preorder(root.left)
    preorder(root.right)
}
//this will print 7
// final output = 3,4,5,4,5,7

*/ 


// dry run for inoreder
/*
1st 

function inoreder(root){
    if(root==null){
        return
    }
    
    inoreder(root.left)
    inoreder(root.right)
    console.log(root.val);
}
this will print 5

2nd 

function inoreder(root){
    if(root==null){
        return
    }
    
    inoreder(root.left)
    inoreder(root.right)
    console.log(root.val);
}
this will print 4

3rd

function inoreder(root){
    if(root==null){
        return
    }
    
    inoreder(root.left)
    inoreder(root.right)
    console.log(root.val);
}
this will print 4

4th

function inoreder(root){
    if(root==null){
        return
    }
    
    inoreder(root.left)
    inoreder(root.right)
    console.log(root.val);
}
this will print 3

5th

function inoreder(root){
    if(root==null){
        return
    }
    
    inoreder(root.left)
    inoreder(root.right)
    console.log(root.val);
}
this will print 7

6th

function inoreder(root){
    if(root==null){
        return
    }
    
    inoreder(root.left)
    inoreder(root.right)
    console.log(root.val);
}

this will print 5
final output = 5,4,4,3,7,5
*/