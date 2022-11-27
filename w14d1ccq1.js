// Q-1 ) Write a program to remove first node from a linked list:

class Node{
    constructor(data,next){
        this.data = data
        this.next = next
    }
}
function addNodeAtEnd(head,val){
    let node1 = new Node(val,null)//node with value 23
    let cur  = head
    while(cur.next!=null){
        cur = cur.next
    }
    cur.next = node1;
}
function printLL(head){
    let cur = head;
    ctr = 0
    while(cur!=null){
        console.log(cur.data);
        ctr += 1
        cur = cur.next
    }
    console.log("**********************size = ",ctr)
}
function deleteNode(val){
val = val.next
return val;
}
let head1 = new Node(2,null)
addNodeAtEnd(head1,13)
addNodeAtEnd(head1,23)
addNodeAtEnd(head1,31)

printLL(head1)

head2 = deleteNode(head1)
//head1 = head1.next
console.log(head2) 
printLL(head2)

// Output 
/*
2
13
23
31
**********************size =  4
Node {data: 13, next: Node}
13
23
31
**********************size =  3
*/
