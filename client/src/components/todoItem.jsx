import { useState } from "react";

export function TodoItem({ todo, deleteItem, editItem }) {

  // Destructuring
  const { id, title, category, description, completed } = todo;

  // Hooks
  // The boolean determines what to show when you click the edit button. It will alternate between inputs (to edit) and p tags. And to call the editItem function or not.
  const [boolean, setBoolean] = useState(true);
  const [editText, setEditText] = useState(description);
  const [editTitle, setEditTitle] = useState(title);
  const [editCategory, setEditCategory] = useState(category);

  // Functions
  // This function triggers the boolean and edits the item if the boolean is true
  const handleEdit = () => {

    setBoolean(!boolean);
    // After you click the the edit button for a second time, the editItem function will execute
    if (!boolean) {
      editItem({...todo,
        title: editTitle,
        category: editCategory,
        description: editText,
      });
    }
  };

  return (
    <li>
      <div className="div-newtodo-col">
        <div className="new title-category-row">
          {boolean ? (
            <p className="input-new-text"> {title} </p>
          ) : (
            <input
              value={editTitle}
              type="text"
              name="title"
              className="new input-text"
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
            />
          )}
          {boolean ? (
            <p className="new input-new-text"> {category} </p>
          ) : (
            <select
              className="new input-select"
              required
              id="category"
              name="category"
              onChange={(e) => setEditCategory(e.target.value)}
              defaultValue={category}
            >
              <option value="category" disabled hidden>
                Category
              </option>
              <option label="Today" value={"Today"}></option>
              <option value={"Tomorrow"}>Tomorrow</option>
              <option label="Week" value={"Week"}></option>
            </select>
          )}
          {/* component */}
        </div>
        {boolean ? (
          <p className="input-new-text newtodo-description"> {description} </p>
        ) : (
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            type="textarea"
            id="description"
            placeholder="Description"
            className="new input-textarea"
          ></textarea>
        )}
      </div>

      <div className="btn-flex-col">
        <button className="btn btn-danger" onClick={() => deleteItem(id)}>
          Delete
        </button>
        <button className="btn btn-green" onClick={() => handleEdit()}>
          Edit
        </button>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => editItem({...todo, completed: e.target.checked})}
            className="checkboxID"
            name="checkbox"
          />
        </label>
      </div>
    </li>
  );
}
