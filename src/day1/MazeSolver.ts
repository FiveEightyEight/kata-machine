const m = [
    "####### #",
    "#####   #",
    "####  ###",
    "###  ####",
]

const p = { x: 10, y: 2 }

function moveUp(p: Point): Point {
    return { y: p.y + -1, x: p.x };
}

function moveRight(p: Point): Point {
    return { y: p.y, x: p.x + 1};
}

function moveDown(p: Point): Point {
    return { y: p.y + 1, x: p.x };
}

function moveLeft(p: Point): Point {
    return { y: p.y, x: p.x - 1 };
}

function find_next(maze: string[], wall: string, position: Point, end: Point, path: Point[], visited: any = {}): Point[] | null {
    const { x, y } = position;
    if (visited[`${y}-${x}`]) return null
    visited[`${y}-${x}`] = true;
    if (!(maze[y] || [])[x] || maze[y][x] === wall) return null;
    if (y === end.y && x === end.x) {
        path.push(position)
        return path;
    }
    const up = find_next(maze, wall, moveUp(position), end, path, visited);
    const right = find_next(maze, wall, moveRight(position), end, path, visited);
    const down = find_next(maze, wall, moveDown(position), end, path, visited);
    const left = find_next(maze, wall, moveLeft(position), end, path, visited);
    if (!up && !right && !down && !left) return null;
    path.push(position)
    return path;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = []
    // if start.x === end.x && start.y === end.y return start;
    find_next(maze, wall, start, end, path);
    return path.reverse();
}