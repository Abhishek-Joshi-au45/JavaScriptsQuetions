// Write steps in heapify/percolate down method, and write time complexity and space complexity analysis.
/*
Max-heapify is a process of arranging the
nodes in correct order so that they follow
max-heap property.

Steps in heapify down method
step 1 : check the left sub tree and right sub tree follow the Max heap property 
step 2 : do heapify for root 

         if(root < Math.max(right child, left child)   
         swap the value of root with maximum value 
*/



/*
time complexity of heapify 

Heapify a single node takes O(log N) time
complexity where N is the total number of
Nodes. Therefore, building the entire Heap
will take N heapify operations and the total
time complexity will be O(N*logN).
In reality, time complexity is O(n) 

Time complexity of heapify T(n) == O(Logn).
*/





/*
space complexity of heapify
sapce complexity S(n) == O[1]

*/