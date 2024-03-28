



export function DateTimeSelector() {
    return <form action="post"> 
        <p>
            <label htmlFor="date">Date: </label>
            <input type="date" />
        </p>

        <p>
            <label htmlFor="date">Time: </label>
            <input type="time" />
        </p>
    </form>
}