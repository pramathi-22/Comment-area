import React, { Component } from 'react'
import CommentBox from '../Comment-box/CommentBox';
import Comments from '../Comment-box/Comments';
import social from '../../logo.svg'
import './Comment-page.css'

export class Commentpage extends Component {

    constructor(props) {
        super(props);
        this.handleAddComment = this.handleAddComment.bind(this);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        /*global Ably*/
        const channel = Ably.channels.get('comments');

        channel.attach();
        channel.once('attached', () => {
            channel.history((err, page) => {
                // create a new array with comments only in an reverseved order (i.e old to new)
                const comments = Array.from(page.items.reverse(), item => item.data)

                this.setState({ comments });
            });
        });
    }

    handleAddComment(comment) {
        this.setState(prevState => {
            return {
                comments: prevState.comments.concat(comment)
            };
        });
    }

    render() {
        return (
          <div>
            <div className="title">
                    <p>COMMENTS (12) </p>
            </div>
            <div className="border-box">
                <div className="comment-box">
                    <div className="profile-pic">
                        <img src={social} />
                    </div>
                    <div className="profile-name">
                        <p>Druti Singh</p>
                    </div>
                    <div className="date-time">
                        <p>12:43PM. 12th Jan '19</p>
                    </div>
                    <div className="comment">
                        <p>Its a lovely article. Very informative and useful.</p>
                    </div>
                    <div className="reply-btn">
                            <li className="dropdown">
                                <a href="javascript:void(0)" className="dropbtn">Reply</a>
                                <div className="dropdown-content">
                                    <input type="text" placeholder="Write a comment..." />
                                </div>
                        </li>
                    </div>
                </div>
                </div>


                <div className="border-box">
                    <div className="comment-box">
                        <div className="profile-pic">
                            <img src={social} />
                        </div>
                        <div className="profile-name">
                            <p>Druti Singh</p>
                        </div>
                        <div className="date-time">
                            <p>12:43PM. 12th Jan '19</p>
                        </div>
                        <div className="comment">
                            <p>Its a lovely article. Very informative and useful.</p>
                        </div>
                        <div className="reply-btn">
                            <li className="dropdown">
                                <a href="javascript:void(0)" className="dropbtn">Reply</a>
                                <div className="dropdown-content">
                                    <CommentBox handleAddComment={this.handleAddComment} />
                                    <Comments comments={this.state.comments.reverse()} />                                </div>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="border-box">
                    <div className="comment-box">
                        <div className="profile-pic">
                            <img src={social} />
                        </div>
                        <div className="profile-name">
                            <p>Druti Singh</p>
                        </div>
                        <div className="date-time">
                            <p>12:43PM. 12th Jan '19</p>
                        </div>
                        <div className="comment">
                            <p>Its a lovely article. Very informative and useful.</p>
                        </div>
                        <div className="reply-btn">
                            <a href="#">Reply</a>
                        </div>
                    </div>
                </div>
                <div className="border-box">
                    <div className="comment-box">
                        <div className="profile-pic">
                            <img src={social} />
                        </div>
                        <div className="profile-name">
                            <p>Druti Singh</p>
                        </div>
                        <div className="date-time">
                            <p>12:43PM. 12th Jan '19</p>
                        </div>
                        <div className="comment">
                            <p>Its a lovely article. Very informative and useful.</p>
                        </div>
                        <div className="reply-btn">
                            <a href="#">Reply</a>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}
export default Commentpage