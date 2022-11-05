varhead; // head of list

    /* Linked list Node */
    classNode {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }

    // This function rotates a linked
    // list counter-clockwise
    // and updates the head.
    // The function assumes that k is
    // smaller than size of linked list.
    // It doesn't modify
    // the list if k is greater than or equal to size
    functionrotate(k) {
        if (k == 0)
            return;

        varcurrent = head;

        varcount = 1;
        while (count<k&&current != null) {
            current = current.next;
            count++;
        }

        if (current == null)
            return;

        varkthNode = current;

        while (current.next != null)
            current = current.next;

        current.next = head;

        head = kthNode.next;

        kthNode.next = null;
    }
    
    functionpush(new_data) {
        /*
        1 & 2: Allocate the Node & Put in the data
        */
        varnew_node = newNode(new_data);

        /* 3. Make next of new Node as head */
        
        new_node.next = head;

        /* 4. Move the head to point to new Node */
        head = new_node;
    }

    functionprintList1() { //for printing original list
        vartemp = head;
        varans="";
        while (temp != null) {
            ans +=  temp.data + "->";
            temp = temp.next;
        }
        varlength = ans.length;
        console.log(length);
        document.getElementById("box1").innerHTML = ans.substring(0, length-2);
    }

    functionprintList2(k) { //for printing rotated list
        vartemp = head;
        varans="";
        while (temp != null) {
            ans +=  temp.data + "->";
            temp = temp.next;
        }
        varlength = ans.length;
        console.log(length);
        document.getElementById("box2").innerHTML = ans.substring(0, length-2);
        document.getElementById("x").innerText = "Linked List After "+k+" Rotations:";
    }
    

    /* Driver program */
        varn = window.prompt("enter the number of nodes in the list:");
        for(i=0;i<n;i++){
        varvalue = window.prompt("enter the value of node:");
        push(value);
        }

        printList1();

        vark = window.prompt("enter the value of K: ");
        rotate(k);

        printList2(k);

