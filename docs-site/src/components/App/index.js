import React, { useState, useEffect, useMemo } from "react";
import ExampleComponents from "../Examples";
import ribbon from "./ribbon.png";
import logo from "./logo.png";
import DatePicker from "../../../../dist/index";
import { format } from "date-fns";

const Example = () => {
  const [selectedDates, setSelectedDates] = useState([
    new Date(),
    new Date(Date.now() - 100000000),
  ]);
  const [isScrolled, setIsScrolled] = useState(true);

  const inputStr = useMemo(() => {
    const minDate = new Date(Math.min.apply(null, selectedDates));
    const maxDate = new Date(Math.max.apply(null, selectedDates));
    return `${format(minDate, "yyyy-MM-dd")} -> ${format(
      maxDate,
      "yyyy-MM-dd"
    )}`;
  }, [selectedDates]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  const handleOnChange = (dates, event) => {
    setSelectedDates(dates);
  };

  const handleScroll = () => {
    const Show = window.scrollY < 400;
    if (Show) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <DatePicker
      selectsMultiple
      multipleSelected={selectedDates}
      value={inputStr}
      onChange={handleOnChange}
      shouldCloseOnSelect={false}
    />
  );
};

const Root = () => (
  <div>
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">React Datepicker</h1>
        <div className="hero__crafted-by">
          <a href="https://hackerone.com" className="hero__crafted-by-link">
            Crafted by{" "}
            <img
              src={logo}
              className="hero__image"
              alt="HackerOne"
              title="HackerOne"
            />
          </a>
        </div>
        <div className="hero__example">
          <Example />
        </div>
      </div>
    </div>
    <div className="wrapper">
      <h1>React Datepicker</h1>
      <p className="badges">
        <a href="https://npmjs.org/package/react-datepicker">
          <img
            src="https://badge.fury.io/js/react-datepicker.svg"
            alt="NPM package version badge"
            className="badge"
          />
        </a>
        <a href="https://github.com/Hacker0x01/react-datepicker/actions/workflows/test.yml">
          <img
            src="https://github.com/Hacker0x01/react-datepicker/actions/workflows/test.yml/badge.svg"
            alt="Test suite status badge"
            className="badge"
          />
        </a>
        <a href="https://david-dm.org/Hacker0x01/react-datepicker">
          <img
            src="https://david-dm.org/Hacker0x01/react-datepicker.svg"
            alt="Dependency status badge"
            className="badge"
          />
        </a>
        <a href={"https://npmjs.org/package/react-datepicker"}>
          <img
            src="https://img.shields.io/npm/dm/react-datepicker.svg"
            alt="Download count badge"
            className="badge"
          />
        </a>
      </p>
      <p>A simple and reusable datepicker component for React.</p>

      <h2>Installation</h2>
      <p>The package can be installed via NPM:</p>
      <p>
        <code>npm install react-datepicker --save</code>
      </p>
      <p>Or by using Yarn:</p>
      <p>
        <code>yarn add react-datepicker</code>
      </p>
      <p>
        Below are examples which also can be edited directly via the editor on
        the left side and will be rendered on the right.
      </p>
    </div>
    <div className="wrapper">
      <ExampleComponents />
    </div>

    <a href="https://github.com/Hacker0x01/react-datepicker/">
      <img className="github-ribbon" src={ribbon} alt="Fork me on GitHub" />
    </a>
  </div>
);

export default Root;
