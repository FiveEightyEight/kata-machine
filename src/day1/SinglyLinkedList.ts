type node<T> = {
    val: T,
    next?: node<T> | undefined
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head: node<T> | undefined;



    constructor() {
        this.length = 0
        // if (item !== undefined) {
        //     this.append(item)
        // }
    }

    private get_last_node(): node<T> | undefined {
        if (!this.head) return this.head;
        let curr: node<T> = this.head
        while (curr.next) {
            curr = curr.next;
        }
        return curr;
    }

    private create_node(item: T): node<T> {
        return { val: item, next: undefined };
    }

    prepend(item: T): void {
        const node_item: node<T> = this.create_node(item);
        if (!this.head) {
            this.head = node_item
        } else {
            node_item.next = this.head;
            this.head = node_item;
        }
        this.length = this.length + 1;
    }
    insertAt(item: T, idx: number): void {
        const node_item = this.create_node(item);
        if (!this.head) {
            this.head = node_item
            this.length + this.length + 1;
            return;
        }
        let i = 0;
        let curr = this.head;
        while (i < idx && curr) {
            if (curr.next) {
                curr = curr.next
            } 
        }
        curr.next = node_item
        this.length += 1;
    }
    append(item: T): void {
        const node_item: node<T> = this.create_node(item);
        const last_node = this.get_last_node();
        if (!last_node) {
            this.head = node_item
        } else {
            last_node.next = node_item;
        }
        this.length = this.length + 1;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        let prev = undefined;
        while (curr) {
            if (curr.val === item) {
                if (prev) {
                    prev.next = curr.next
                } else {
                    this.head = curr.next;
                }
                this.length = this.length - 1;
                return curr.val
            }
            prev = curr;
            curr = curr.next;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (i === idx) return curr.val;
            curr = curr.next
            i++
        }
        return curr;
    }
    removeAt(idx: number): T | undefined {
        let i = 0;
        let curr = this.head;
        let prev = undefined;
        while (curr) {
            if (i === idx) {
                if (prev) {
                    prev.next = curr.next;
                } else {
                    this.head = curr.next;
                }
                this.length = this.length - 1;
                return curr.val;
            }
            i++;
            prev = curr;
            curr = curr.next;
        }
        return undefined;
    }
}