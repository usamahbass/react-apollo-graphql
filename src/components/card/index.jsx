import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoLink } from "react-icons/go";

export const Card = ({
  avatar,
  emojistatus,
  messagestatus,
  name,
  nickname,
  bio,
  location,
  weburl,
  icons,
}) => {
  return (
    <div className="card_full pr_md_3 col_lg_3 col_md_4 float_md_left">
      <div className="card_clear_fix">
        <div className="float_left pr_md_10 col_md_12">
          <Link className="d_block">
            <img
              src={avatar}
              alt="profile"
              className="avatar avatar_start h_full w_standard"
            />
          </Link>
        </div>

        <div className="float_md_left w_standard">
          <div className="p_relative">
            <div className="font_3">
              <div className="card_status p_2 rounded_bottom_1 rounded_bottom_0">
                <div className="d_flex">
                  <div className="d_inline_flex font_2">
                    <div className="mr_1">{emojistatus}</div>
                  </div>
                  <div className="pt_1 font_2">
                    <div className="d_inline_block">
                      <span>{messagestatus}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p_static float_left col_md_12 top_0 pb_md_3 pt_md_3">
          <h1 className="card_name pl_2 pl_md_0">
            <span className="span_name d_block o_hidden">{name}</span>
            <span className="span_nickname d_block">{nickname}</span>
          </h1>

          <div className="d_block">
            <button className="btn d_block w_standard mb_3 mt_2">
              Edit profile
            </button>
          </div>

          <div className="card_bio mb_2">
            <div>{bio}</div>
          </div>

          <div>
            <ul className="card_location_url mb_3">
              <li className="card_list_item pt_1 mb_1">
                <FaMapMarkerAlt id={icons} color="#6a737d" />{" "}
                <span>{location}</span>
              </li>

              <li className="card_list_item pt_1">
                <GoLink color="#6a737d" />{" "}
                <Link id={icons} className="card_list_link">
                  {weburl}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
