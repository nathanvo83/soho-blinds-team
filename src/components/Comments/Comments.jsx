import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Responsive, Grid } from "semantic-ui-react";
import comments from "../../data/comments";

const Comments = () =>  (
  <Grid columns="1" style={{ margin: 0 }}>
    <Grid.Row>
      <Grid.Column>
        <div className="CustomerFeedback-box">
          <div className="CustomerFeedback-header">
            13 Reviews for Soho Blinds
          </div>
          <div className="CustomerFeedback-stars">
            <div className="ui comments">
              {
                comments.map((com) => (
                  <div key={com.name} className="comment">
                    <a className="avatar">
                      <img src={com.image}></img>
                    </a>
                    <div className="content">
                      <a className="author">{com.name}</a>
                      <div className="metadata">
                        <div className="date">{com.datetime}</div>
                        <div className="rating">
                          <div className="CustomerFeedback-stars">
                            { Array(com.rating).fill(<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>) }
                          </div>
                        </div>
                      </div>
                      <div className="text">
                        {com.comment}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Comments;
