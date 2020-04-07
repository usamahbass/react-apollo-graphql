import React from "react";
import { GoMarkGithub, GoSearch, GoBell, GoPlus } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";

export const Header = ({ smallAvatar }) => {
  return (
    <div className="p_relative">
      <header className="header header_responsive">
        <div className="header_item d_lg_flex">
          <a href="!#" className="header_link">
            <GoMarkGithub fontSize="25px" />
          </a>
        </div>
        <div className="header_item d_lg_none"></div>
        <div className="header_item header_item_full mr_lg_3">
          <div className="header_search">
            <div className="p_relative">
              <form>
                <label className="header_label d_flex">
                  <input
                    type="text"
                    className="header_input"
                    placeholder="Search or jump to..."
                  />
                  <GoSearch
                    className="mr_2 mt_1 header_input_icons"
                    fontSize="15px"
                  />
                </label>
              </form>
            </div>
          </div>

          <nav className="d_flex flex_row">
            <a href="#!" className="header_link mr_lg_3">
              Pull request
            </a>
            <a href="#!" className="header_link mr_lg_3">
              Issues
            </a>
            <a href="#!" className="header_link mr_lg_3">
              Marketplace
            </a>
            <a href="#!" className="header_link mr_lg_3">
              Explore
            </a>
          </nav>
        </div>

        <div className="header_item d_flex_lg_order_none">
          <a href="#!" className="header_link p_relative">
            <GoBell fontSize="15px" />
          </a>
        </div>

        <div className="header_item d_flex_lg_order_none">
          <a href="#!" className="header_link p_relative">
            <GoPlus fontSize="15px" />
            <MdArrowDropDown />
          </a>
        </div>

        <div className="header_item d_flex_lg_order_none">
          <a href="#!" className="header_link p_relative">
            <img src={smallAvatar} alt="profile" className="header_image" />
            <MdArrowDropDown className="mb_2_5" />
          </a>
        </div>
      </header>
    </div>
  );
};
