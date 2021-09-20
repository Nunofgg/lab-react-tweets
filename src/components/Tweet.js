import ProfileImage from "./ProfileImage";
import User from "./User";
import Message from "./Message";
import TimeStamp from "./Timestamp";
import Actions from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <ProfileImage userImage = {tweet.user.image}/>
      <div className="body">
        <div className="top">
          <User user = {tweet.user}/>
          <TimeStamp time = {tweet.timestamp}/>
        </div>
        <Message message = {tweet.message}/>
        <Actions />
      </div>
    </div>
  )
}

export default Tweet;
