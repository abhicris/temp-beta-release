import React from "react";
import { Input, Select } from "antd";
import "../assets/css/search.css";
import Searchtermlist from "./SearchTermList";
const { Option } = Select;
const Search = (props) => {
  const exploreOptions = [
    { label: "MUSIC", value: "1" },
    { label: "ARTIST", value: "2" },
  ];
  return (
    <div>
      <div className="search-input-container my-4">
        <Input
          className="search-input"
          placeholder="SEARCH FOR NFTS, ARTISTS, COLLECTIONS, TRACKS AND MORE!"
          size="large"
        ></Input>
      </div>
      <div className="search-drop-container">
        <div className="drop-item">
          <div className="drop-label">SEARCH</div>
          <div className="drop-select-container">
            <Select
              placeholder="Select"
              size="large"
              defaultActiveFirstOption={true}
              className="drop-select"
              dropdownClassName="drop-down-select"
            >
              {exploreOptions?.map((opt, i) => (
                <Option key={i} value={opt.value} className="drop-option">
                  {opt.label}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="drop-item">
          <div className="drop-label">BY</div>
          <div className="drop-select-container">
            <Select
              placeholder="Select"
              size="large"
              defaultActiveFirstOption={true}
              className="drop-select"
              dropdownClassName="drop-down-select"
            >
              {exploreOptions?.map((opt, i) => (
                <Option key={i} value={opt.value} className="drop-option">
                  {opt.label}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div>
        <Searchtermlist></Searchtermlist>
      </div>
    </div>
  );
};

export default Search;
