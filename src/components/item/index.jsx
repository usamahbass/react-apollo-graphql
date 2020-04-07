import React from "react";
import { Link } from "react-router-dom";
import { GoStar } from "react-icons/go";

const Item = ({
  reponame,
  repodescription,
  colorlanguages,
  namelanguages,
  repostars,
  repopush,
}) => {
  return (
    <li className="d_flex py_4 w_full border_bottom_gray">
      <div className="inline_block col_lg_9 w_10">
        <div className="inline_block mb_2">
          <h3>
            <Link to="/" className="repo_name">
              {reponame}
            </Link>
          </h3>
        </div>

        <div>
          <p className="d_inline_block has_color_gray mt_0 mb_2 pr_4 w_9">
            {repodescription}
          </p>
        </div>

        <div className="font_2 mt_2 has_color_gray mt_2">
          <span className="mr_3 ml_0">
            <span className="item_language mr_1" style={colorlanguages}></span>
            <span>{namelanguages}</span>
          </span>
          <span className="mr_3 ml_0">
            <span className="mr_1">
              <GoStar fontSize={14} />
            </span>
            <span>{repostars}</span>
          </span>
          <span>{repopush}</span>
        </div>
      </div>

      <div className="d_flex flex_column justify_around w_2 col_lg_3">
        <div className="has_text_right">
          <button className="btn font_2">
            <GoStar /> Star
          </button>
        </div>
        <div className="has_text_right mt_3">
          <span>Grafik</span>
        </div>
      </div>
    </li>
  );
};

export default Item;
