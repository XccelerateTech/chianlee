import React, { Component } from 'react';
import ApprovalCard from './ApprovalCard'
import CommentCard from './CommentCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApprovalCard>
          <CommentCard author="Jyoti" date={new Date().toLocaleString()} comment="Hello lovely">
          </CommentCard>
        </ApprovalCard>

        <ApprovalCard>
          <CommentCard author="Chian" date={new Date().toLocaleString()} comment="Hello silly">
          </CommentCard>
        </ApprovalCard>

        <ApprovalCard>
          <CommentCard author="Lutty" date={new Date().toLocaleString()} comment="Hello dd">
          </CommentCard>
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
