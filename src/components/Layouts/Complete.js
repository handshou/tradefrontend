import React, { Component } from "react";
import { Icon, Input, AutoComplete } from "antd";
import "antd/dist/antd.css";
import enUS from "antd/lib/locale-provider/en_US";

const Option = AutoComplete.Option;

function onSelect(value) {
  console.log("onSelect", value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100)
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      {item.query} 在
      <a
        href={`https://s.taobao.com/search?q=${item.query}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.category}
      </a>
      区块中
      <span className="global-search-item-count">约 {item.count} 个结果</span>
    </Option>
  );
}

export default class Complete extends Component {
  state = {
    dataSource: []
  };

  componentDidMount() {
    this.searchBar.focus();
  }

  handleSearch = value => {
    this.setState({
      dataSource: value ? searchResult(value) : []
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div
        className="global-search-wrapper"
        style={{ paddingBottom: "3px", paddingTop: "6px", width: 290 }}
      >
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: "100%", marginTop: -30, paddingBottom: 5 }}
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="Search"
          optionLabelProp="text"
          locale={enUS}
        >
          <Input
            locale={enUS}
            ref={Input => {
              this.searchBar = Input;
            }}
            suffix={
              <Icon
                type="search"
                style={{
                  color: "#6E6E6E",
                  transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
                  fontSize: "16px"
                }}
                className="certain-category-icon"
              />
            }
          />
        </AutoComplete>
      </div>
    );
  }
}
