import React from 'react';
import { connect } from 'react-redux';
import { Segment, Divider } from 'semantic-ui-react';


const ChatMessage = ({ message }) =>( 
  
  <Segment>
    <i>{message.email}</i>
    <Divider hidden />
    <blockquote>{message.body}</blockquote>
  </Segment>
)


export default ChatMessage