import React from "react";
import "./dropDown.css";
const url = process.env.REACT_APP_BACKEND_URL;

export default function DropDown({
  setPost,
  filterOptionLanguage,
  postForFilter,
  setFilterOptionLanguage,
}) {
  function filterLanguage(e) {
    let result = postForFilter.filter((currentItem) => {
      return currentItem.post_language === e.target.value;
    });
    setPost(result);
  }

  async function handleRest() {
    const response = await fetch(`${url}/api/posts`);
    const data = await response.json();
    setPost(data.payload);
    setFilterOptionLanguage(data.payload);
  }

  //Lang data ordered alphabetical
  let filterLanguages = filterOptionLanguage.sort((a, b) => {
    let fa = a.post_language.toLowerCase(),
      fb = b.post_language.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  //Lang data removal of duplicates
  const uniqueLanguage = filterLanguages.filter((obj, index) => {
    return (
      index ===
      filterLanguages.findIndex((o) => obj.post_language === o.post_language)
    );
  });

  return (
    <div className="dropDown">
      <form>
        <div className="dropDown_buttons">
          <select
            onChange={(e) => {
              filterLanguage(e);
            }}
          >
            <option value="" hidden>
              Language
            </option>
            {uniqueLanguage.map((current) => {
              return <option key={current.id}>{current.post_language}</option>;
            })}
          </select>
          <input type="reset" value="Reset" onClick={handleRest} />
        </div>
      </form>
    </div>
  );
}
