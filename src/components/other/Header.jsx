import React, {useState} from "react";

function Header(props) {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-semibold">
        Hello <br /> <span className="text-3xl font-medium">🙌</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-xl">
        Log Out
      </button>
    </div>
  );
}

export default Header;
