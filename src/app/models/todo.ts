export class Todo {
    private id: number;
    private name: String;
    private finished: boolean;
    private date: Date;

    constructor(obj?: any) {
        this.id = (obj && obj.id) || Math.floor(Math.random() * 1000);
        this.name = (obj && obj.name) || '';
        this.finished = (obj && obj.finished) || false;
        this.date = new Date(Date.now());
    }

    getId(): number {
        return this.id;
    }

    getName(): String {
        return this.name;
    }

    isFinished(): boolean {
        return this.finished;
    }

    toggleStatus(): void {
        this.finished = !this.finished;
    }
}
