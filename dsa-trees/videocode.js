// Video Demo code

class Node{
    constructor(val, children=[]){
      this.val=val;
      this.children=children;
    }
    // “Depth First Search” (uses stack)
    findDF(val){
      const toVisitStack = [this];
      while(toVisitStack.length){
        const current = toVisitStack.pop();
        console.log(current.val)
  
        if(current.val === val){
          return current;
        }
        for(let child of current.children){
          toVisitStack.push(child);
        }
      }
    }
    // “Breadth First Search” (uses queue)
  findBF(val){
    const toVisitStack = [this];
    while(toVisitStack.length){
      const current = toVisitStack.shift();
      console.log(current.val)
  
      if(current.val === val){
        return current;
      }
      for(let child of current.children){
        toVisitStack.push(child);
      }
    }
  }
  }
  
  class Tree {
    constructor(root) {
      this.root = root;
    }
  
    /** findInTree: return node in tree w/this val */
  
    findInTree(val) {
      return this.root.find(val)
    }
  
    /** findInTreeBFS: return node in tree w/this val */
  
    findInTreeBFS(val) {
      return this.root.findBFS(val)
    }
  }
  
  let htmlEl = new Node('html', [
    new Node('head', [new Node('title')]),
    new Node('body', [new Node('ul', [new Node('li'), new Node('li2')])])
  ])
  
  const tree = new Tree(htmlEl)
  
  tree.root;
  
  






