type Node<T> = {
    val: T,
    next?: Node<T>,
}


export default class Stack<T> {
    public length: number;
    private head: Node<T> | undefined;


    constructor() {
        this.length = 0
        this.head = undefined;
    }

    push(item: T): void {
        const new_node = { val: item, next: undefined } as Node<T>;
        if (!this.head) {
            this.head = new_node;
        } else {
            new_node.next = this.head
            this.head = new_node;
        }
        this.length++;
    }
    pop(): T | undefined {
        if (!this.head) return;
        const return_node = this.head;
        this.head = return_node.next;
        this.length--;
        return return_node.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}