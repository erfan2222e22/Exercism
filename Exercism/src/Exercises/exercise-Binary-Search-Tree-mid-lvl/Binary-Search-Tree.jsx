const Binary_Search_Tree = () => {
    

    function recordAllData(bst) {
        const array = [];
        bst.each((item) => array.push(item))
        return array
    }


    class Node {
        constructor(value) {
            this.data = value;
            this.left = null;
            this.right = null;
        }
    }


class BinarySearchTree {
    
    constructor(value) {
        this.root = null;
        this.value = value
        this.insert(this.value)
    }

        get data() {
            return this.root.data
        }

        get right() {
            const { right } = this.root;
            return right;
        }

        get left() {
            const { left } = this.root;
            return left;
        }

  insert(value) {

      const newNode = new Node(value);

      if (this.root === null) {
          this.root = newNode;
          return 
      }

      let current = this.root;

      while (true) {
          if (value <= current.data) {
              if (current.left === null) {
                  current.left = newNode;
                  return;
              }
              current = current.left;
          } else {
              if (current.right === null) {
                  current.right = newNode;
                  return;
              }
              current = current.right;
          }
      }

      }
    
    
    each(items) {
        const test = (node) => {
            if (node === null) return;
            test(node.left);
            items(node.data);
            test(node.right);
        }
        test(this.root);
    }

    }
    const four = new BinarySearchTree(2)    
 four.insert(1);
      four.insert(3);
      four.insert(6);
      four.insert(7);
    four.insert(5);

    return (
        <div onClick={() => console.log(recordAllData(four))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            idk
        </div>
  )
}
export default Binary_Search_Tree