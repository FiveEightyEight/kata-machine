type node<T> = {
    val: T,
    next?: node<T>,
}

export default class Queue<T> {
    public length: number;
    private head: node<T> | undefined;
    private tail: node<T> | undefined;


    constructor() {
        this.length = 0;
    }

    private create_node(item: T): node<T> {
        return { val: item, next: undefined } as node<T>;
    }

    enqueue(item: T): void {
        const new_node = this.create_node(item);
        if (!this.head) {
            this.head = new_node;
        } else if (this.length === 1) {
            this.head.next = new_node;
        } else {
            if (!this.tail) throw new Error("enqueue error appending to tail")
            this.tail.next = new_node;
        }
        this.tail = new_node;
        this.length += 1;
    }
    deque(): T | undefined {
        if (!this.head) return;
        const head_node = this.head;
        this.head = head_node.next;
        this.length -= 1;
        if (this.length === 0) {
            this.tail = undefined;
        }
        return head_node.val;
    }
    peek(): T | undefined {
        if (!this.head) return;
        return this.head.val;
    }
}