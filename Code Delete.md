import React from "react";
import "./dropDown.css";
import { useRef } from "react";
const url = process.env.REACT_APP_BACKEND_URL;

export default function DropDown({
  post,
  setPost,
  filterOptionLanguage,
  filterOptionWeek,
  postForFilter,
  setFilterOptionWeek,
  setFilterOptionLanguage,
}) {
  const inputRef = useRef(null);
  function filterLanguage(e) {
    let result = postForFilter.filter((currentItem) => {
      return currentItem.post_language === e.target.value;
    });
    setPost(result);
    setFilterOptionWeek(result);
  }

  function filterDruation(e) {
    let result = postForFilter.filter((currentItem) => {
      return (
        (currentItem.post_duration === +e.target.value &&
          currentItem.post_language === inputRef.current.value) ||
        currentItem.post_duration === +e.target.value
      );
    });
    console.log("value 👉️", inputRef.current.value);
    setPost(result);
    setFilterOptionLanguage(result);
  }

  async function handleRest() {
    const response = await fetch(`${url}/api/posts`);
    const data = await response.json();
    setPost(data.payload);
    setFilterOptionLanguage(data.payload);
    setFilterOptionWeek(data.payload);
  }

  //Duration data ordered ascending
  let filterDuration = [
    ...filterOptionWeek.sort((a, b) => {
      return a.post_duration - b.post_duration;
    }),
  ];
  //Duration data removal of duplicates
  const uniqueDuration = filterDuration.filter((obj, index) => {
    return (
      index ===
      filterDuration.findIndex((o) => obj.post_duration === o.post_duration)
    );
  });

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
            ref={inputRef}
          >
            <option value="" hidden>
              Language
            </option>
            {uniqueLanguage.map((current) => {
              return <option key={current.id}>{current.post_language}</option>;
            })}
          </select>
          <select
            onChange={(e) => {
              filterDruation(e);
            }}
          >
            <option value="" hidden>
              Duration
            </option>
            {uniqueDuration.map((current) => {
              return <option key={current.id}>{current.post_duration}</option>;
            })}
          </select>
          <input type="reset" value="Reset" onClick={handleRest} />
        </div>
      </form>
    </div>
  );
}

