import './taskForm.css'

export default function TaskForm() {
    return (
        <div className="form-background">
            <form action="post">
                <label htmlFor="name">Name:<br/>
                <input type="text" name="name" id="" />
                </label>

                <label htmlFor="stats">Status:<br/>
                <select name="stats" placeholder='Select a value' id="" >
                    <option disabled selected hidden></option>
                    <option value="listed">Listed</option>
                    <option value="started">Stardted</option>
                    <option value="ended">Ended</option>
                </select>
                </label>

                <label htmlFor="description">Description<br/>
                <textarea name="description" id="" rows="10"></textarea>
                </label>
                
                <button className='form-butt' type="submit">Submit</button>
            </form>
        </div>
    )
}