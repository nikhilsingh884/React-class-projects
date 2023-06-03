import { useState } from "react";

function UseState() {
  const [name, setName] = useState("Red");
  const [itemsAdded, setItemsAdded] = useState(0);
  const [isShowing, setIsShowing] = useState("true");
  const [profile, setProfile] = useState({
    Name: "Nikhil",
    Mobile: "9924768290",
    Age: "26",
  });
  const [friends, setFriends] = useState(["Jayashree", "Akash", "Babu", "Tahid", "Darshit"]);

  const [formValue, setFormValue] = useState("")

  function addFriend() {
    setFriends([...friends, formValue]);
    setFormValue("");
  }
  // ---------------------------------------------------------------------------------------------

  function changeData() {
    setProfile({
      ...profile,
      Name: "Tahid"
    })
  }

  // ---------------------------------------------------------------------------------------------

  return (
    <>
      <h1>You have selected {name} color.</h1>
      <button
        className="btn btn-primary"
        style={{
          marginRight: "10px",
        }}
        onClick={() => setName("Blue")}
      >
        {" "}
        Blue{" "}
      </button>
      <button
        className="btn btn-success"
        style={{
          marginRight: "10px",
        }}
        onClick={() => setName("Green")}
      >
        {" "}
        Green{" "}
      </button>
      <button
        className="btn btn-info"
        style={{
          marginRight: "10px",
        }}
        onClick={() => setName("Sky Blue")}
      >
        {" "}
        Sky Blue{" "}
      </button>
      <hr />
      {/* ----------------------------------------------------------------------------------- */}
      <div>{itemsAdded}</div> <br />
      <button
        className="btn btn-primary me-1"
        onClick={() => setItemsAdded(itemsAdded + 1)}
      >
        Increase no.
      </button>
      <button
        className="btn btn-primary me-1"
        onClick={() => setItemsAdded(itemsAdded - 1)}
      >
        Decrease no.
      </button>
      <hr />
      {/* ----------------------------------------------------------------------------------- */}
      <div style={{ height: "300px" }}>
        <div className="btn-group">
          <button
            className="btn btn-primary me-2"
            onClick={() => setIsShowing(false)}
          >
            Hide image
          </button>
          <button
            className="btn btn-info me-2"
            onClick={() => setIsShowing(true)}
          >
            Show image
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => setIsShowing(!isShowing)}
          >
            Hide/Show image
          </button>
        </div>

        {isShowing ? (
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTteT0lXKj7_PwjpLWm5bzOs-eS4y-xvgbMMA&usqp=CAU" />
        ) : null}
      </div>
      <hr />
      {/* --------------------------------------------------------------------------- */}

      <div className="card w-25">
        <div className="card-header">
          <h2>Customer Profile</h2>
        </div>
        <div className="card-body">
          <h3>Name: {profile.Name}</h3>
          <h5>Mobile: {profile.Mobile}</h5>
          <h5>Age:  {profile.Age}</h5>
        </div>
      </div>
      <br />
      <button className="btn btn-primary" onClick={() => changeData()}>Change Name to Tahid</button>
      <hr />

      {/* --------------------------------------------------------------------------- */}

      <div className="card w-50">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2>Friend's List</h2> <span className="badge bg-primary fs-5">{friends.length}</span>
        </div>
        <div className="card-body d-flex">
          <input className="form-control" value={formValue} onChange={(e) => setFormValue(e.target.value)} type="text" placeholder="Add more friends.." />
          <button className="btn btn-success ms-3" onClick={addFriend}>Add</button>

        </div>
        <div className="card-body">
          {
            friends.map((item, index) => {
              console.log(item);

              return <h3>{item}</h3>
            })
          }
        </div>
        <div className="card-footer">
          <button className="btn btn-danger me-3" onClick={() => setFriends([])}>Clear list</button>
          <button className="btn btn-primary me-3" onClick={() => setFriends(["Jayashree", "Akash", "Babu", "Tahid", "Darshit"])}>Show All</button>

        </div>
      </div>
      <br />
      <hr />

    </>
  );
}

export default UseState;
