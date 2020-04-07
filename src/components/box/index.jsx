import React from "react";
import { NavLink } from "react-router-dom";
import { GoRepo } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

export const Box = props => {
  return (
    <div className="box_full col_lg_9 col_md_8 col_12 float_md_left pl_md_2">
      {/* Tab */}

      <div className="box_tab p_static_top_0 w_full" style={{ left: "446px" }}>
        <nav className="d_flex">
          <NavLink to="/" className="navbar_item ">
            Overview
          </NavLink>
          <NavLink
            to="/"
            activeClassName="navbar_item_active"
            className="navbar_item "
          >
            Repositories
            <span className="navbar_item_count">{props.repototal}</span>
          </NavLink>
          <NavLink to="/" className="navbar_item ">
            Projects{" "}
            <span className="navbar_item_count">{props.projectstotal}</span>
          </NavLink>
          <NavLink to="/" className="navbar_item ">
            Packages{" "}
            <span className="navbar_item_count">{props.packagestotal}</span>
          </NavLink>
          <NavLink to="/" className="navbar_item ">
            Stars <span className="navbar_item_count">{props.starstotal}</span>
          </NavLink>
          <NavLink to="/" className="navbar_item ">
            Followers{" "}
            <span className="navbar_item_count">{props.followerstotal}</span>
          </NavLink>
          <NavLink to="/" className="navbar_item ">
            Following{" "}
            <span className="navbar_item_count">{props.followingtotal}</span>
          </NavLink>
        </nav>
      </div>

      <div className="p_relative">
        {/* Search , Button */}

        <div className="pt_3 border_bottom_gray border_color_gray">
          <form className="d_md_flex">
            <div className="flex_auto mb_3 mb_md_0 mr_md_3">
              <input
                type="text"
                className="w_full search_repo"
                placeholder="Find a repository..."
              />
            </div>

            <div className="d_block">
              <button className="btn mr_2">
                <i>Type:</i>{" "}
                <span>
                  All
                  <IoMdArrowDropdown />
                </span>
              </button>

              <button className="btn mr_2">
                <i>Language:</i>{" "}
                <span>
                  All
                  <IoMdArrowDropdown />
                </span>
              </button>

              <button className="btn btn_green">
                <GoRepo /> New
              </button>
            </div>
          </form>
        </div>

        <div className="d_block">
          <ul className="item_repo_list">{props.children}</ul>
        </div>
      </div>
    </div>
  );
};
